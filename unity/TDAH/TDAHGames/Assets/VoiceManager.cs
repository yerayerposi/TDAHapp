using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using KKSpeech;

public class VoiceManager : MonoBehaviour {

	public Button startRecordingButton;
	public Text resultText;


    void Start() {
        SpeechRecognizerListener listener = GameObject.FindObjectOfType<SpeechRecognizerListener>();
		listener.onPartialResults.AddListener(OnPartialResult);
        listener.onErrorDuringRecording.AddListener(OnError);
        listener.onEndOfSpeech.AddListener(OnEndOfSpeech);
        SpeechRecognizer.RequestAccess();

        StartCoroutine("Recording");
    }

    public void OnEndOfSpeech()
    {
        //cuando termina el reconocimiento de voz se reinicia la grabacion
        startRecordingButton.GetComponentInChildren<Text>().text = "rerror";
        this.GetComponent<TimerToRecordVoide>().CheckResponse();

        StopAllCoroutines();
        //this.GetComponent<TimerToRecordVoide>().DoStuff();

        SpeechRecognizer.RequestAccess();
        SpeechRecognizer.StopIfRecording();

        StartCoroutine("Recording");
    }
    public void OnPartialResult(string result)
    {
        resultText.text = result;
    }
    public void OnError(string error)
    {
        //Debug.LogError(error);
        startRecordingButton.GetComponentInChildren<Text>().text = "confundido2";
        //SpeechRecognizer.StartRecording(true);
        SpeechRecognizer.RequestAccess();

        StopAllCoroutines();
        SpeechRecognizer.StopIfRecording();

        StartCoroutine("Recording");
    }
    IEnumerator Recording()
    {

        while (true)
        {
            //resultText.text = "  ";

            if (!SpeechRecognizer.IsRecording())
            {              

                SpeechRecognizer.StartRecording(true);
            }
            //else
            //{
            print("Grabando");
            startRecordingButton.GetComponentInChildren<Text>().text = "Grabando";
            yield return new WaitForSeconds(1f);
            //}
            this.GetComponent<TimerToRecordVoide>().DoStuff();


            //resultText.text = "  ";


        }

    }
}
