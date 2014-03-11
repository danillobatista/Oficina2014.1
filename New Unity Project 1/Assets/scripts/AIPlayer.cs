﻿//123
using UnityEngine;
using System.Collections;

public class AIPlayer : Player {

	public float moveSpeed = 10.0f;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public override void TurnUpdate (){
		if(Vector3.Distance(moveDestination, transform.position) > 0.1f){
			transform.position += (moveDestination - transform.position).normalized * moveSpeed * Time.deltaTime;
			
			if(Vector3.Distance(moveDestination, transform.position) <= 0.1f){
				transform.position = moveDestination;
				GameManager.instance.nextTurn();
			}
		} else{
			moveDestination = new Vector3(0 - Mathf.Floor(GameManager.instance.mapSize/2), 1.5f, -0 + Mathf.Floor(GameManager.instance.mapSize/2));
		}
		
		base.TurnUpdate ();
	}

	// video 2 inicio
	public override void TurnOnGUI()
	{
		base.TurnOnGUI();
	}
	//video 2 final
}
