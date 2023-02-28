var ourArray = ["Jonnathon",23]
console.log(ourArray[0],ourArray[1])


// nested arrays 

var nestArray = [["Amandeep",1],["Joanes",23]]
console.log(nestArray)
console.log(nestArray[0])
console.log(nestArray[0][0])
console.log(nestArray[0][1])
console.log(nestArray[1])
console.log(nestArray[1][0])
console.log(nestArray[1][1])

nestArray[0][0]="Justin";
console.log(nestArray[0][0])
console.log(nestArray)