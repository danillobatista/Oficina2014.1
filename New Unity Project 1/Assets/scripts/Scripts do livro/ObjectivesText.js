/*
Objetivo
- Destrua todos os inimigos
- Não deixe Elleanor morrer

Equipe
- Elleanor

Monstros
- 2 kobolds guerreiros
- 1 Kobold lider
*/
 var objectivesText:String;

 var GUIStyle1:GUIStyle;
 var boxImage:Texture;
 
 function Start(){
 
 objectivesText = "Objetivos \n\n- Destrua todos os inimigos \n- Não deixe Elleanor morrer \n\nEquipe\n\n-Elleanor\n\nMonstros\n\n -2 Kobolds guerreios \n -1 Kobold Lider";
	
 }

function OnGUI(){


	GUI.Box( Rect(100,200, 820, 350),boxImage);
	GUI.Label(Rect(120,220,220,55),objectivesText,GUIStyle1);
}