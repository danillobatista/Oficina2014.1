// primeira popup do glossario
var popUp1Showing = false;


function Start(){
	
	
}

function OnMouseEnter(){
renderer.material.color = Color.green;

}


function OnMouseExit(){
renderer.material.color = Color.white;
}

function OnMouseDown(){
renderer.material.color = Color.green;

popUp1Showing = !popUp1Showing;

}




function OnMouseUp(){
renderer.material.color = Color.white;
}
