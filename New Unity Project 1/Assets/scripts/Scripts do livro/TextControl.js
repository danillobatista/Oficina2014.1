//Scenes swap
var isQuitButton=false; //

var onBattle1=false; // 10

var onCompanheiro=false;//7

var onPage1=false; // 6

var onPage2=false; // 8

var onCustomizar = false; // 3

var onCreditos = false; // 5

var onReturnMenu=false; // 1

var onIntroducao=false; // 2

var onQuiz=false; // 4

var onObjetivos=false; // 9


var onQuizFromCustom=false;
var onReturnMenuFromCustom=false;


//Verification of scenes swap buttons being pressed
var onPage1PressedPressed = false;

var onReturnMenuPressed = false;

//Verification of character selections
var archerSelected = false;

var mageSelected =false;

var scriptInteractiveText:InteractiveText;

scriptInteractiveText = gameObject.Find("interactiveTextHolder").GetComponent(InteractiveText);




function OnMouseEnter()
	{
		renderer.material.color = Color.green;
	}

function OnMouseExit()

	{
		renderer.material.color = Color.white;
	}

function OnMouseUp()

	{
		renderer.material.color = Color.green;
	}



function OnMouseDown()
{

//Character Selection	
	if(mageSelected)
	{
	print("Maga selecionada!");
	}


	if(archerSelected)
	{
	print("Arqueiro selecionado!");
	}


//Scenes swap
 if(isQuitButton)
 {
 Application.Quit();
 }
 
 if(onCustomizar)
 {
 Application.LoadLevel(3);
 }
 
  if(onIntroducao)
 {
 Application.LoadLevel(2);
 }
 
  if(onQuizFromCustom && scriptInteractiveText.userHitReturn)
 {
 Application.LoadLevel(4);
 }
 
  if(onQuiz)
 {
 Application.LoadLevel(4);
 }
 
 if(onCreditos)
 {
 Application.LoadLevel(5);
 }
 
 if(onCompanheiro)
 {
 Application.LoadLevel(7);
 }

 if(onBattle1)
 {
 Application.LoadLevel(10);
 }
 
 if(onObjetivos)
 {
 Application.LoadLevel(9);
 }

 if(onReturnMenu)
 {
 Application.LoadLevel(1);
// onReturnMenuPressed = true;
 }
 
 if(onReturnMenuFromCustom && scriptInteractiveText.userHitReturn)
 {
 Application.LoadLevel(1);
// onReturnMenuPressed = true;
 }
 
if(onPage1)
{
Application.LoadLevel(6);
//onPage1Pressed = true;
}
 
if(onPage2)
{
 Application.LoadLevel(8);
}
 
renderer.material.color = Color.green;
}
