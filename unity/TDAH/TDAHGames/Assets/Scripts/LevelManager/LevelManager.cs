using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class LevelManager : MonoBehaviour {
    public int numberObjects;
    public int currentLevel;
    public float lvlMaxTimeSeconds;
    public UnityEvent OnTimeLvlEnded;
    public UnityEvent OnTimeGameEnded;

    public UnityEvent OnNumberLvlEnded;

    int indexLvl = 1;
    int numberOfGO;
    public List<Game> games = new List<Game>();

    public GameObject[] ballsByLVL;
    public int pointCount = 0;

    public delegate void WasteBalls();
    public static event WasteBalls OnWasteBalls;

    public void StartLevel()
    {
        games = gameObject.GetComponent<LoadLevelData>().games;
        numberOfGO = games[0].objectsPerLvl;
        lvlMaxTimeSeconds = games[0].maxGameTime;
        print("NUMER DE NIVELES DE ESTE JUEGO " + games[0].lvlsCount);
        print("LVL NUMERO " + indexLvl);
        //EMPIEZA EL TIEMPO DEL NIVEL
        if (indexLvl > 0)
        {
            GenerateBallsbyCurrentLevel(indexLvl);
            if (games[0].lvlsCount > indexLvl)
            {
                StartCoroutine(Countdown());
            }
            else
            {
                print("no hay mas niveles para este juego-> SALIR envio mensaje");
                OnNumberLvlEnded.Invoke();
            }

        }



    }

    public void ConfigureCurrentLevel()
    {

    }


    private IEnumerator Countdown()
    {
        float counter = lvlMaxTimeSeconds;
        while (counter > 0)
        {
            print("TIEMMPO :"+counter);
            yield return new WaitForSeconds(1);
            //lvlMaxTimeSeconds = counter;
            counter--;
        }
        if (counter <= 0) {
            GetPoints(indexLvl);

            DoStuff();

        }
    }

    void DoStuff()
    {
        indexLvl++;
        print(" nivel " + indexLvl);
        print("envio de mensaje tiempo de nivel agotado");
        if (indexLvl > games[0].lvlsCount)
        {
            OnTimeGameEnded.Invoke();

        }
        else
        {
            OnTimeLvlEnded.Invoke();

        }
    }

    public void GenerateBallsbyCurrentLevel(int lvl)
    {
        ballsByLVL[0].SetActive(false);


        if (lvl != 0)
        {
            //print("ESCONDO EL LVL ANTERIOR" + lvl);

            this.ballsByLVL[lvl-1].SetActive(false);
           // Destroy(ballsByLVL[lvl - 1]);
            if( OnWasteBalls != null) {
                //OnWasteBalls();
            }


        }
        else

        {


            this.ballsByLVL[lvl].SetActive(true);


            print(this.ballsByLVL[lvl].name);


        }
        //print("ERROR FUERA DE RANGO " + lvl);
        if (indexLvl >= 18)
        {
            OnTimeGameEnded.Invoke();

        }
        else
        {
            ballsByLVL[lvl].SetActive(true);
            print("activo! bolas numero" + lvl);

            print(ballsByLVL[lvl].name);
        }


        if (lvl == 0)
        {
            ballsByLVL[0].SetActive(true);

            for (int i = 0; i < ballsByLVL[lvl].transform.childCount; i++)
            {
                ballsByLVL[lvl].transform.GetChild(i).gameObject.SetActive(false);
                ballsByLVL[lvl].transform.GetChild(i).transform.position = new Vector3(0, 0, 0);
                ballsByLVL[lvl].transform.GetChild(i).GetChild(0).transform.position = new Vector3(0, 0, 0);
                ballsByLVL[lvl].transform.GetChild(i).GetChild(0).GetComponent<Rigidbody2D>().gravityScale = 0;
                ballsByLVL[lvl].transform.GetChild(i).GetChild(0).gameObject.tag = "Ball";

            }
            print("activo bolas TUTORIAL");
            ballsByLVL[lvl].GetComponent<BallsInGameController>().index = 0;

            print("pongo index a cero" + ballsByLVL[lvl].GetComponent<BallsInGameController>().index);
            print("se activa " + ballsByLVL[lvl].transform.GetChild(0).gameObject.name);
            ballsByLVL[lvl].transform.GetChild(0).gameObject.SetActive(true);

        }
        




    }

    public void GetPoints(int lvl)
    {
        for (int i = 0; i < ballsByLVL[lvl].transform.childCount; i++)
        {
            if (ballsByLVL[lvl].transform.GetChild(i).GetChild(0).GetComponent<Rigidbody2D>().gravityScale <= -5)
            {
                pointCount++;
            }


        }
    }


}
