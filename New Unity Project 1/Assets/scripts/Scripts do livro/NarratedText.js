var text1Capt1:String;
var text2Capt1:String;
var text3Capt1:String;
var text4Capt1:String;
var text5Capt1:String;

var pressingButtonCount:int = 0;

var boxImage:Texture;

var scriptInteractiveText:InteractiveText;
var GUIStyle1:GUIStyle;

var infoPopUp1:String;
 
scriptInteractiveText = gameObject.Find("interactiveTextHolder").GetComponent(InteractiveText);

function Start(){

print(scriptInteractiveText.playerName + " Narrated Text");

infoPopUp1 = "GLOSSARIO";

text1Capt1 = "Você está olhando a lua, lembrando-se de como era difícil sobreviver em tempos atrás, caçar tesouros, bandidos e de vez em quando filhas “desaparecidas”... ";
text2Capt1 = "Como cavaleiro era um dos melhores e, mesmo cobrando caro por isso, parecia nunca ser o bastante. Em suas lembranças, batalhas sangrentas o fazem pensar se valeu a pena, conquistar tudo pela espada, perder tudo com a espada...";
text3Capt1 = "A lua se esconde atrás de uma nuvem e direciona seu pensamento para algo mais simples... “-hora de dormir” e quando você deita em sua cama alguém bate na sua porta...";
text4Capt1 = "Como assim alguém batendo à porta? Poucas pessoas circulam nesse lado da ilha, e além do mais, poucas pessoas querem falar com você! O que está acontecendo?";
text5Capt1 = "Não existe uma razão de não abrir a porta, bandidos não viriam a uma cabana escondida no meio da floresta de Chult, o risco de morrer no percurso não valeria a pena... ";

}	



function OnGUI () {


	if (pressingButtonCount == 0){
	GUI.Box( Rect(100,565, 820, 70),boxImage);
	GUI.Label(Rect(120,570,220,55),text1Capt1,GUIStyle1);
	}
	
	if (pressingButtonCount == 1){
	GUI.Box( Rect(100,565, 820, 80),boxImage);
	GUI.Label(Rect(110,570,220,55),text2Capt1,GUIStyle1);
	}
	
	if (pressingButtonCount == 2){
	GUI.Box( Rect(100,565, 820, 80),boxImage);
	GUI.Label(Rect(120,570,220,55),text3Capt1,GUIStyle1);
	}
	
	if (pressingButtonCount == 3){
	GUI.Box( Rect(100,565, 820, 70),boxImage);
	GUI.Label(Rect(120,570,220,55),text4Capt1,GUIStyle1);
	}
	
	if (pressingButtonCount == 4){
	GUI.Box( Rect(100,565, 820, 70),boxImage);
	GUI.Label(Rect(120,570,220,55),text5Capt1,GUIStyle1);
	}
}
	
function OnMouseDown() {
	
	pressingButtonCount +=1;
	if(pressingButtonCount >= 4){
	pressingButtonCount = 4;
	}

}