var randomNumber1 =Math.floor(Math.random()*5) + 1;
var randomimage = "dice"+ randomNumber1 +".png";
var randomimagesource ="image/"+ randomimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomNumber2 =Math.floor(Math.random()*5) + 1;
var randomimagesource2 ="image/dice"+ randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}
