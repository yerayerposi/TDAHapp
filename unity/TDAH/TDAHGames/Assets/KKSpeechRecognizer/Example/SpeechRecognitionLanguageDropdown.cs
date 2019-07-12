using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections.Generic;
using UnityEngine.UI;
using KKSpeech;

namespace KKSpeech {
	public class SpeechRecognitionLanguageDropdown : MonoBehaviour {

		private Dropdown dropdown;

		void Start () {
			//dropdown = GetComponent<Dropdown>();
			//dropdown.onValueChanged.AddListener(OnDropdownValueChanged);
			dropdown.ClearOptions();

			//GameObject.FindObjectOfType<SpeechRecognizerListener>().
				//onSupportedLanguagesFetched.
				//AddListener(OnSupportedLanguagesFetched);

			//SpeechRecognizer.GetSupportedLanguages();
		}

		// remember to add ExampleScene to Build Settings!
		public void GoToRecordingScene() {
			SceneManager.LoadScene("ExampleScene");
		}


	}
}

