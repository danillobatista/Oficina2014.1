
var showingPopUp1 = false;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd
var showingPopUp2 = false;

var bloc1:GameObject;

<<<<<<< HEAD
=======

var startPoint = Vector3(3.809576,5.385019,-6.984188);
var endPoint = Vector3(3.809576,2.475506,-6.984188);
// 3.809576 5.385019 -6.984188 //  3.809576 2.475506 -6.984188
//var duration:float = 1.0;

//private var startTime:float;
>>>>>>> unificando as versões
=======
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd

function Start () {
	  
    //startTime = Time.time;
	print("I'm attached to " + transform.name);
<<<<<<< HEAD
<<<<<<< HEAD
	 
=======
	 transform.position = Vector3.MoveTowards(startPoint,endPoint,0.5 * Time.deltaTime);
>>>>>>> unificando as versões
=======
	 
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd
}



function OnMouseEnter(){
renderer.material.color = Color.green;
}

function OnMouseExit(){
renderer.material.color = Color.white;

}

function OnMouseDown(){
renderer.material.color = Color.green;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd
showingPopUp1 = !showingPopUp1;
MovingGlossary();

}
function MovingGlossary(){


/*showingPopUp2 = !showingPopUp2;

if(showingPopUp2) {
 
bloc1.transform.position.x = bloc1.transform.position.x - 3;

	}

if(!showingPopUp2) {
 
bloc1.transform.position.x = bloc1.transform.position.x + 3;

	}

*/
if(showingPopUp1) {
 
bloc1.transform.position.y = bloc1.transform.position.y - 3;

	}

if(!showingPopUp1) {
 
bloc1.transform.position.y = bloc1.transform.position.y + 3;

	}
}
<<<<<<< HEAD
=======

showingPopUp1 = !showingPopUp1;

}


>>>>>>> unificando as versões
=======
>>>>>>> 23c973873d1464030cab2e3ed02c85542c903efd

function OnMouseUp(){
renderer.material.color = Color.white;
}
