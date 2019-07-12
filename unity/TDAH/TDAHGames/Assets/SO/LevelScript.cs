using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LevelScript: MonoBehaviour {
    public Level level;
	// Use this for initialization
	void Start () {
        Debug.Log(level.name);
	}
	
	// Update is called once per frame
	void Update () {
		
	}


    private void OnMouseDown() // 2
    {
        Debug.Log(level.name);

    }
}
