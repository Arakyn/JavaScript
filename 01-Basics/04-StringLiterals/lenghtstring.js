var Lenght = 0;
var Name = "Vladimir Putin"

Lenght = Name.length
console.log(Lenght)

// finding the first letter

var FirstLetter = "";
FirstLetter = Name[0]
console.log("Printing the first letter")
console.log(FirstLetter)

// changing the first letter of the name

Name[0] = "P";
console.log(Name) // wont work

// using bracket notation to find the Nth term 

var lol = 2
var character = Name[lol-1]
console.log(character)

// finding the last letter of the name

var lastLetter = Name[Name.length -1]
console.log("Printing the last letter of the name ",lastLetter);

// creating a function for sentence
function sentence (MyNoun,MyAdjective,myVerb,MyAdverb){

    var result = ""
    var result = MyAdjective +" "+ MyNoun +" " + myVerb +" " + MyAdverb
    return result
}

console.log(sentence("Man","fat","Dropped","Quickly"))

