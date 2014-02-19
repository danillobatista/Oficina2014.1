
var isQuitButton=false;

var onBattle1=false;

var onPage1=false;

var onPage2=false;

var onCutscene1=false;

var onReturnMenu=false;



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
 if(isQuitButton)
 {
 Application.Quit();
 }
 if(onBattle1)
 {
 Application.LoadLevel(4);
 }
 if(onCutscene1)
 {
 Application.LoadLevel(3);
 }
 if(onReturnMenu)
 {
 Application.LoadLevel(1);
 }
 
if(onPage1)
{
Application.LoadLevel(1);
}
 
if(onPage2)
{
 Application.LoadLevel(2);
}
 
renderer.material.color = Color.green;
}
