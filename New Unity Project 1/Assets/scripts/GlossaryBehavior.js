
var showingPopUp1 = false;

var startPoint = Vector3(3.809576,5.385019,-6.984188);
var endPoint = Vector3(3.809576,2.475506,-6.984188);
// 3.809576 5.385019 -6.984188 //  3.809576 2.475506 -6.984188
//var duration:float = 1.0;

//private var startTime:float;

function Start () {
	  
    //startTime = Time.time;
	print("I'm attached to " + transform.name);
	 transform.position = Vector3.MoveTowards(startPoint,endPoint,0.5 * Time.deltaTime);
}



function OnMouseEnter(){
renderer.material.color = Color.green;
}

function OnMouseExit(){
renderer.material.color = Color.white;

}

function OnMouseDown(){
renderer.material.color = Color.green;

showingPopUp1 = !showingPopUp1;

}



function OnMouseUp(){
renderer.material.color = Color.white;
}
