
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd
var isQuitButton=false; //

var onBattle1=false; // 7

var onPage1=false; // 4

var onPage2=false; // 5



var onCustomizar = false; // 2

var onCreditos = false; // 3

var onCutscene1=false; // 6 

var onReturnMenu=false; // 
<<<<<<< HEAD
=======
var isQuitButton=false;

var onBattle1=false;

var onPage1=false;

var onPage2=false;

var onCutscene1=false;

var onReturnMenu=false;
>>>>>>> unificando as versões
=======
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd



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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd
 
 if(onCustomizar)
 {
 Application.LoadLevel(2);
 }
 
 if(onCreditos)
 {
 Application.LoadLevel(3);
 }
 
 if(onBattle1)
 {
 Application.LoadLevel(7);
 }
 if(onCutscene1)
 {
 Application.LoadLevel(6);
<<<<<<< HEAD
=======
 if(onBattle1)
 {
 Application.LoadLevel(4);
 }
 if(onCutscene1)
 {
 Application.LoadLevel(3);
>>>>>>> unificando as versões
=======
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd
 }
 if(onReturnMenu)
 {
 Application.LoadLevel(1);
 }
 
if(onPage1)
{
<<<<<<< HEAD
<<<<<<< HEAD
Application.LoadLevel(4);
=======
Application.LoadLevel(1);
>>>>>>> unificando as versões
=======
Application.LoadLevel(4);
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd
}
 
if(onPage2)
{
<<<<<<< HEAD
<<<<<<< HEAD
 Application.LoadLevel(5);
=======
 Application.LoadLevel(2);
>>>>>>> unificando as versões
=======
 Application.LoadLevel(5);
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd
}
 
renderer.material.color = Color.green;
}
