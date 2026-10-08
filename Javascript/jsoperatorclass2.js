B] Assignment Operators
1. Simple Assignment =
Store a student’s name as "Priya" and marks as 92 using the assignment operator.
Create a variable score and assign it the value 0.
Assign the value 50 to three variables a, b and c using a single chained assignment.
Predict the output:
let x;
x = 100;
console.log(x);
Predict the output:
let p = 15;
let q = p;
q = 30;
console.log(p, q);

Answer:
// B] Assignment Operators
// 1. Simple Assignment =
1
let studentName="Priya";
let marks=92
console.log(studentName)
console.log(marks)

2
let score=0
console.log(score)

3
let a,b,c;
a=b=c=50;
console.log(a,b,c);

4
100

5
15,30


2. Add and Assign +=
A player’s score is 80. He scores 25 more points. Update the score using +=.
A wallet has ₹1500. Cashback of ₹120 is added. Update the balance using +=.
Predict the output:
let count = 10;
count += 5;
console.log(count);
Predict the output:
let msg = "Good";
msg += " Morning";
console.log(msg);
What is the final value after let n = 20; n += "5";? Explain.

Answer:

// 2. Add and Assign +=
1
let score = 80;
score += 25;
console.log(score)

2
let cashback = 1500;
cashback += 120
console.log(cashback)

3
15

4
Good Morning

5
205
because of string concatination

3. Subtract and Assign -=
Health is 100. Player takes 35 damage. Update health using -=.
Stock of 300 items is reduced by 45 after a sale. Update using -=.
Predict the output:
let lives = 5;
lives -= 2;
console.log(lives);
Predict the output:
let num = "40";
num -= 15;
console.log(num);
What is the result of let x = "abc"; x -= 5;? Explain.

Answer:
1.
let health = 100;
health -= 35;
console.log(health);

2.
let stock=300;
stock -= 45;
console.log(stock);

3.
3

4.
25

5.
NaN because abc cannot converted into Number

4. Multiply and Assign *=
Price of an item is ₹500. Apply 18% GST using *= 1.18.
A quantity of 8 is tripled. Update using *=.
Predict the output:
let amount = 200;
amount *= 1.1;
console.log(amount);
Predict the output:
let val = "7";
val *= 3;
console.log(val);
What is the result of let y = "hello"; y *= 2;? Explain.

Answer:
1.
let price = 500;
price *= 1.18;
console.log(price);

2.
let quantity=8;
quantity *= 3;
console.log(quantity);

3.
220.00

4.
21

5.
NaN because hello cannot be converted into number 


5. Divide and Assign /=
Total of 180 chocolates is shared among 6 children. Update using /=.
Distance of 300 km is covered in 5 hours. Find average speed using /=.
Predict the output:
let total = 400;
total /= 8;
console.log(total);
Predict the output:
let num = "100";
num /= 4;
console.log(num);
What is the result of let z = 50; z /= 0;? Explain.

Answer:
1.
let chocolate = 180;
chocolate /= 6;
console.log(chocolate)

2.
let distance = 400;
distance /= 5;
console.log(distance)

3.
50

4.
25

5.
Infinity, because it is devided by 0

6. Modulus and Assign %=
Number 47 is divided by 6. Store only the remainder using %=.
Counter is at 23. Keep only the remainder when divided by 12 using %=.
Predict the output:
let num = 29;
num %= 5;
console.log(num);
Predict the output:
let x = "17";
x %= 3;
console.log(x);
What is the result of let m = 15; m %= 0;? Explain.

Answer:
1.
let number = 47;
number %= 6;
console.log(number)

2.
let counter = 23;
counter %= 12;
console.log(counter)

3.
4

4.
2

5.
remainder by 0 is undefined, JavaScript gives NaN.

7. Exponentiation and Assign **=
Side of a cube is 5. Update it to get the volume using **= 3.
Number 4 needs to be squared. Use **= 2.
Predict the output:
let base = 2;
base **= 5;
console.log(base);
Predict the output:
let n = 4;
n **= 0.5;
console.log(n);
What is the result of let p = 2; p **= -1;? Explain.

Answer:
1.
let side=5;
side **=3;
console.log("Cube",side);

2.
let num = 4;
num **= 2;
console.log(num);

3.
32

4.
2

5.
0.5
