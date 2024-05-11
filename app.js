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

function checkPrime(num) {
  let i, flag = true;
  for (i = 2; i <= num - 1; i++) {
      if (num % i == 0) {
          flag = false;
          break;
      }
  }
  if (flag == true)
      console.log(num + " is prime");
  else
      console.log(num + " is not prime");
    return flag;
}

let n = 24;

while (true) {
  let nextNum = n + 1;
  if (checkPrime(nextNum)) {
    console.log(nextNum);
    break;
  }
  
  n++;
}