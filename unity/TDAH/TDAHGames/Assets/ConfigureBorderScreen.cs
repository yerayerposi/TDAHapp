using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ConfigureBorderScreen : MonoBehaviour {
    public GameObject[] screenBorders;


    public void ConfigureBorders()
    {
        var lowerLeft = Camera.main.ScreenToWorldPoint(new Vector3(0, 0, 0));
        print(lowerLeft);

        var upperRight = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, 0));
        print(Screen.width + "resolucion" + Screen.height);
        screenBorders[0].transform.position = new Vector2(0f, upperRight.y);
        print(upperRight.y);

        screenBorders[1].transform.position = new Vector2(0f, lowerLeft.y);
        float horzExtent = Camera.main.orthographicSize;

        screenBorders[2].transform.position = new Vector2(-3f, 0f);
        print(upperRight.x);
        screenBorders[3].transform.position = new Vector2(+3f, 0f);
    }


}
