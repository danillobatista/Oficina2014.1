var currentMusicTime:float;
 
 
function Start(){
   DontDestroyOnLoad(gameObject);
}
 
function Update(){
   currentMusicTime=audio.time;
}
 
function OnLevelWasLoaded(lvl:int){
   audio.time=currentMusicTime;
  
   
}