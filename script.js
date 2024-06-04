var player1Name = prompt("Enter Player 1 Name :");

var player2Name = prompt("Enter Player 2 Name :");


var  name1 = document.querySelectorAll("p")[0];

var  name2 = document.querySelectorAll("p")[1];

name1.innerHTML = player1Name
name2.innerHTML = player2Name





function  roll(){
     
    var randomNum1 = Math.floor(Math.random()*6)+1;    //1-6

    var randomImage1 = "images/dice" + randomNum1 +".png";  //dice1 - dice6

    var dice1 = document.querySelectorAll("img")[0];  //selcting img tag

    dice1.setAttribute("src",randomImage1);          //changing attribute




    var randomNum2 = Math.floor(Math.random()*6)+1;

    var randomImage2 = "images/dice" + randomNum2 + ".png";

    var dice2 = document.querySelectorAll("img")[1];

    dice2.setAttribute("src",randomImage2);




    if (randomNum1 > randomNum2)
    {
        document.querySelector("h1").innerHTML = player1Name + "  Wins"
    }
    else if (randomNum2 > randomNum1) 
    {
        document.querySelector("h1").innerHTML = player2Name + "  Wins"
    } 
    else 
    {
    document.querySelector("h1").innerHTML = "Draw!"     
    }




}




