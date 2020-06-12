var get = location.search;

if(get.length > 0)
{
	var imageMain = document.getElementById("image");
	imageMain.style.backgroundImage = `url('../Task4/gallery/${get.slice(1)}')`;
}

var x = document.getElementsByClassName("imageBg");
var i;
for (i = 0; i < x.length; i++) {
  x[i].addEventListener("click",sendImgName);
}

function sendImgName(){
	
	var pathToImage = `pathToImage=${this.src}`;
	
	var pathArray = pathToImage.split('/');
	
	document.location = `../Task4/Index.html?${pathArray[pathArray.length - 1]}`;
}