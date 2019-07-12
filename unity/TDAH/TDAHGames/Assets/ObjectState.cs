using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectState : MonoBehaviour {
    float scale;
    bool crashed = false;


    public ParticleSystem PSCrashingFeedback;

    void Start () {
        //PSCrashingFeedback = GameObject.Find("PS_BolasChocan").GetComponent<ParticleSystem>();
        scale = 0.8f;
	}
	
	void Update () {
		if (this.GetComponent<Rigidbody2D>().gravityScale != 0)
        {
            this.transform.localScale =new Vector3(scale, scale, scale);

        }

    }

    /*

    private void OnCollisionStay2D(Collision2D collision)
    {
        if(collision.gameObject.tag == "Ball"  || collision.gameObject.tag == "BallPassed")
        {
            print("COLISIONO");
            Physics2D.IgnoreCollision(collision.gameObject.GetComponent<Collider2D>(), gameObject.GetComponent<Collider2D>(), true);
        }
    }
    */






}
