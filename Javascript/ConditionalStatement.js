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
                                                                                                 
    ### C] `if...else if...else` Statement 


1. Write a program that takes a month number (1–12) and prints the corresponding season:  
   Winter (12, 1, 2), Summer (3, 4, 5), Monsoon (6, 7, 8), Autumn (9, 10, 11).

2. Create a simple tax calculator based on income:  
   Income < 3,00,000 → No tax  
   3,00,000 – 7,00,000 → 5% tax  
   7,00,000 – 10,00,000 → 10% tax  
   Above 10,00,000 → 15% tax  
   Print the tax amount.

3. Write a program that checks a student’s score and prints:  
   “Outstanding” (90 and above), “Good” (70–89), “Average” (40–69), “Needs Improvement” (below 40).

4. Check the speed of a vehicle and print:  
   “Slow” (below 40), “Normal” (40–80), “Fast” (above 80).

5. Write a program that checks a person’s height (in cm) and prints:  
   “Short” (< 150), “Average” (150–170), “Tall” (> 170).

6. Check the day number (1–7) and print whether it is a Weekday or Weekend  
   (1 to 5 = Weekday, 6 and 7 = Weekend).

7. Write a program that calculates electricity bill based on units:  
   0–50 units → ₹2 per unit  
   51–150 units → ₹4 per unit  
   Above 150 units → ₹6 per unit  
   Print the total bill.

8. Create a program that checks a student’s attendance percentage and prints:  
   “Excellent” (≥ 90), “Good” (75–89), “Satisfactory” (50–74), “Poor” (< 50).

9. Write a program that takes three subject marks and finds the highest mark among them using `if...else if...else`.

10. Check a number and print one of the following:  
    “Positive Even”, “Positive Odd”, “Negative Even”, “Negative Odd”, or “Zero”.

---

  // ===================================================================================================================================================

  q1==>
  let month = 4;

if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
} else if (month >= 3 && month <= 5) {
    console.log("Summer");
} else if (month >= 6 && month <= 8) {
    console.log("Monsoon");
} else if (month >= 9 && month <= 11) {
    console.log("Autumn");
} else {
    console.log("Invalid Month");
}
 Q2.

   let income=400000;
if (income<300000){
  console.log("No tax")
}else if (income>=300000 && income<700000){
  console.log("5% tax")
}else if (income>=700000 && income<1000000){
  console.log("10% tax")
}else {
  console.log("15% tax")
}


q3.

  let score = 85;

if (score >= 90) {
    console.log("Outstanding");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}

q4.
  let speed = 60;

if (speed < 40) {
    console.log("Slow");
} else if (speed <= 80) {
    console.log("Normal");
} else {
    console.log("Fast");
}

q5.
  let height = 165;

if (height < 150) {
    console.log("Short");
} else if (height <= 170) {
    console.log("Average");
} else {
    console.log("Tall");
}

q6.
  let day = 6;

if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else if (day == 6 || day == 7) {
    console.log("Weekend");
} else {
    console.log("Invalid Day");
}

q7.
  
let units=70;
if (units>=0 && units<=50){
  console.log("2 peer unit")
}else if (units>=51 && units<=150){
  console.log("4 per unit")
}else if (units>=150){
  console.log("6 peer unit")
}else{
  console.log("invalid unit")
}

q8.
  let attendance = 85;

if (attendance >= 90) {
    console.log("Excellent");
} else if (attendance >= 75) {
    console.log("Good");
} else if (attendance >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}

q9.
  let a = 75;
let b = 90;
let c = 85;

if (a >= b && a >= c) {
    console.log("Highest Mark: " + a);
} else if (b >= a && b >= c) {
    console.log("Highest Mark: " + b);
} else {
    console.log("Highest Mark: " + c);
}
q110.
  let num = -7;

if (num == 0) {
    console.log("Zero");
} else if (num > 0 && num % 2 == 0) {
    console.log("Positive Even");
} else if (num > 0 && num % 2 != 0) {
    console.log("Positive Odd");
} else if (num < 0 && num % 2 == 0) {
    console.log("Negative Even");
} else {
    console.log("Negative Odd");
}

// =======================================================================



### D] Nested `if` Statement 


1. Check if a number is greater than 10.  
   If yes, then check whether it is divisible by 3 and print the appropriate message.

2. Write a program that first checks if a person is 18 or older.  
   If yes, then check if they have a voter ID. Print “Can Vote” only if both conditions are true.

3. Check if a student has scored 40 or more marks.  
   If yes, then check if the score is 80 or above and print “Passed with Distinction”.

4. Create a simple ATM system:  
   First check if the PIN is correct.  
   If PIN is correct, then check if the account balance is sufficient for withdrawal.

5. Write a program that checks if a year is divisible by 4.  
   If yes, then further check if it is divisible by 100.  
   If it is divisible by 100, then check if it is also divisible by 400 to confirm it is a leap year.

6. Check if a user has entered a valid email (contains “@”).  
   If yes, then check if the email ends with “.com”.  
   If both are true, then check if the length of the email is greater than 10 characters and print “Valid Email”.

7. Write a program for online shopping:  
   First check if the cart total is ₹1000 or more.  
   If yes, then check if the user is a premium member.  
   If the user is premium, give 20% discount, otherwise give 10% discount.  
   Finally print the final amount after discount.

8. Check if a number is positive.  
   If yes, then check whether it is even.  
   If it is even, then further check if it is divisible by 4 and print “Positive Even and Divisible by 4”.

9. Create a job eligibility checker with multiple conditions:  
   First check if age is between 21 and 30.  
   If age is valid, then check if the candidate has a graduation degree.  
   If the degree is present, then check if the candidate has at least 2 years of experience.  
   Print “Eligible for Interview” only if all three conditions are true.

10. Write a nested program for exam eligibility:  
    First check if the student is present.  
    If present, then check if internal marks are ≥ 30.  
    If internal marks are valid, then check if external marks are ≥ 35.  
    Print “Eligible for Final Exam” only when all conditions are satisfied.

---

q1.
  let num = 15;

if (num > 10) {
    if (num % 3 == 0) {
        console.log("Greater than 10 and Divisible by 3");
    } else {
        console.log("Greater than 10 but Not Divisible by 3");
    }
} else {
    console.log("Number is Not Greater than 10");
}
q2.
  let age = 20;
let voterID = true;

if (age >= 18) {
    if (voterID == true) {
        console.log("Can Vote");
    } else {
        console.log("Voter ID Required");
    }
} else {
    console.log("Underage");
}
q3.
  let marks = 85;

if (marks >= 40) {
    console.log("Passed");

    if (marks >= 80) {
        console.log("Passed with Distinction");
    }
} else {
    console.log("Failed");
}

q4.
  let pin = 1234;
let correctPin = 1234;
let balance = 5000;
let withdrawal = 2000;

if (pin == correctPin) {
    if (balance >= withdrawal) {
        console.log("Withdrawal Successful");
        console.log("Remaining Balance: " + (balance - withdrawal));
    } else {
        console.log("Insufficient Balance");
    }
} else {
    console.log("Incorrect PIN");
}
q5.
  let year = 2024;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}


// ==================================================================
### E] `switch` Statement – 10 Questions

1. Write a program that takes a month number (1–12) and prints the number of days in that month using `switch`  
   (Hint: Consider 28/29 for February as 28 for simplicity).

2. Write a program that checks a character and prints whether it is a vowel or consonant using `switch`.

3. Create a program that takes a number from 1 to 4 and prints the season using multiple cases together:  
   1 or 2 → Winter  
   3 or 4 → Summer

4. Write a program using `switch (true)` to assign class based on marks:  
   ≥ 75 → Distinction  
   ≥ 60 → 1st class  
   ≥ 50 → 2nd class  
   ≥ 35 → 3rd class  
   below 35 → Failed

5. Create a nested `switch` program:  
   First take a role (“admin” or “user”).  
   If role is “admin”, then take an action (“create”, “edit”, “delete”) and print the corresponding message.  
   If role is “user”, print “Limited Access”.

6. Predict and explain the output of the following code. Then correct it so that only one message is printed:
```js
let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apple is red");
  case "mango":
    console.log("Mango is yellow");
  case "banana":
    console.log("Banana is yellow");
  default:
    console.log("Unknown fruit");
}
```

7. Write a program that takes a value which can be either a number or a string (`0`, `"0"`, `false`, `null`, `undefined`) and uses `switch` to correctly identify each one. Explain why some values may not match as expected.

8. Create a tricky calculator using `switch` that supports these operations:  
   `+`, `-`, `*`, `/`, `%`, and also `**` (exponentiation).  
   Handle division by zero properly inside the corresponding case.

9. Write a program using `switch` that takes a date (day number of the month) and prints:  
   “Beginning of the month” (1–10)  
   “Middle of the month” (11–20)  
   “End of the month” (21–31)  
   Use `switch (true)` technique for range checking.

10. Create a multi-level nested `switch` program for an online food ordering system:  
    First select Category: `"veg"` or `"nonveg"`.  
    Then select Item based on category.  
    Finally select Size: `"half"` or `"full"` and print the final order summary with price.

---
// =======================================================================
  Answer:==
Q1.

let month = 4;

switch (month) {
    case 1:
        console.log("31 days");
        break;

    case 2:
        console.log("28 days");
        break;

    case 3:
        console.log("31 days");
        break;

    case 4:
        console.log("30 days");
        break;

    case 5:
        console.log("31 days");
        break;

    case 6:
        console.log("30 days");
        break;

    case 7:
        console.log("31 days");
        break;

    case 8:
        console.log("31 days");
        break;

    case 9:
        console.log("30 days");
        break;

    case 10:
        console.log("31 days");
        break;

    case 11:
        console.log("30 days");
        break;

    case 12:
        console.log("31 days");
        break;

    default:
        console.log("Invalid month");
}

Q2.
  let ch = "a";

switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");
}

Q3.
let num = 3;

switch (num) {
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
        console.log("Summer");
        break;
    default:
        console.log("Invalid number");
}
 Q4
let marks = 78;

switch (true) {
    case marks >= 75:
        console.log("Distinction");
        break;

    case marks >= 60:
        console.log("1st class");
        break;

    case marks >= 50:
        console.log("2nd class");
        break;

    case marks >= 35:
        console.log("3rd class");
        break;

    default:
        console.log("Failed");
}

Q5.
let role = "admin";
let action = "create";

switch (role) {
    case "admin":
        switch (action) {
            case "create":
                console.log("create username");
                break;

            case "edit":
                console.log("edit username");
                break;

            case "delete":
                console.log("delete username");
                break;

            default:
                console.log("Invalid action");
        }
        break;

    case "user":
        console.log("Limited access");
        break;

    default:
        console.log("Invalid role");
}

Q6.output==>>
  mango is yellow
Q7.

  let value = "0";

switch (value) {
    case 0:
        console.log("Number zero");
        break;

    case "0":
        console.log("String zero");
        break;

    case false:
        console.log("Boolean false");
        break;

    case null:
        console.log("Null value");
        break;

    case undefined:
        console.log("Undefined value");
        break;

    default:
        console.log("Other value");
}
q8

let a = 10;
let b = 3;
let operator = "**";

switch (operator) {
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        if (b == 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(a / b);
        }
        break;

    case "%":
        console.log(a % b);
        break;

    case "**":
        console.log(a ** b);
        break;

    default:
        console.log("Invalid operator");
}

q9
let day = 15;

switch (true) {
    case day >= 1 && day <= 10:
        console.log("Beginning of the month");
        break;
    case day >= 11 && day <= 20:
        console.log("Middle of the month");
        break;
    case day >= 21 && day <= 31:
        console.log("End of the month");
        break;
    default:
        console.log("Invalid day");
}
q10
let category = "veg";
let item = "pizza";
let size = "full";

switch (category) {
    case "veg":
        switch (item) {
            case "pizza":
                switch (size) {
                    case "half":
                        console.log("Veg Pizza Half: ₹100");
                        break;
                    case "full":
                        console.log("Veg Pizza Full: ₹180");
                        break;
                }
                break;
        }
        break;
    case "nonveg":
        switch (item) {
            case "pizza":
                switch (size) {
                    case "half":
                        console.log("Chicken Pizza Half: ₹150");
                        break;
                    case "full":
                        console.log("Chicken Pizza Full: ₹250");
                        break;
                }
                break;
        }
        break;
}

  
  // ======================================================================

### F] Ternary Operator Questions  


1. Write a ternary operator to check whether a given number is divisible by 7. If yes, return `"Divisible by 7"`, otherwise `"Not Divisible by 7"`.

2. Using ternary operator, check if the temperature is greater than or equal to 30. Return `"Hot Day"` or `"Pleasant Day"`.

3. Write a ternary expression that checks if a string is empty. Return `"Empty String"` if it is empty, otherwise `"String has content"`.


4. Using nested ternary, check a person’s age and return:  
   - `"Child"` (age < 13)  
   - `"Teenager"` (13–19)  
   - `"Adult"` (20 and above)

5. Write a nested ternary to find the greater of three numbers (`a`, `b`, `c`) without using `Math.max`.

6. Create a nested ternary that classifies a student’s marks as:  
   - `"Distinction"` (≥ 75)  
   - `"First Class"` (60–74)  
   - `"Second Class"` (50–59)  
   - `"Pass"` (35–49)  
   - `"Fail"` (< 35)

7. Write a single nested ternary expression that returns one of the following based on a number:  
   `"Positive Even"`, `"Positive Odd"`, `"Negative Even"`, `"Negative Odd"`, or `"Zero"`.

8. Using only nested ternary operators, implement the full leap year logic  
   (divisible by 4 **and** (not divisible by 100 **or** divisible by 400)) and return `"Leap Year"` or `"Not a Leap Year"`.

9. Convert the following decision tree into **one single nested ternary** expression:  
   ```
   if (role === "admin") {
     if (action === "delete") → "Admin Delete"
     else if (action === "edit") → "Admin Edit"
     else → "Admin Other"
   } else if (role === "user") {
     if (action === "view") → "User View"
     else → "User Restricted"
   } else {
     → "Invalid Role"
   }
   ```

10. Write a complex nested ternary that calculates discount and final amount based on these rules:  
    - Cart total ≥ 5000 → 20% discount  
    - Cart total ≥ 2000 → 10% discount  
    - Cart total ≥ 1000 → 5% discount  
    - Otherwise → 0% discount  
    Return both the discount percentage and the final payable amount in a single expression (you may return an object or a formatted string).

    // ==============================================================

  Answes+=>
      let num=21;
console.log(num%7==0 ? "divisible by 7":"not divisible by 7");
q2.
  let temp=32;
console.log(temp >= 30 ? "Hot Day" : "Pleasant Day");

Q3.
  let str="";
console.log(str==""? "empty string":"String has content");

q4.

    let age = 16;
console.log(age < 13 ? "Child" : age <= 19 ? "Teenager" : "Adult");

q5.

  
    
  

  


  

    
