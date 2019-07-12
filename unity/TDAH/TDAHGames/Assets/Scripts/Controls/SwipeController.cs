using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class SwipeController : MonoBehaviour {

    public float minSwipeDistY;
    public float minSwipeDistX;
    public GameObject objectToWipe;
    public float gravityConfig;
    public GameObject PSToMakeFeedback;
    private Vector2 startPos;
    private float gravityScale;
    private float massValue;
    public bool firstTouch = true;
    //public UnityEvent OnTargetBall;
    GameObject activeArrayofBalls;


//    public delegate void OnTargetBall();
//    public static event OnTargetBall OnTargetedBall;









    private void Update()
    {
        //#if UNITY_EDITOR
       
        SelectingBallWithTouch();
        MakingASwipe();
    }


    private void OnEnable()
    {
        LevelManager.OnWasteBalls += SelectArrayBalls;
    }

    private void OnDisable()
    {
        LevelManager.OnWasteBalls -= SelectArrayBalls;
    }


    void SelectArrayBalls()
    {
        //print("buscansddo el pool de estrellas");
        //activeArrayofBalls = GameObject.FindWithTag("PoolBalls");
    }

    public void SelectingBallWithTouch()
    {
        for (var i = 0; i < Input.touchCount; ++i)
        {
            if (Input.GetTouch(i).phase == TouchPhase.Began)
            {
                RaycastHit2D hitInfo = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.GetTouch(i).position), Vector2.zero);
                if (hitInfo)
                {
                    if (hitInfo.transform.gameObject.name.Contains("PositionToInstanciate"))
                    {
                        //if (firstTouch == true)
                        {
                            // if (OnTargetedBall != null)
                            //   OnTargetedBall();

                            //OnTargetBall.Invoke();
                            firstTouch = false;
                            print("nada");

                        }
                    }
                    
                    if (!hitInfo.transform.gameObject.name.Contains("Border") && !hitInfo.transform.gameObject.name.Contains("PositionToInstanciate"))
                    {
                        firstTouch = true;

                        objectToWipe = hitInfo.transform.gameObject;
                        //objectToWipe.GetComponent<CircleCollider2D>().enabled = false;
                        objectToWipe.GetComponent<Rigidbody2D>().mass = 20;
                        //PSToMakeFeedback.transform.position = objectToWipe.transform.position;
                        //PSToMakeFeedback.transform.parent = objectToWipe.transform;

                        //FeedBackToUserWhenSelectAnItem(true);
                    }
                    
                }
            }
            if (Input.GetTouch(i).phase == TouchPhase.Ended)
            {
               
                //FeedBackToUserWhenSelectAnItem(false);
            }
        }
    }


    public void MakingASwipe()
    {
        if (Input.touchCount > 0)
        {
            Touch touch = Input.touches[0];

            switch (touch.phase)
            {
                case TouchPhase.Began:

                    startPos = touch.position;

                    break;
                case TouchPhase.Stationary:

                    break;
                case TouchPhase.Ended:
                    //gravityScale = 0;

                    float swipeDistVertical = (new Vector3(0f, touch.position.y, 0f) - new Vector3(0f, startPos.y, 0f)).magnitude;
                    if (swipeDistVertical > minSwipeDistY)
                    {
                        float swipeValue = Mathf.Sign(touch.position.y - startPos.y);
                        if (swipeValue > 0)
                        {
                            //UP
                            
                            gravityScale = -gravityConfig;
                        }
                        else if (swipeValue < 0)
                        {
                            //DOWN
                            gravityScale = gravityConfig;
                        }
                        massValue = 20;

                        objectToWipe.GetComponent<Rigidbody2D>().gravityScale = gravityScale;
                        objectToWipe.GetComponent<Rigidbody2D>().mass = massValue;


                    }

                    float swipeDisHorizontal = (new Vector3(touch.position.x, 0f, 0f) - new Vector3(startPos.x, 0f, 0f)).magnitude;
/*
                    if (swipeDisHorizontal > minSwipeDistX)
                    {
                        float swipeValue = Mathf.Sign(touch.position.x - startPos.x);

                        if (swipeValue > 0)
                        {
                            //RIGHT
                            //print("RIGHT");

                        }
                        else if (swipeValue < 0)
                        {
                            //LEFT
                            //print("LEFT");

                        }
                    }
 */
                   
                    
                    break;
            }
        }
    }

    void FeedBackToUserWhenSelectAnItem(bool state)
    {
        PSToMakeFeedback.transform.position = new Vector3(PSToMakeFeedback.transform.position.x, PSToMakeFeedback.transform.position.y, PSToMakeFeedback.transform.position.z - 1);
        PSToMakeFeedback.transform.localScale = new Vector3(0.8f, 0.8f, 0.8f);
        PSToMakeFeedback.SetActive(state);
    }
}
