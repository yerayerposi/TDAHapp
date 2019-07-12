using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LevelUI : MonoBehaviour {

    [SerializeField]
    private Text swordName; // 1


    public void UpdateDisplayUI(Level swordData)
    {
        swordName.text = swordData.name;
       
    }

}
