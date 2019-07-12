using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class ConfigGame : MonoBehaviour {

    public static int screenWidth;
    public static int screenHeight;
    public string currentGame;
    private string gameDataProjectFilePath = "/StreamingAssets/data.json";

    private void Awake()
    {
        //DontDestroyOnLoad(this.gameObject);

    }

    // Use this for initialization
    void Start ()
    {
        Screen.orientation = ScreenOrientation.Portrait;
        this.GetComponent<ConfigureBorderScreen>().ConfigureBorders();

        JsonManager player = new JsonManager
        {
            playerId = 2,
            timeElapsed = 250f,
            level = 30
        };

        print(player);


        string dataAsJson = JsonUtility.ToJson(player);
        string filePath = Application.dataPath + gameDataProjectFilePath;
        File.WriteAllText(filePath, dataAsJson);

    }

    public void GamePlayingConfig(string currentGame)
    {
        this.currentGame = currentGame;
    }


}


