// using pop


var lol = ["JUSTIN",31,"BOI","xd"]

lol.push("Nike",12)
console.log(lol)

// pushing a array into a array

var myArray = [["Gin","Kazama"]]
myArray.push(["Hashirama","Kazama"])
console.log(myArray)

lol.pop()
console.log(lol)
myArray.pop()
console.log(myArray)
myArray.push(["Hashirama","Kazama"])
// we can also catch it
console.log("catching the popped value")
var catched = myArray.pop()
console.log(catched)