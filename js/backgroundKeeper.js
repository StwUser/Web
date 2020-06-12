//alert(document.cookie); // показываем все куки
var get = location.search;


if(localStorage.imageName){
	var imageName = localStorage.imageName.split('=');
	var imageMain = document.getElementById("image");
	imageMain.style.backgroundImage = `url("../Task4/gallery/${imageName[1]}")`;
	
}

document.addEventListener('keydown', function(event){
	//alert(event.keyCode);
  if(event.keyCode == 116) {
    console.log("F5 was pressed");
	
	if(get.length > 0)
	{	
		var pathToImage = `pathToImage=${get.slice(1)}`;
		localStorage.imageName = pathToImage;
		alert("Image was saved.");
	}
	
  }
})

 