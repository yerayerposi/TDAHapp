using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InstanciatePointManager : MonoBehaviour {
    public delegate void OnTargetBall();
    public static event OnTargetBall OnTargetedBall;
    int hitpoints = 1;
    private bool passed = false;
    bool _triggered;

    // Use this for initialization
    void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
    
    private void OnTriggerStay2D(Collider2D collision)
    {
        if (_triggered)
        {
            return;
        }
        _triggered = true;
        Debug.Log("entered");
    }
   



    

    private void OnTriggerExit2D(Collider2D collision)
    {
        {
            if (!_triggered)
            {
                return;
            }
            _triggered = false;
            if (collision.gameObject.tag == "Ball")
            {
                collision.gameObject.tag = "BallPassed";

                //StartCoroutine("CountDown");    
                if (OnTargetedBall != null)
                {

                    {
                        if (!IsInvoking("OnTargetedBall"))
                        {
                            passed = true;

                            print("ENVIO MENSAJE PARA INSTANCIAS");
                            OnTargetedBall();
                            //StartCoroutine(CountDown());
                            //gameObject.GetComponent<CircleCollider2D>().enabled = ( false);

                        }
                        else
                        {
                            print("LA ISNTANCIA FUE ENVIADA");

                        }
                    }



                }
            }
        }





    }
    

    IEnumerator CountDown()
    {
        
        yield return new WaitForSeconds(0.5f);
       
    }
}
