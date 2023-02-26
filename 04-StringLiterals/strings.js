// creating strings

var MyFirstName = "Amandeep";
var MyLastName = "Singh";
console.log(MyFirstName,MyLastName)

// using single quotes ig?

var quote = 'I am a "double quoted string" inside a "single coated string"';
// or
var quote2 = `'"I am a\b \\"double quoted string\" inside a \"single coated string\""'`
// anytime you need to use a baclslash you need to use two backslashes
console.log(quote)
console.log("Newer",quote2)

// joining strings with plus character

var mystr;
mystr = "Hello I am Yilong Ma " + "I dont want money, I want love"
console.log(mystr)

// doing them with += operators

mystr += " I know joe biden"
console.log(mystr)

// constructing strings with variables
ik = " ,I also know Vladimir Putin"
mystr += ik
console.log(mystr)