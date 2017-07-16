	
var count=0;
var array=["img/scale.png","img/five.jpg","img/fore.jpg",
"img/hand.jpg","img/logo.jpg"];
var trigger =function (number){
	var imageSlide=document.getElementById("slideimage");
	var image=array[number];
	imageSlide.src=image;
    var elem=imageSlide;
}

function plusSlides(number){
	if(count==0&&number==-1){
		count=array.length-2;
     }
     else if (count==3&&number==1){
       count=0;
     }
     else{
     	count=count+number;
     }
    var imageSlide=document.getElementById("slideimage");
	var image=array[count];
	imageSlide.src=image;
 }
