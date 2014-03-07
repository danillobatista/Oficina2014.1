
var playerName:String; //textoEditavel
var userHitReturn = false;
var scriptTest:TextControl;
scriptTest = gameObject.Find("txt_confirmar").GetComponent("TextControl");



function Start(){


print(scriptTest.voltarInicioPressed);

}

function Update()
{
if(Input.GetKeyDown(KeyCode.Return) || scriptTest.confirmarPressed == true)
	{
	
	userHitReturn = true;

	}
	
}
function OnGUI () 

{
if(userHitReturn == false && scriptTest.confirmarPressed == false && scriptTest.voltarInicioPressed == false){

playerName = GUI.TextField (Rect (280, 350,250, 25), playerName, 100);
	}


 if(userHitReturn == true && scriptTest.confirmarPressed == false && scriptTest.voltarInicioPressed == false){

GUI.Label( Rect(270, 400, 250, 55),"Entao este e o seu nome? " + playerName +" ... De fato e um otimo nome! Siga em frente!");
}

}


DontDestroyOnLoad(this);

/*
if(nameWritten = false){
	 GUI.Label.( Rect(10,10,200,20),"Enter name: ") ;
	nameText = GUI.TextField(Rect(50,10,250,20),nameText,40);
	}
	if(nameWritten = true) { 
	GUI.Label.( Rect(10,10,200,20),"Hello" + nameText) ;
	}	

}*/