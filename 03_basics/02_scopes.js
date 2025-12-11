// var c = 300
let a = 300
if (true) {
 let a = 10
const b = 20
var c = 30
console.log ("INNER: ", a);
}

//for (let i = 0; i < array.length; i++) {
  //  const element = array [i];
//}

//console.log (a);
//console.log (b);
//console.log (c);

function one (){
    const username = "anisha"

    function two (){
        const website = "youtube"
        console.log (username);
    }
    // console.log (website);

    two()
}

//one()

if (true) {
    const username = "anisha"
    if (username === "anisha") {
        const website = "youtube"
        console.log (username + website);
    }
    // console.log (website);
}

// console.log (username);

// ++++++++++++++++++ interesting +++++++++++++++++++ 

console.log (addone(5))  // correct in this format

function addone (num){
    return num + 1
}


addTwo (5) // inncorrect in this format (before declaration)

const addTwo = function (num) {
    return num + 2
}

