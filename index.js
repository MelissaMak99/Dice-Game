
// Generate random dice number between 1 and 6

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice_1 = "images/dice"+ randomNumber1 +".png"
var dice_2 = "images/dice"+ randomNumber2 +".png"
document.querySelector("img.img1").setAttribute("src", dice_1)
document.querySelector("img.img2").setAttribute("src", dice_2)

//choosing the winner
if (dice_1 > dice_2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (dice_1 < dice_2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}

