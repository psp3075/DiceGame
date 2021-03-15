var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var imageSource = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImagesrc = "images/" + "dice" + randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesrc);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1, You win!"
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2, You win!"
}
else{
  document.querySelector("h1").innerHTML = 'Game Draw...'
}
