
var showingPopUp1 = false;
var notShowingPopUp1 = false;

var bloc1:GameObject;

var speed:float = 3.0;
private var startTime:float;
var smooth:float = 1.0;

var duration:float;

 var journeyLength:float;

var startMarker:Transform;// = new Vector3(-1.173164,16.91583,-11.09066);
var endMarker:Transform;// =new Vector3(-1.173164,36.91583,-11.09066);

function Start () {
	  
	startTime = Time.time;
	
	journeyLength = Vector3.Distance(startMarker.position, endMarker.position);
} 

function Update() {
	
	print(showingPopUp1);
	// Distance moved = time * speed.

	/*if(showingPopUp1) {
		var distCovered = (Time.time - startTime) * speed;
		
		
		var fracJourney = distCovered / journeyLength;
		
		
		bloc1.transform.position = Vector3.Lerp(endMarker.position, startMarker.position, fracJourney);
	} else if(!showingPopUp1) {
	
		distCovered = (Time.time - startTime) * speed;
		
		
		 fracJourney = distCovered / journeyLength;
		
		
		bloc1.transform.position = Vector3.Lerp(startMarker.position, endMarker.position, fracJourney);}
}
*/
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
movingGlossary();
}

function movingGlossary(){

	if(showingPopUp1){
	bloc1.transform.position.y = bloc1.transform.position.y - 20;
	} else {bloc1.transform.position.y = bloc1.transform.position.y +20;}

}

function OnMouseUp(){
renderer.material.color = Color.white;
}
