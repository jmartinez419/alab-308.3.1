//for (let i = 0; i < 100; i++) console.log(100);

function log(num) {
  for (let i = 1; i <= num; i++) {

    if (i % 3 === 0 && i % 5 === 0) 
     console.log("Fizz & Buzz");
     else if (i % 3 === 0)
      console.log ("Fizz")
      else if (i % 5 === 0)
       console.log ("Buzz")
       else console.log(i)
      
  }
}
log (100)