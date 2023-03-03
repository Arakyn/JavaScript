let firstcard = 10;
let secondcard = 3;

let cardsArray = [firstcard,secondcard]
let hasBlackJack = false;
let sum = firstcard + secondcard;
let isAlive = true;
let htmlMessage = document.getElementById("message-el")

let cards = document.querySelector("#cards-el")
let sumHTML = document.querySelector("#sum-el")



let message = "";


function newCard(){
    
let card = 8;
cardsArray.push(8)
sum += card

    renderGame()
}

function startGame (){
    renderGame()
}
function renderGame (){

   
   

if (sum<21){
    message = "Do you want to draw a new card? 🙃"
   
    

} else  if(sum===21) {
    hasBlackJack = true;
  
    message = "you got blackjack 🥳";
} else {
    message = "you got busted lul 😂";
    isAlive = false;
 
} 
htmlMessage.textContent = message;


console.log(message)
console.log(isAlive)
console.log(hasBlackJack)
cards.textContent =  cardsArray[0] + " "+ cardsArray[1] + " "
sumHTML.textContent = "  "+ sum
}