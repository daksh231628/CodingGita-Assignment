# Assignment : Conditional Statements

---

### A] `if` Statement 

1. Write a program to check if a number is divisible by 5. If yes, print “Divisible by 5”.

2. Check if a person’s age is greater than or equal to 60. If true, print “Senior Citizen”.

3. Write a program that checks if a given number is greater than 100. If yes, print “Big Number”.

4. Check if the temperature is less than 10. If true, print “Very Cold”.

5. Write a program to check if a student scored full marks (100). If yes, print “Perfect Score”.

6. Check if a number is negative. If it is, print “Negative Number”.

7. Write a program that checks if a user has entered an empty string. If the string is empty, print “No input provided”.

8. Check if a given year is divisible by 100. If yes, print “Century Year”.

9. Write a program to check if a number is both positive and even using a single `if` condition. If true, print “Positive Even Number”.

10. Check if the value of a variable `marks` is greater than or equal to 35 **and** less than or equal to 100. If true, print “Valid Marks”.

---
// ============================================================================================================
q1.
  let num=5;
let isDivisible=num%5==0;
if (isDivisible == true){
  console.log("is divisible by 5")
}

q2.
  let age=65;
  if (age >= 60) {
    console.log("Senior Citizen");
}
q3.
  let number = 150;
if (number > 100) {
    console.log("Big Number");
}
q4.
  let temperature = 5;
if (temperature < 10) {
    console.log("Very Cold");
}

q5.
  let score = 100;
if (score == 100) {
    console.log("Perfect Score");
}

q6.
  let n = -8;
if (n < 0) {
    console.log("Negative Number");
}
q7.
  let str = "";
if (str == "") {
    console.log("No input provided");
}
q8.
  let year = 2000;
if (year % 100 == 0) {
    console.log("Century Year");
}

q9.
  let value = 8;
if (value > 0 && value % 2 == 0) {
    console.log("Positive Even Number");
}
Q10.
  let marks= 55;;
if (marks>=35 && marks<=100){
  console.log("valid score")
}
// ==========================================================================================================

### B] `if...else` Statement 

1. Write a program to check whether a number is even or odd.

2. Check if a person is eligible to vote (age ≥ 18). Print “Eligible” or “Not Eligible”.

3. Write a program that checks whether a number is positive or negative.

4. Check if a student has passed or failed based on marks (pass mark = 35).

5. Write a program to check whether a given character is an uppercase letter or not.  
   (Hint: Use character comparison)

6. Check if a number is divisible by 3 or not. Print appropriate messages.

7. Write a program that takes a password as input. If the password is “admin123”, print “Login Successful”, otherwise print “Incorrect Password”.

8. Check whether a given year is a leap year or not using the basic rule (divisible by 4).

9. Write a program to find the greater of two numbers using `if...else`.

10. Check if a number is positive, negative, or zero using only `if...else` (you may use nested or multiple conditions carefully).

  // ==========================================================================================================

  q1.
  let num = 8;
if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

q2.
  let age = 20;
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

  Q3.
    let number = -5;
if (number >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}
q4.
  let marks = 40;
if (marks >= 35) {
    console.log("Passed");
} else {
    console.log("Failed");
}
q5.
  let ch = "A";
if (ch >= "A" && ch <= "Z") {
    console.log("Uppercase Letter");
} else {
    console.log("Not an Uppercase Letter");
}
                                                                                               *********
q6.
      let n = 12;
if (n % 3 == 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not Divisible by 3");
}

q7.
  let password = "admin123";
if (password == "admin123") {
    console.log("Login Successful");
} else {
    console.log("Incorrect Password");
}

q8.
  let year = 2024;
if (year % 4 == 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}
q9.
  let a = 25;
let b = 15;
if (a > b) {
    console.log(a + " is greater");
} else {
    console.log(b + " is greater or equal");
}
q10.
  let value = 0;
if (value > 0) {
    console.log("Positive");
} else {
    if (value < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// =======================================================================
                                                                                                 
  
