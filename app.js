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

let cell = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let row = ""
 for (i=0; i < cell.length; i++){
 if (cell[i] === "\n"){
  console.log(row)
  row = " "
}
else {row = row + cell[i]}
 }