let firstcard = 10;
let secondcard = 11;
let hasBlackJack = false;
let sum = firstcard + secondcard;
let isAlive = true;

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

console.log(message)