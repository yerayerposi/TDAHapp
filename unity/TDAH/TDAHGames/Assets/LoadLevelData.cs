using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LoadLevelData : MonoBehaviour {

    public List<Game> games = new List<Game>();
	// Use this for initialization
	void Awake () {

        TextAsset lvlData = Resources.Load<TextAsset>("IniConfig");
        string[] data = lvlData.text.Split(new char[] { '\n' });
        for (int i = 1; i < data.Length-1; i++)
        {
            string[] row = data[i].Split(new char[] { ';' });
            
            if (row[1] != "") {
                Game game = new Game();

                int.TryParse(row[0], out game.id);
                game.gameName = row[1];
                float.TryParse(row[2], out game.maxGameTime);
                int.TryParse(row[3], out game.lvlsCount);
                int.TryParse(row[4], out game.objectsPerLvl);

                
                games.Add(game);
            }

            foreach (Game game in games)
            {
                Debug.Log("INICONFIG "+game.gameName);
                Debug.Log("INICONFIG LVL COUNT " + game.lvlsCount);
            }

        }

    }
	
	// Update is called once per frame
	void Update () {
		
	}
}
