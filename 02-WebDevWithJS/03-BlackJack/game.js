function startGame (){
    let firstcard = 21;
let secondcard = 11;
let hasBlackJack = false;
let sum = firstcard + secondcard;
let isAlive = true;
let htmlMessage = document.getElementById("message-el")

let cards = document.getElementById("cards-el")
let sumHTML = document.getElementById("sum-el")
cards.textContent = firstcard   + "  ,  " + secondcard

let message = "";
   

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
}