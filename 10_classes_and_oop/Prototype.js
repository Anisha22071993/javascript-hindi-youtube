   //  let myName = "anisha     "
  //  let mychannel = "chai     "

  //  console.log(myName.trueLength);
    

  let myHeros = ["thor", "spiderman"]


  let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
  }

  Object.prototype.anisha = function(){
    console.log(`anisha is present in all object`);
 }

 Array.prototype.heyAnisha = function(){
    console.log(`Anisha says hello`);
}

 //  heroPower.anisha()
 // myHeros.anisha()
 // myHeros.heyAnisha()
 // heroPower.heyAnisha()

 // inheritance

 const User = {
    name: "chai",
    email: "chai@google.com"
    
 }
 const Teacher = {
    makeVideo: true
 }
 const TeachingSupport = {
    isAvailable: false
 }
 const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
 }

Teacher.__protO__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"anisha".trueLength()
"iceTea".trueLength()