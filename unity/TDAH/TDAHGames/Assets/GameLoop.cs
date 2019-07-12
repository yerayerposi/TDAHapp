using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public class GameLoop : MonoBehaviour {

    public AnimationCurve generationCurve;
    public UnityEvent OnPlayingStarted;

    public bool isTraining;

    public bool isStartingPlaying;
    public GameObject EndGameCanvas;
    public GameObject Controller;
    public bool training = true;
    public GameObject levelManager;
    public int lvl = 1;

    public GameObject readyCanvas;
    public Text countDownText;

    enum States
    {
        Training,
        NoPlaying,
        Playing,
        SavingResults,
        NextLevel,
        EndingGame,
        Waiting
    }

    States currentState;


    // Use this for initialization
    void Start () {
        isStartingPlaying = false;
        StartCoroutine(FSM());
    }

    #region FSM

    void ChangeState(States nextState)
    {

        Debug.Log(currentState + " ----> " + nextState);
        currentState = nextState;
    }

    IEnumerator FSM()
    {

        while (true)
        {
            yield return StartCoroutine(currentState.ToString());
        }

    }

    IEnumerator Training()
    {
        


        Debug.Log("GAME START -> "+currentState);

        //float elapsedTime = 0;
        //float animationTime = 1f;

        while (currentState == States.Training)
        {
            if (training )
            {
                //Controller.SetActive(true);

                SetupScene(0);
                training = false;
                //training = false;
            }
            //            gameObject.transform.localScale = Vector3.Lerp(Vector3.zero,
            //              Vector3.one,
            //             generationCurve.Evaluate(elapsedTime / animationTime));

            //elapsedTime += Time.deltaTime;
            yield return 0;
        }
     //   gameObject.transform.localScale = Vector3.one;
        //ChangeState(States.NoPlaying);
    }



    IEnumerator Waiting()
    {
        while (Controller.activeSelf)
        {
            Controller.SetActive(false);

        }
        Debug.Log("GAME PAUSE -> " + currentState);
        readyCanvas.SetActive(true);
        CountDownBeforeStartLevel();
        //float elapsedTime = 0;
        //float animationTime = 1f;

        while (currentState == States.Waiting)
        {


            yield return 0;
        }
       
    }

    IEnumerator NoPlaying()
    {

        while (currentState == States.NoPlaying)
        {
            Controller.SetActive(false);
            yield return 0;
            // salgo de trainign guardo resultados

            if(isStartingPlaying == true)
            {
                ChangeState(States.SavingResults);

            }
            else  if(training)
            {

                ChangeState(States.Training);

                
                    //training = true;


                }

        }


        //
    }

    IEnumerator Playing()
    {
        Controller.SetActive(true);
        OnPlayingStarted.Invoke();

        while (currentState == States.Playing)
        {
            

            if (isStartingPlaying)
            {
                print("envio de mensaje tiempo restaurado");
                //Controller.SetActive(false);

                //isStartingPlaying = false;
            }

            yield return new WaitForSeconds(1);

        }

    }

    IEnumerator SavingResults()
    {
        print("gardando resultados->>>>>>>>>>>>>`+++++++++++" + lvl);

        levelManager.GetComponent<LevelManager>().GetPoints(lvl);
        print("gardando resultados");
        while (currentState == States.SavingResults)
        {
            
            if (isStartingPlaying)
            {
                ChangeState(States.NextLevel);

            }
            else
            {
                ChangeState(States.EndingGame);

            }


            yield return 0;

        }
        StopCoroutine("FSM");
        lvl++;
        StartCoroutine(NextLevel());

    }

    IEnumerator NextLevel()
    {
       
        while (currentState == States.NextLevel)
        {

           
            //lvl++;
            //print("METDO NEXT LVL ->>>>>>>>>" + lvl);

           

            yield return 0;
            ChangeState(States.Playing);

            SetupScene(lvl);
            //ChangeState(States.NoPlaying);

            //ChangeState(States.Playing);


        }

        //ChangeState(States.Playing);

        //ChangeState(States.Playing);
    }


    IEnumerator EndingGame()
    {

        while (currentState == States.EndingGame)
        {
            
            yield return 0;
            //print("FIN DEL JUEGO");

            //StopCoroutine("FSM");
            Controller.SetActive(false);

           // Destroy(Controller);
            EndGameCanvas.SetActive(true);
        }
        //ChangeState(States.NoPlaying);
    }


    #endregion

    public void TimeEnded()
    {
        isStartingPlaying = false;
        print("tiempo agotado JUEGO");
        print("WAITING");
        //ChangeState(States.Waiting);
        ChangeState(States.SavingResults);
    }

    public void TimeLvlEnded()
    {
        print("tiempo agotado NIVEL");

        ChangeState(States.SavingResults);
        readyCanvas.SetActive(true);

        StopCoroutine("FSM");
        CountDownBeforeStartLevel();
        isStartingPlaying = true;

    }

    public void GameLevelsEnded()
    {
        isStartingPlaying = false;
        print("niveles  agotado");
        ChangeState(States.EndingGame);
    }

    public void SetupScene(int lvl)
    {
    
            print("SETUP LVL " + lvl);
            levelManager.GetComponent<LevelManager>().GenerateBallsbyCurrentLevel(lvl);

        
    }

    public void GameMode(string mode)
    {
        if(mode == "training")
        {
            print("mensaje training entro");
            training = true;
            Controller.SetActive(true);
            ChangeState(States.Training);

        }


        if (mode == "playing")
        {
            print("playing ------------");
           
            print("QUUUUUUUUUUUUUUUUUUUUUUUUUUUUEEEEEEEE");


            Controller.SetActive(true);

            isStartingPlaying = true;
            training = false;
            ChangeState(States.Playing);

        }
        if (mode == "noPlaying")
        {

        
            Controller.SetActive(false);

            ChangeState(States.NoPlaying);
        }

        if (mode == "waiting")
        {
            print("WAITING");
            //ChangeState(States.Waiting);
            readyCanvas.SetActive(true);

            StopCoroutine("FSM");
            CountDownBeforeStartLevel();
        }


    }

    public void CountDownBeforeStartLevel()
    {
        print("PANTALLA COUNTDOWN ANTES DE EMPEZAR NIVEL PLS");

        int currentTime = 3;
        int maxTime = 0;
        StartCoroutine(CountDown(currentTime, maxTime));

        //ChangeState(States.Playing);

        //readyCanvas.SetActive(false);

    }

    IEnumerator CountDown(int currentTime, int maxTime)
    {


        while (currentTime >= maxTime)
        {
            print("current time " + currentTime);
            if (currentTime == maxTime ){
                countDownText.text = "¡YA!";

            }
            else
            {
                countDownText.text = currentTime.ToString();

            }

            yield return new WaitForSeconds(1);
            currentTime--;

        }
        readyCanvas.SetActive(false);
        ChangeState(States.NextLevel);
        StartCoroutine("SavingResults");

        yield return new WaitForSeconds(1);

    }

}
