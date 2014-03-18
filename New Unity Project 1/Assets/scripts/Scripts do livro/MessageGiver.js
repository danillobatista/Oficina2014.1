#pragma strict

var scriptInteractiveText:InteractiveText;

var boxImage:Texture;
var GUIStyle1:GUIStyle;

scriptInteractiveText = gameObject.Find("interactiveTextHolder").GetComponent(InteractiveText);



function OnGUI(){

	if(scriptInteractiveText.userHitReturn){

		GUI.Box(Rect(280,290,270,55),boxImage);
		GUI.Label( Rect(300, 300, 250, 55),"Continue, " + scriptInteractiveText.playerName,GUIStyle1);
	}
}