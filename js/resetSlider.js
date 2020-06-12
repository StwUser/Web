document.getElementById("image").addEventListener("click", openSpanMessage);

function openSpanMessage(){
var spanMessage = document.getElementById("span_message");
spanMessage.style.display = "inline";
}

document.addEventListener('keydown', function(event){
	//alert(event.keyCode);
  if(event.keyCode == 27) {
    console.log("ESC was pressed");
	
	var row = document.getElementById("row");
	row.style.opacity = "1";
	
	var body = document.getElementById("body");
	body.style.backgroundColor = "#eaeef1";
	
	var imageContainer = document.getElementById("image_container");
	imageContainer.style.height = "0%";
	
	var frameFront = document.getElementById("frame_front");
	frameFront.style.height = "0px";
	
	var frameFront = document.getElementById("frame_back");
	frameFront.style.height = "0px";
	
	var curtain = document.getElementById("curtain");
	curtain.style.height = "0px";	
	
	var spanMessage = document.getElementById("span_message");
	spanMessage.style.display = "none";
  }
})