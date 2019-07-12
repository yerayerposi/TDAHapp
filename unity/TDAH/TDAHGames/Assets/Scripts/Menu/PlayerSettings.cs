using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[Serializable]
public class PlayerSettings : MonoBehaviour {


    public string UserID
    {
        get { return userID; }
        set { userID = value; }
    }
    private string userID = "TEST ID USUARIO";

    public int Age
    {
        get { return age; }
        set { age = value; }
    }
    private int age = 7;

    public string School
    {
        get { return school; }
        set { school = value; }
    }
    private string school;

    public string City
    {
        get { return city; }
        set { city = value; }
    }
    private string city;

    public Text textUserID;

    private void Awake()
    {


        GameObject[] objs = GameObject.FindGameObjectsWithTag("GameManager");

        if (objs.Length > 1)
        {
            Destroy(this.gameObject);
        }

        DontDestroyOnLoad(this.gameObject);
        //Initialization of player settings
        //this information comes from Android Aplication
        //textUserID.text = userID;

    }



}
