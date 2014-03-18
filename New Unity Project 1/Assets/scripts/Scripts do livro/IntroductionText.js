var textIntro1:String;
var textIntro2:String;
var textIntro3:String;

var GUIStyle1:GUIStyle;
var boxImage:Texture;

var pressingCount:int = 0;

textIntro1 = "Poucas pessoas  tem o que é preciso para levar uma vingança até o fim, talvez tudo fique mais fácil quando não se tem nada a perder, mas, ainda assim é preciso coragem para cavar duas covas.";
textIntro2 = "Quando se encontra a oportunidade perfeita, mesmo que isso lhe custe a vida, você teria coragem de finalizar o que foi começado? Por mais que nem tudo pareça ser o que é, ainda é preciso sangue frio para não perder noites lembrando do rosto sentindo dor e sentindo a vida se esvair... ";
textIntro3 = "Você tem o que é preciso?";




function OnGUI () {

if (pressingCount == 0){
	GUI.Box(Rect(90, 510, 820, 100),boxImage);
	GUI.Label( Rect(110,520, 220, 55),textIntro1,GUIStyle1);
	}
if (pressingCount == 1){
	GUI.Box(Rect(90,510, 820, 110),boxImage);
	GUI.Label( Rect(110,520, 220, 100),textIntro2,GUIStyle1);
}
if (pressingCount == 2){
	GUI.Box(Rect(330, 530, 280, 50),boxImage);
	GUI.Label( Rect(350,540, 220, 55),textIntro3,GUIStyle1);
}

}

function OnMouseDown()
{
pressingCount +=1;
if(pressingCount >= 2){
pressingCount = 2;
}
}