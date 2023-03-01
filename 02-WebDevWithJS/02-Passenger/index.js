// initialized the count as 0
let counter = document.getElementById("counter")



let count = 0
// listening for clicks on the button
function Incrementer(){

    count +=  1;
    counter.textContent = count
    console.log("Button was clicked")
    
}

function save(){
document.getElementById("previous-ent").textContent +=     count + " - " ;
  console.log(count)
  count = 0
  counter.textContent = count

}


// incrementing the count


// showing the new count on the app