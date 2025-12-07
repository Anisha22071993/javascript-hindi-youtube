// Two types of OBJECTS

// 1.  singleton
// object.create

// 2. object literals  |
//                     V


const mySym = Symbol ("key1")


const JsUser = {
    name: "Anisha",
    "full name": "Anisha Jaquelin",
    [mySym]: "mykey1",
    age: 32,
    location: "Ramgarh",
    email: "anisha@google.com",
    iaLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log (JsUser.email);
//console.log (JsUser["email"]);
//console.log (JsUser["full name"]);
//console.log (JsUser[mySym]);

JsUser.email = "anisha@gmail.com"
// Object.freeze (JsUser)
JsUser.email = "anisha@microsoft.com"
console.log (JsUser);

JsUser.greeting = function(){
    console.log ("Hello JS user");
}

JsUser.greetingTwo =function (){
    console.log (`Hello JS user, ${this.name}`);
}

console.log (JsUser.greeting());
console.log (JsUser.greetingTwo());