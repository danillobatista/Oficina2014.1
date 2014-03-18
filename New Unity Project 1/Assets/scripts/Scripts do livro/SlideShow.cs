using UnityEngine;

using System.Collections;



public class SlideShow : MonoBehaviour
	
{
	
	public Texture2D[] slides = new Texture2D[50];
	
	public float changeTime = 0.04f;
	
	private int currentSlide = 0;
	
	private float timeSinceLast = 1.0f;
	
	
	
	void Start()
		
	{
		
		guiTexture.texture = slides[currentSlide];
		
		guiTexture.pixelInset = new Rect(-slides[currentSlide].width/2, -slides[currentSlide].height/2, slides[currentSlide].width, slides[currentSlide].height);
		
		currentSlide++;
		
	}
	
	
	
	void Update()
		
	{
		
		if(timeSinceLast > changeTime && currentSlide < slides.Length)
			
		{
			
			guiTexture.texture = slides[currentSlide];
			
			guiTexture.pixelInset = new Rect(-slides[currentSlide].width/2, -slides[currentSlide].height/2, slides[currentSlide].width, slides[currentSlide].height);
			
			timeSinceLast = 0.0f;
			
			currentSlide++;
			
		}
		
		timeSinceLast += Time.deltaTime;
		
		
		
		if(currentSlide == slides.Length)
			
		{
			
			currentSlide = 0;
			
		}
		
		
		
		
		
	}
	
}