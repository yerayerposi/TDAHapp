using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class BallsInGameController : MonoBehaviour {
    public GameObject[] GOPInGame;
    public bool istutorial = false;
    public int index = 0;
    public int maxIndex = 7;

    public GameObject PSToMakeFeedback;
    public ParticleSystem PSCrashingFeedback;
    public UnityEvent OnBallsEnded;

    public CircleCollider2D pointToInstanciate;

    public bool timeToInstantiate = false;

    // Use this for initialization
    public void Start()
    {
        this.index = 0;
        for (int i = 1; i < GOPInGame.Length; i++)
        {
            this.GOPInGame[i].SetActive(false);
          
        }
    }


    public void InstanciateNewObject()
        {
            if (this.index < GOPInGame.Length - 1)
            {
 
            print("INDEX " +this.index+ " MAX INDEX "+ GOPInGame.Length);

            //StartCoroutine("Countdown"); 
            Instanciate();
            timeToInstantiate = true;


        }
        else 

            {
                if(this.index < GOPInGame.Length - 1)
            {

                //index++;
                //GOPInGame[index].SetActive(true);

                //index = 0;
                print("no quedan mas bolas");
                index = 0;
          
                if (!istutorial)
                {
                    print("AVISO QUE NO QUEDAN MAS BOLAS");

                    OnBallsEnded.Invoke();
                }

            }

        }
    }


        private IEnumerator Countdown()
        {
            
            print("corrutina");

            yield return new WaitForSeconds (5);
             print("FIN CORRUTINA");
            

         }




    void OnEnable()
    {
        print("suscrito");

        InstanciatePointManager.OnTargetedBall += Instanciate;
    }


    void OnDisable()
    {
        print("desuscritp");
        InstanciatePointManager.OnTargetedBall -= Instanciate;
    }


 

    void Instanciate()
    {
        print("RECIBO MENSAJE PARA INSTANCIAR");
    
        {
            if (this.index < GOPInGame.Length - 1)
            {
                //StartCoroutine(Countdown());
                print("instancio bola " + this.index);
                print(this.GOPInGame[index + 1].name);
                this.GOPInGame[index + 1].SetActive(true);
                this.index++;
                print("ESPERO PARA INSTANCIAR");


            }
            else
            {
                print("NADA A INSTANCIAR " + this.index);

            }
            //pointToInstanciate.enabled = (true);

        }



        //PSToMakeFeedback.transform.position = GOPInGame[index].transform.position;
        //PSToMakeFeedback.transform.parent = GOPInGame[index].transform;

    }

}
