
# 📝 JavaScript Assignment: `for` Loop

## Instructions
- Solve all questions using a `for` loop.
- Use `console.log()` to display the output.
- Do not use arrays or advanced concepts.

---

## Q1. Counting Numbers 🔢

A teacher wants students to practice counting. Write a program to print all numbers from 1 to 15.

**Sample Output:**
```
1
2
3
4
5
...
15
```

---

Q2. Even Numbers 🎯

A school has lockers numbered with even numbers for a special activity. Write a program to print all even numbers from 2 to 40.

Sample Output:
```
2
4
6
8
10
...
40
```

---

Q3. Odd Numbers 🏃

A fitness coach assigns odd numbers to participants for a special activity. Write a program to print all odd numbers from 1 to 35.

Sample Output:
```
1
3
5
7
9
...
35

```
---

Q4. Saving Money 💰

You save ₹10 on Day 1, ₹20 on Day 2, ₹30 on Day 3, and continue increasing your daily savings by ₹10. Write a program to calculate your total savings after 10 days.

Sample Output:
```
Total savings after 10 days: ₹550
```

---

Q5. Multiplication Table 📚

You want to practice multiplication. Write a program to print the multiplication table of 12, from 12 × 1 to 12 × 10.

Sample Output:
```
12 x 1 = 12
12 x 2 = 24
12 x 3 = 36
12 x 4 = 48
12 x 5 = 60
12 x 6 = 72
12 x 7 = 84
12 x 8 = 96
12 x 9 = 108
12 x 10 = 120
```

---

Q6. Daily Water Intake 💧

You drink 3 glasses of water every day. Write a program to calculate the total number of glasses you drink over 7 days. Print the cumulative total after each day.

Sample Output:
``|
Day 1: 3 glasses
Day 2: 6 glasses
Day 3: 9 glasses
Day 4: 12 glasses
Day 5: 15 glasses
Day 6: 18 glasses
Day 7: 21 glasses

```
---

Q7. Shopping Calculation 🛍️

One chocolate costs ₹15. Write a program to print the total cost of buying 1 to 10 chocolates.

Sample Output:
```
1 chocolate = ₹15
2 chocolates = ₹30
3 chocolates = ₹45
4 chocolates = ₹60
5 chocolates = ₹75
...
10 chocolates = ₹150

```
---

Q8. Sum of Even Numbers ➕

You want to calculate the sum of all even numbers between 2 and 30, including both 2 and 30. Write a program to calculate and print the total.

Sample Output:
```
Sum of even numbers: 240

```
---

Q9. Weekly Exercise 💪

You do 5 push-ups on Day 1, 10 on Day 2, 15 on Day 3, and continue increasing the number by 5 each day. Write a program to print the number of push-ups for each day over 7 days.

Sample Output:

Day 1: 5 push-ups
Day 2: 10 push-ups
Day 3: 15 push-ups
Day 4: 20 push-ups
Day 5: 25 push-ups
Day 6: 30 push-ups
Day 7: 35 push-ups


---

Q10. Movie Tickets 🎬

One movie ticket costs ₹150. Write a program to print the total ticket cost for 1 to 8 people.

Sample Output:

1 person: ₹150
2 people: ₹300
3 people: ₹450
4 people: ₹600
5 people: ₹750
6 people: ₹900
7 people: ₹1050
8 people: ₹1200


---
// ========================================================================
// Answrrs

Q1
for (let i=1;i<=15,i++){
console.log(i);}
Q2

for (let i=2;i<=40;i+=2){
    console.log(i)
}
q3
for (let i=1;i<=35;i+=2){
    console.log(i)
}
q4
let sum=0;
for (i=1;i<=10;i+=1){
    sum=sum+i*10
}
console.log(sum)

Q5
let num=12;
for (let i=1;i<=10;i++){
    console.log(`${num} * ${i} = ${num*i}`)
}

Q6
let sum=0;
for (let i=1;i<=7;i++){
    sum=sum+3
    console.log(`${i}:${sum}`)
}

Q7
let total=0;
for (let i=1;i<=10;i++){
    total=total+15
    console.log(`${i} chocolate = ${total}`)
}
Q8
let sum = 0;

for (let i = 2; i <= 30; i += 2) {
    sum = sum + i;
}

console.log("Sum of even numbers: " + sum);

q9
for (let i = 1; i <= 7; i++) {
    console.log("Day " + i + ": " + i * 5 + " push-ups");
}
q10
let total=0;
for (let i=1;i<=8;i++){
    total=total+150
    console.log(`${i} person : ${total}`)
}

## Part B] For Loop (Additional advanced questions)
---
1. Given an array of temperatures `[28, 32, 25, 40, 18, 35]`, use a `for` loop to count how many days were hotter than 30°C.  
2. Write a `for` loop that calculates the sum of all digits of a given number (example: 4729 → 4+7+2+9 = 22).  
3. Create a `for` loop that prints only the numbers between 1 and 100 that are divisible by both 3 and 5, but not by 7.  
4. Given the string `"JavaScript"`, use a `for` loop to create a new string that contains only the consonants (remove vowels).  
5. Write a `for` loop that finds the largest number in an array of positive integers without using any sorting method.  
6. Use a `for` loop to check whether a given number is a perfect number (a number equal to the sum of its proper divisors). Example: 28.  
7. Print the following series using a single `for` loop:  
   `1 2 4 8 16 32 64 128` 
8. Write a `for` loop that prints the first 20 Fibonacci numbers (starting with 0 and 1).
9. Given an array of student scores `[45, 78, 90, 32, 56, 88]`, use a `for` loop to calculate the average and also count how many students scored above the average.  
10. Write a `for` loop that converts a decimal number to its binary representation (without using built-in methods like `toString(2)`).

### Note: Question No. 8 & 10 are optional from above.

---

// ================================================================================================================

// Q1

let temp=[28,32,25,40,18,35];
let count=0;
for (let i=0; i<=temp.length-1;i++){
    if (temp[i]>30){
        count+=1
    }}
console.log(count);

q2

let n=4729;
let numStr = String(n)
let sum=0;
for (let i=0;i < numStr.length;i++){
    let digit=n%10;
    sum=sum+digit;
    n=Math.floor(n/10)   
}
console.log(sum)

q3

for (let i=0;i<=100;i++){
    if (i%3==0 && i%5==0 && i%7!=0){
        console.log(i)
    }
}
Q4
let s="javascript";
t="";
for (let i=0;i<s.length;i++){
    if ("aeiou".includes(s[i])) {
        continue;
    }
    t=t+s[i]
}
console.log(t)

Q5

let arr=[10,20,50,60,78,67];
let greater=0;
for (let i=0;i<arr.length;i++){
    if (arr[i]>greater){
        greater=arr[i]
    }
}
console.log(greater)

Q6
let n=28;
let sum=0;
for (let i=0;i<n;i++){
    if (n%i==0){
        sum=sum+i
    }

}
if (sum==n){
    console.log("Perfect number")
}else{
    console.log("Not a perfect number")
}

Q7

let num = 1;

for (let i = 1; i <= 8; i++) {
    console.log(num);
    num = num * 2;
}

q8
let a=0;
let b=1;
for (let i=0;i<=20;i++){
    console.log(a);
    let next=a+b
    a=b
    b=next
}

Q9

let scores = [45, 78, 90, 32, 56, 88];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
}

let average = sum / scores.length;
let count = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > average) {
        count++;
    }
}

console.log("Average:", average);
console.log("Students above average:", count);

q10
let  n = 13;
let binary = "";

for (; n > 0; ) {
    var r = n % 2;
    binary = r + binary;
    n = Math.floor(n / 2);
}

console.log(binary);












### Part C-a] `break` inside a  `for` Loop

1. Write a `for` loop that searches for the first occurrence of the number 7 in an array. As soon as it finds 7, print its index and stop the loop using `break`.  
2. Simulate a simple password checker: keep asking the user for a password (using a `for` loop that runs maximum 5 times). If the correct password is entered, print “Access granted” and `break`. If all 5 attempts fail, print “Account locked”.  
3. Write a `for` loop that adds numbers from 1 onwards until the sum exceeds 100. Print the last number that was added before the sum crossed 100 and stop using `break`.  
4. Given an array of names, use a `for` loop to find the first name that starts with the letter “S”. Print that name and immediately stop the loop with `break`.  
5. Create a `for` loop that prints numbers from 1 to 50. Stop completely (`break`) as soon as you encounter a number that is both a perfect square and greater than 20.

---
q1
var arr = [2, 4, 6, 7, 9, 7];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        console.log(i);
        break;
    }
}
Q2


let correct = "hello123";
let found = false;

for (let i = 1; i <= 5; i++) {
    let password = prompt("Enter your password:"); 

    if (password == correct) {
        console.log("Access granted");
        found = true;
        break;
    }
}

if (found === false) {
    console.log("Account locked");
}



q3.
let sum = 0;

for (let i = 1; ; i++) {
    sum = sum + i;

    if (sum > 100) {
        console.log(i - 1);
        break;
    }
}
q4.
let names = ["Aman", "Rahul", "Simran", "Sahil", "Neha"];

for (let i = 0; i < names.length; i++) {
    if (names[i][0] === "S") {
        console.log(names[i]);
        break;
    }
}
q5.
for (let i = 1; i <= 50; i++) {
    if (i > 20 && (i == 25 || i == 36 || i == 49)) {
        console.log(i);
        break;
    }
}

// ====================================================================================

### Part C-b] `continue` inside a `for` Loop

1. Print all numbers from 1 to 30, but skip every number that is divisible by 4 using `continue`.  
2. Given an array of mixed positive and negative numbers, use a `for` loop with `continue` to calculate the sum of only the positive numbers.  
3. Write a `for` loop that prints every character of the string `"Hello World"`, but skips all spaces using `continue`.  
4. Print the multiplication table of 6 from 1 to 12, but skip the rows where the product is divisible by 5 (use `continue`).  
5. Given an array of ages `[12, 18, 25, 15, 30, 17, 22]`, use a `for` loop with `continue` to print only the ages of people who are eligible to vote (age ≥ 18).

// ===============================================================================================

### Part C-b] `continue` inside a `for` Loop

1. Print all numbers from 1 to 30, but skip every number that is divisible by 4 using `continue`.  
2. Given an array of mixed positive and negative numbers, use a `for` loop with `continue` to calculate the sum of only the positive numbers.  
3. Write a `for` loop that prints every character of the string `"Hello World"`, but skips all spaces using `continue`.  
4. Print the multiplication table of 6 from 1 to 12, but skip the rows where the product is divisible by 5 (use `continue`).  
5. Given an array of ages `[12, 18, 25, 15, 30, 17, 22]`, use a `for` loop with `continue` to print only the ages of people who are eligible to vote (age ≥ 18).

// ==================================================================================
q1.
for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}
q2.
let arr = [10, -5, 20, -8, 7, -2];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        continue;
    }
    sum = sum + arr[i];
}

console.log(sum);

q3.
let s = "Hello World";
let bag=""

for (var i = 0; i < s.length; i++) {
    if (s[i] == " ") {
        continue;
    }
    bag=bag+s[i];
}
console.log(bag)

Q4.
for (let i = 1; i <= 12; i++) {
    let product = 6 * i;

    if (product % 5 == 0) {
        continue;
    }

    console.log("6 x " + i + " = " + product);
}

q5.
let ages = [12, 18, 25, 15, 30, 17, 22];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        continue;
    }
    console.log(ages[i]);
}

// =====================================================================================================================

### Part D] `Reverse` For Loop

1. Write a reverse `for` loop that prints all numbers from 50 down to 1 that are divisible by 3 but **not** divisible by 9.  

2. Write a reverse `for` loop that calculates the product of all odd digits of a given number (example: 4729 → 7 × 9 = 63).   

3. Given the string `"Programming"`, use a reverse `for` loop to create a new string that contains only the consonants in reverse order. 

4. Write a reverse `for` loop that prints the first 15 Fibonacci numbers in **reverse order** (starting from the 15th number down to 0).

5. Use a reverse `for` loop to check whether a given number is a palindrome by comparing digits from both ends (without converting the number to a string).  

6. Given an array `[12, 45, 7, 23, 56, 89, 34]`, use a reverse `for` loop to find the largest number that is less than 50 (do **not** use any built-in methods).   

7. Given an array of temperatures `[32, 28, 41, 19, 35, 27, 38]`, use a reverse `for` loop to count how many days were colder than 30°C, starting from the last day.  

8. Write a reverse `for` loop that converts a decimal number to its binary representation but prints the binary digits in reverse order (example: 13 → 1011 becomes 1101).  

9. **(Reverse For Loop + `break`)**  
Given an array `[90, 85, 70, 95, 60, 88, 75]`, use a reverse `for` loop to find the first score (starting from the end) that is greater than 80. Print that score and its index, then stop the loop using `break`.  

10. **(Reverse For Loop + `continue`)**  
Write a reverse `for` loop that prints numbers from 40 down to 1, but skips every number that is a perfect square using `continue`.


// ================================================================================================================
q1

for (let i = 50; i >= 1; i--) {
    if (i % 3 == 0 && i % 9 != 0) {
        console.log(i);
    }
}
q2.
let n=4729;
let product=1;
let y=String(n).length
for (let i=0;i<=y;i++){
    let digit=n%10
    if (digit%2!=0){
        product=product*digit
    }
    n=Math.floor(n/10)

}
console.log(product) 

q3

let s = "Programming";
let result = "";
let vowels = "aeiouAEIOU";

for (let i = s.length - 1; i >= 0; i--) {
    if (!vowels.includes(s[i])) {
        result = result + s[i];
    }
}

console.log(result);
q4
let a=14;
let b=15;
let arr=[];
for (let i=0;i<15;i++){
    arr[i] = a;
    let c=a+b;
    a=b;
    b=c;
}
for (let i = 14; i >= 0; i--) {
    console.log(arr[i]);
}
q5
let n=121;
let t=n;
y=String(n).length
let reverse=0;
for (let i=0;i<y;i++){
    let digit=n%10
    reverse=reverse*10+digit
    n=Math.floor(n/10)

}
if (t == reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
Q6

let arr = [12, 45, 7, 23, 56, 89, 34];
let largest = -Infinity;

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 50 && arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);
q7

let temp = [32, 28, 41, 19, 35, 27, 38];
let count = 0;

for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] < 30) {
        count++;
    }
}

console.log(count);
q8

let  n = 13;
let binary = "";

for (; n > 0; ) {
    var r = n % 2;
    binary = r + binary;
    n = Math.floor(n / 2);
}

console.log(binary);

q9

let scores = [90, 85, 70, 95, 60, 88, 75];

for (let i = scores.length - 1; i >= 0; i--) {
    if (scores[i] > 80) {
        console.log("Score:", scores[i]);
        console.log("Index:", i);
        break;
    }
}
q10

for (let i = 40; i >= 1; i--) {
    let square = false;

    for (let j = 1; j * j <= i; j++) {
        if (j * j == i) {
            square = true;
            break;
        }
    }

    if (square) {
        continue;
    }

    console.log(i);
}

method -2
for (let i=40;i>=1;i--){
    if ((i**0.5)%1==0){
        continue;
    }
    console.log(i)
}

// =========================================================================================================================

### Part E] `Nested For Loop` Questions

1. Print the following right-triangle number pattern using nested `for` loops (without hard-coding any row):
```
1
2 3
4 5 6
7 8 9 10
```

2. Print the following right-triangle number pattern using nested `for` loops (without hard-coding any row):
```
1
2 2
3 3 3
4 4 4 4
```

3. Print the following right-triangle number pattern using nested `for` loops (without hard-coding any row):
```
1
2 3
4 5 6
7 8 9 10
```

4. Print the following pattern using nested `for` loops (without hard-coding any row):
```
* * * *
*     *
*     *
* * * *
```

5. Print the following right-triangle number pattern using nested `for` loops (without hard-coding any row):
```
#
$ $
# # #
$ $ $ $
# # # # #
$ $ $ $ $ $
```

6. Print the following right-triangle alphabet pattern using nested `for` loops (without hard-coding any row):
```
A
A B
A B C
A B C D
A B C D E
```

7. Print this hollow right-triangle star pattern using nested loops:
```
*
* *
*   *
*     *
* * * * *
```

8. Print the following reverse right-angle star pattern using nested `for` loops:
```
*****
****
***
**
*
```

9. Print the following reverse right-angle pattern where each row contains the row number repeated, using nested loops:
```
5 5 5 5 5
4 4 4 4
3 3 3
2 2
1
```


10. Print this reverse right-angle number pattern using nested `for` loops:
```
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

11. Print the following reverse right-angle pattern of consecutive numbers using nested loops:
```
15 14 13 12 11
10  9  8  7
 6  5  4
 3  2
 1
```

12. Print this reverse right-angle hollow star pattern (only the borders should have stars) using nested `for` loops:
```
* * * * *
*     *
*   *
* *
*
```

13. Using nested `for` loops, print a 5×5 square of stars (`*`) but skip printing a star whenever the row number equals the column number (i.e., leave the main diagonal empty).

14. Write nested `for` loops that print the multiplication table of numbers from 1 to 5, but only show the products that are even. (Each table should start on a new line.)

15. Write a program to print a symmetric number palindrome pyramid on each row.

```
    1
  1 2 1
1 2 3 2 1
```

// ============================================================================================================================

Answers=>>

q1.
let n = 1;

for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + n + " ";
        n++;
    }
    console.log(row);
}
q2.

let n=1;
for (let i=1;i<=4;i++){
    let bag="";
    for (let j=1;j<=i;j++){
        bag=bag+i+" "
        
    }
    console.log(bag)
}
q3.
let n = 1;

for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + n + " ";
        n++;
    }
    console.log(row);
}
q4.
let i=1;
for (let i=1;i<=4;i++){
    let bag="";
    for (let j=1;j<=4;j++){
        if (i==1||i==4||j==1||j==4){
            bag=bag+"*"+" ";
        }
        else{
            bag=bag+" "+" ";
        }
    }
    console.log(bag)
}
q5.
let i=1;
for (let i=1;i<=6;i++){
    let bag="";
    for (let j=1;j<=i;j++){
        if (i%2==0){
            bag=bag+"$"+" "
        }else{
            bag=bag+"#"+" "
        }
    }
    console.log(bag)
}
q6.
let i=1;
s="ABCDE"
for (let i=1;i<=5;i++){
    let bag="";
    for (let j=0;j<i;j++){
        bag=bag+s[j]+" ";
    }
    console.log(bag)
}


Q7

let i=1;
for (let i=1;i<=5;i++){
    let bag="";
    for (let j=1;j<=5;j++){
        if (i==5 || j==1 || i==j ){
            bag=bag+"*"+" ";
        }else{
            bag=bag+" "+" ";
        }
        
    }
    console.log(bag)
}

Q8

for (let i=1;i<=5;i++){
    let bag="";
    for (let j=5;j>=i;j--){
        bag=bag+"*"+" ";
    }
    console.log(bag)
}
q9
for (let i=5;i>=1;i--){
    let bag="";
    for (let j=1;j<=i;j++){
        bag=bag+i+" ";
    }
    console.log(bag)
}
q10

for (let i=5;i>=1;i--){
    let bag="";
    for (let j=1;j<=i;j++){
        bag=bag+j+" ";
    }
    console.log(bag)
}
q11.
n=15;
for (let i=5;i>=1;i--){
    let bag="";
    for (let j=1;j<=i;j++){
        bag=bag+n+" ";
        n=n-1
    }
    console.log(bag)
}
q12.

for (let i=5;i>=1;i--){
    let bag="";
    for (let j=1;j<=i;j++){
       if (i==5 || j==1 || i==j){
        bag=bag+"*"+" "
       }else{
        bag=bag+" "+" "
       }
    }
    console.log(bag)
}
q13.

for (let i=1;i<=5;i++){
    let bag="";
    for (let j=1;j<=5;j++){
        if (i==j){
            bag=bag+" "+" ";
        }else{
            bag=bag+"*"+" ";
        }
    }
    console.log(bag)
}
Q14.
for (let i=1;i<=5;i++){
    let bag="";
    for (let j=1;j<=10;j++){
        if ((i*j)%2==0){
            bag=bag+(i*j)+" "
        }
    }
    console.log(bag)
}
Q15
let i = 1;

while (i <= 3) {
    let row = "";
    let j = 1;

    while (j <= 3 - i) {
        row = row + "  ";
        j++;
    }

    j = 1;
    while (j <= i) {
        row = row + j + " ";
        j++;
    }

    j = i - 1;
    while (j >= 1) {
        row = row + j + " ";
        j--;
    }

    console.log(row);
    i++;
}

// ==============================================================================================================================================================

## Part E] While Loop

### Q1. Print Numbers
Write a `while` loop to print numbers from 1 to 10.

### Q2. Sum of Natural Numbers
Write a `while` loop to calculate the sum of the first 10 natural numbers.

### Q3. Multiplication Table
Write a `while` loop to print the multiplication table of a given number from 1 to 10.

**Example:**
Input: 5

Output:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50

### Q4. Count the Digits
Write a `while` loop to count the total number of digits in a given positive integer.

**Example:**
Input: 58372
Output: 5

### Q5. Reverse a Number
Write a `while` loop to reverse the digits of a given positive integer.

**Example:**
Input: 12345
Output: 54321

### Q6. Sum of Digits
Write a `while` loop to calculate the sum of all digits of a given number.

**Example:**
Input: 4729
Output: 22

### Q7. Print Numbers with Conditions
Write a `while` loop to print all numbers between 1 and 100 that are divisible by both 3 and 5 but not by 7.

### Q8. Calculate Factorial
Write a `while` loop to calculate the factorial of a given non-negative integer.

**Example:**
Input: 5
Output: 120

### Q9. Check a Palindrome Number
Write a `while` loop to check whether a given number is a palindrome without converting it into a string.

**Example:**
Input: 121
Output: Palindrome number

### Q10. Convert Decimal to Binary
Write a `while` loop to convert a positive decimal integer into its binary representation without using built-in methods such as `toString(2)`.

**Example:**
Input: 13
Output: 1101

---

// ==========================================================================================================================================================

q1.
let i=1;
while (i<=10){
    console.log(i)
    i++;
}
q2.
let i=1;
sum=0;
while (i<=10){
    sum=sum+i
    i++;
}
console.log(sum)
q3.
let i=1;
n=5;
while (i<=10){
    console.log(`${n}*${i}=${n*i}`)
    i++;
}
q4.
n=58372;
count=0;

while (n>0){
    
    count=count+1;
    n=Math.floor(n/10);
    
}
console.log(count)

q5.
n=58372;
reverse=0;

while (n>0){
    digit=n%10;
    reverse=reverse*10+digit;
    n=Math.floor(n/10);
    
}
console.log(reverse)
q6.
n=4729;
sum=0;

while (n>0){
    digit=n%10;
    sum=sum+digit;
    n=Math.floor(n/10);
    
}
console.log(sum)
q7.
i=1;
while (i<=100){
    if (i%3==0 && i%5==0 && i%7!=0){
     console.log(i)   
    }
    i++
    

}
q8.
i=1;
fact=1;
n=5

while (i<=n){
    fact=fact*i
    i++
}
console.log(fact)

q9.
n=121;
y=n;
reverse=0;
while (n>0){
    digit=n%10;
    reverse=reverse*10+digit
    n=Math.floor(n/10)
}
if (reverse==y){
    console.log("palindrome")
}else{
    console.log("non-palindrome")
}
q10
n=13;

binary=""
while (n>0){
    r=n%2;
    binary=r+binary;
    n=Math.floor(n/2);

}
console.log(binary)

// ================================================================================
# Part F]: Do-While Loop

### Q1. Print Numbers in Reverse
Write a `do-while` loop to print numbers from 10 down to 1.

### Q2. Print Even Numbers
Write a `do-while` loop to print all even numbers between 1 and 20.

### Q3. Sum of Natural Numbers
Write a `do-while` loop to calculate the sum of the first `n` natural numbers.

**Example:**
Input: 5
Output: 15

### Q4. Product of Digits
Write a `do-while` loop to calculate the product of all digits of a given positive integer.

**Example:**
Input: 234
Output: 24

### Q5. Find the First Digit
Write a `do-while` loop to find the leftmost digit of a given positive integer.

**Example:**
Input: 58372
Output: 5

### Q6. Calculate a Power
Write a `do-while` loop to calculate the power of a number without using `Math.pow()` or the exponentiation operator `**`.

**Example:**
Input: Base = 3, Exponent = 4
Output: 81

### Q7. Print Multiples with Conditions
Write a `do-while` loop to print all numbers between 1 and 100 that are divisible by 4 but not by 8.

### Q8. Check a Palindrome Number
Write a `do-while` loop to check whether a given positive integer is a palindrome without converting it into a string.

**Example:**
Input: 1221
Output: Palindrome number

### Q9. Find the Greatest Common Divisor (GCD)
Write a `do-while` loop to find the greatest common divisor of two positive integers.

**Example:**
Input: 48, 18
Output: 6

### Q10. Convert Decimal to Binary
Write a `do-while` loop to convert a non-negative decimal integer into binary without using built-in conversion methods.

**Example:**
Input: 13
Output: 1101

**Challenge:** Handle the input `0` correctly as well.

// =====================================================================================

Answers:=
q1
let i = 10;

do {
    console.log(i);
    i--;
} while (i >= 1);
q2.
n=20;
i=1;
do {
    if (i%2==0){
        console.log(i)
    }
    
    i++
} while (i<=20)
q3.
let n = 5;
let i = 1;
let sum = 0;

do {
    sum = sum + i;
    i++;
} while (i <= n);

console.log(sum);
q4.
let n = 234;
let product = 1;

do {
    let digit = n % 10;
    product = product * digit;
    n = Math.floor(n / 10);
} while (n > 0);

console.log(product);
q5.
n=58372;
do{
    digit=n%10;
    n=Math.floor(n/10);
} while (n>0)
console.log(digit)
q6.
num=4;
power=3;
result=1
i=1;
do{
    result=result*num
    i++
} while (i<=power)
console.log(result)
q7.
let i = 1;

do {
    if (i % 4 == 0 && i % 8 != 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);
q8.
let n = 1221;
let temp = n;
let reverse = 0;

do {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
} while (n > 0);

if (temp == reverse) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}
q9.
let a = 48;
let b = 18;
let i = 1;
let gcd = 1;

do {
    if (a % i == 0 && b % i == 0) {
        gcd = i;
    }
    i++;
} while (i <= a && i <= b);

console.log(gcd);
q10.
let n = 13;
let binary = "";
let r;

do {
    r = n % 2;
    binary = r + binary;
    n = Math.floor(n / 2);
} while (n > 0);

console.log(binary);
