document.getElementById("image").addEventListener("click", startAnimationFade);
document.getElementById("image").addEventListener("click", openContainerWithDelay);

var imgCounter = 0;

/* Fade for screen and popup image window.*/
function startAnimationFade(){
	var body = document.getElementById("body");
	body.style.backgroundColor = "Black";
	var delay = 30;
	var i = 9;
	var startTimer = function(){
		var x = document.getElementById("row");
		x.style.opacity = i/10;
		
		if (i >= 0){
				setTimeout(startTimer, delay);
		} 
		
		i--;
	};
var timer = setTimeout(startTimer, delay);
}

function openContainerWithDelay(){
	setTimeout(openContainer, 500);
}

function openContainer(){
	
	if(imgCounter+1 > 14){
		imgCounter = 0;
	}
	
	var imageContainer = document.getElementById("image_container");
	imageContainer.style.height = "100%";
	
	var frameFront = document.getElementById("frame_front");
	frameFront.style.height = "320px";
	frameFront.style.backgroundImage = `url('../Task4/gallery/ch${imgCounter}.png')`;
	
	var frameFront = document.getElementById("frame_back");
	frameFront.style.height = "320px";
	
	var curtain = document.getElementById("curtain");
	curtain.style.height = "320px";
	
	document.getElementById("right_btn").addEventListener("click", slideRight);
	document.getElementById("left_btn").addEventListener("click", slideLeft);
} 

function slideRight(){
	
	var frameFront = document.getElementById("frame_front");
	frameFront.style.backgroundImage = `url('../Task4/gallery/ch${imgCounter}.png')`;
	
	//ChangeBackgrounds
	if(imgCounter+1 > 14){
		imgCounter = -1;
	}
	
	var frameBack = document.getElementById("frame_back");
	frameBack.style.backgroundImage = `url('../Task4/gallery/ch${imgCounter+1}.png')`;

	//Increment counter	
	imgCounter++;	
	 
	var frameFront = document.getElementById("frame_front"); 
	var delay = 5;
	var i = 100;
	var startTimer = function(){
	frameFront.style.opacity = `${i/100}`;
		
		if (i > 0){
				setTimeout(startTimer, delay);
		} 
		
		i--;
	};
var timer = setTimeout(startTimer, delay);
}

function slideLeft(){
	
	var frameFront = document.getElementById("frame_front");
	frameFront.style.backgroundImage = `url('../Task4/gallery/ch${imgCounter}.png')`;
	
	//ChangeBackgrounds
	if(imgCounter - 1 < 0){
		imgCounter = 15;
	}
	
	var frameBack = document.getElementById("frame_back");
	frameBack.style.backgroundImage = `url('../Task4/gallery/ch${imgCounter-1}.png')`;


	//Increment counter	
	imgCounter--;	
	 
	var frameFront = document.getElementById("frame_front"); 
	var delay = 5;
	var i = 100;
	var startTimer = function(){
		frameFront.style.opacity = `${i/100}`;
		
		if (i > 0){
				setTimeout(startTimer, delay);
		} 
		
		i--;
	};
var timer = setTimeout(startTimer, delay);
}


