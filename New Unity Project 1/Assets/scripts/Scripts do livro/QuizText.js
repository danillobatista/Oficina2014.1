var questionText1:String ="Assim que voltou da missão do Barão, você descobre algo terrível, sua mulher foi tomada como garantia pelo barão e assim:";

var answerAText1:String="A) Morreu na prisão por maus tratos do Barão.";
var answerBText1:String="B) Foi executada como exemplo na praça publica.";
var answerCText1:String="C) Desapereceu dias depois de todos verem o Barão entrando em sua casa.";

var questionText2:String ="Todos os boatos apontavam para o Barão como assassino, mas, quando você foi se vingar ele:";

var answerAText2:String="A) Acabou lhe prendendo e depois desapareceu.";
var answerBText2:String="B) Com a ajuda de seu lacaio conseguiu fugir.";
var answerCText2:String="C) Tentou lhe enfrentar mas fugiu depois de pedir reforços entrando em sua casa.";

var questionText3:String ="Quando decidiu casar você percebeu que precisaria de mais dinheiro do que tinha e aceitou a missão de um barão onde teria que:";

var answerAText3:String="A) Cobrar os impostos de um vilarejo e queima-lo depois.";
var answerBText3:String="B) Sitiar o castelo de um barão inimigo.";
var answerCText3:String="C) Caçar um bruxo que aparentemente foi a causa da uma derrota do Barão.";

var questionText4:String ="Como guerreiro você lembra de muitas aventuras, mas uma delas lhe é especial, aquela em que você:";

var answerAText4:String="A) Conheceu a sua mulher";
var answerBText4:String="B) Matou mais de 20 Goblins";
var answerCText4:String="C) Dormiu enquanto todos guerreavam";

var GUIStyle1:GUIStyle;
var GUIStyle2:GUIStyle;

var textBox:GUIStyle;
textBox.padding = new RectOffset(0,0,0,0);

var boxImage:Texture;

var pressingReturnCount:int = 0;

function OnGUI(){

//Questionnaire 


if(pressingReturnCount == 0) {
	
	GUI.Box(Rect(90, 190, 840, 230),boxImage);
	GUI.Label(Rect(110,200,250,55),questionText1,GUIStyle1);
	GUI.Label(Rect(110,280,250,55),answerAText1,GUIStyle2);
	GUI.Label(Rect(110,320,250,55),answerBText1,GUIStyle2);
	GUI.Label(Rect(110,370,250,55),answerCText1,GUIStyle2);
	
	}

if(pressingReturnCount == 1) {
	
	GUI.Box(Rect(90, 190, 840, 230),boxImage);
	GUI.Label(Rect(110,200,250,55),questionText2,GUIStyle1);
	GUI.Label(Rect(110,280,250,55),answerAText2,GUIStyle2);
	GUI.Label(Rect(110,320,250,55),answerBText2,GUIStyle2);
	GUI.Label(Rect(110,370,250,55),answerCText2,GUIStyle2);
	}

if(pressingReturnCount == 2) {
	GUI.Box(Rect(90, 190, 840, 230),boxImage);
	GUI.Label(Rect(110,200,250,55),questionText3,GUIStyle1);
	GUI.Label(Rect(110,280,250,55),answerAText3,GUIStyle2);
	GUI.Label(Rect(110,320,250,55),answerBText3,GUIStyle2);
	GUI.Label(Rect(110,370,250,55),answerCText3,GUIStyle2);
	}

if(pressingReturnCount == 3) {
	
	GUI.Box(Rect(90, 190, 840, 230),boxImage);
	GUI.Label(Rect(110,200,250,55),questionText4,GUIStyle1);
	GUI.Label(Rect(110,280,250,55),answerAText4,GUIStyle2);
	GUI.Label(Rect(110,320,250,55),answerBText4,GUIStyle2);
	GUI.Label(Rect(110,370,250,55),answerCText4,GUIStyle2);
	}
	
}

function OnMouseDown(){

pressingReturnCount +=1;
	if(pressingReturnCount >= 3) {
	pressingReturnCount = 3;
	}
}