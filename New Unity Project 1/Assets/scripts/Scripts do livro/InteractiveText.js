var playerName:String; // nome do jogador



var userHitReturn = false;
var nameWritten = false;


var scriptTextControl:TextControl;

var GUIStyle1:GUIStyle;

var boxImage:Texture;



//scriptTextControl = gameObject.Find("seguir").GetComponent(TextControl);



function Update()
{
//print(scriptTextControl.onPage1Pressed);


		
if(Input.GetKeyDown(KeyCode.Return))
	{
	userHitReturn = true;
	
	
	}


}
function OnGUI () 

{

		
	
	if(userHitReturn == false){

		GUI.Box(Rect(280,290,270,155),boxImage);
		GUI.Label( Rect(300, 300, 250, 55),"Diga seu nome: ",GUIStyle1);
		playerName = GUI.TextField (Rect (290, 370,250, 25), playerName, 200);
	
	} 

		
//Nome a ser digitado,aparece enquanto nao houver confirmaçao de texto

//nome confirmado, mostra mensagem com o nome do jogador




}

	
	
DontDestroyOnLoad(this);