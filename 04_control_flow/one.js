// if

// if (true){
//   if it's true this code will execute 
// }

// if (false){
   // if it's false this code will not execute 
// }

const isUserloggedIn = true

if ( 2 == "2") {
 console.log ("executed");
}

// <, >, <=, >=, ==, !=, ===, !==


 /* const score = 200

if (score > 100) {
   let power = "fly"
   console.log (`User power: ${power}`);
}

   console.log (`User power: ${power}`);  */

   const balance = 1000

   //if (balance > 500) console.log("test") , console.log("test2");

   /*
   if (balance < 500) {
      console.log ("less than 500");
   } else if (balance < 750) {
      console.log ("less than 750");
   } else if (balance < 900) {
      console.log ("less than 900");
   } else {
      console.log ("less than 1200");
   } 
   */
  
   const userLoggedIn = true
   const debitCard = true
   const loggedInFromGoogle = false
   const loggedInFromEmail = true

   if (userLoggedIn && debitCard) {                //logical operator
      console.log ("Allow to buy course");
   }

   if (loggedInFromGoogle || loggedInFromEmail) {     //logical operator
      console.log ("User logged in");
   }