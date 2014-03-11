var text1:String ;
var script1:InteractiveText;


function Start(){

script1 = gameObject.Find("objInteractiveText").GetComponent("InteractiveText");
print(script1.playerName + " " + text1);
text1 = "seguiu com coragem e dedicaçao pelas florestas de chult!";
}

function Update() {

print(script1.playerName + " " + text1);

}

function OnGUI () {

GUI.Label( Rect(250, 240, 220, 55),  script1.playerName + " " + text1);

}
	