console.log("success");
//changes background of main screen
function bgchange(){
  loopID = window.setTimeout("bgchange()",3000);
  var index = Math.floor(Math.random()* 8);
  var ColorValue = "url(images/slideshow/stampback2.png)"; //default
  if(index == 1)
    ColorValue = "url(images/slideshow/elephant.png)";
  if(index == 2)
    ColorValue = "url(images/slideshow/stampback2.png)";
  if(index == 3)
    ColorValue = "url(images/slideshow/mehndi.png)";
  if(index == 4)
    ColorValue = "url(images/slideshow/write.png)";
  if(index == 5)
    ColorValue = "url(images/slideshow/monumentback.png)";
  if(index == 6)
    ColorValue = "url(images/slideshow/foodback.png)";
  if(index == 7)
    ColorValue = "url(images/slideshow/ind.png)";
  document.getElementById("mainscreen").style.backgroundImage = ColorValue;
}
while(1){
    bgchange();
}
//scroll to top button
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//positioning mainscreen wallpaper\
function mainscreenheight() {
  var h=document.getElementById('forheight').offsetHeight;
  document.getElementById('mainscreen').style.marginTop=h+"px";
}
//overlay effect
function displayon(i) {
  var h=document.getElementById('forheight').offsetHeight;
  document.getElementsByClassName("articlediv")[i].style.display = "block";
  document.getElementsByClassName("articlediv")[i].style.top=h+"px";
}
function displayoff(i) {
  document.getElementsByClassName("articlediv")[i].style.display = "none";
}
//included google map
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(20.5937,78.9629),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("indiamap"),mapProp);
}
