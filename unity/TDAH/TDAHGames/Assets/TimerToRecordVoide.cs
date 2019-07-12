using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TimerToRecordVoide : MonoBehaviour {
    public GameObject VoiceManager;
    private readonly string[] values = { "Amarillo", "Azul", "Verde", "Violeta", "Amarillo", "Negro" };
    private readonly Color[] colorValues = { Color.red, Color.yellow, Color.black, Color.green, Color.magenta, Color.white };

    // Use this for initialization
    public Text text;
    public Text response;
    public Text points;
    public int pointsInt = 1;
    public int index = 0;
    public string responseRecord;
	void Start () {
        index = 0;
        //StartCoroutine(RecordingVoice());
        text.color = colorValues[index];

        text.text = values[index];

    }

    // Update is called once per frame
    void Update () {
		
	}
    /*
    IEnumerator RecordingVoice()
    {
        CheckResponse();
        int counter = 3;
        VoiceManager.GetComponent<VoiceManager>().OnStartRecordingPressed();

        while (counter > 0)
        {
            yield return new WaitForSeconds(1);
            counter--;
        }
        DoStuff();
    }
    */
    public void DoStuff()
    {
        responseRecord = response.text;

        if (index < values.Length -1)
        {
            index++;
            
           // StartCoroutine(RecordingVoice());
        }
        else
        {
            index = 0;
        }
        print("Time");
        text.color = colorValues[index];

        text.text = values[index];

        //CheckResponse();



    }

    public void CheckResponse()
    {
        responseRecord = response.text;

        string one = text.text.ToString().ToLower().Substring(0, 2);
        print(one);
        string two = responseRecord.ToLower().Substring(0, 2);
        print(two);
        if (one.Contains(two))
        {
            pointsInt++;
        }
        pointsInt++;

        points.text = pointsInt.ToString();
    }
}




