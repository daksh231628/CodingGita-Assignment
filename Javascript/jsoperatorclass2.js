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
C] Comparison Operators


1. Loose Equality ==
1. Check whether the string "25" is loosely equal to the number 25.
"25" == 25 -> true

2. Check if 0 == false returns true or false.
0 == false -> true

3. Predict the output: console.log(10 == "10"); console.log(null == undefined);
Output: true, true

4. Predict the output: console.log("" == 0); console.log([] == false);
Output: true, true

5. Why does NaN == NaN return false?
NaN is never equal to anything, not even itself, by IEEE 754 standards.


2. Loose Inequality !=
1. Check whether "18" != 18 returns true or false.
"18" != 18 -> false

2. A password is stored as "1234". User enters 1234 (number). Will != return true?
false (they are loosely equal, so inequality is false)

3. Predict the output: console.log(5 != "5"); console.log(0 != false);
Output: false, false

4. Predict the output: console.log(null != undefined); console.log("" != 0);
Output: false, false

5. What does NaN != NaN return? Explain.
true (NaN is not equal to NaN)


3. Strict Equality ===
1. Check whether "25" === 25 returns true or false. Explain why.
false (Strict equality checks data types. "25" is a string, 25 is a number).

2. Check if 0 === false and null === undefined.
0 === false -> false, null === undefined -> false

3. Predict the output: console.log(10 === "10"); console.log(true === 1);
Output: false, false

4. Predict the output: console.log("" === 0); console.log([] === false);
Output: false, false

5. Why is === preferred over == in most real-world code?
It prevents unexpected, silent type coercion bugs.


4. Strict Inequality !==
1. Check whether "18" !== 18 returns true or false.
true (Since their types are different, they are strictly not equal).

2. Check if 0 !== false and null !== undefined.
0 !== false -> true, null !== undefined -> true

3. Predict the output: console.log(5 !== "5"); console.log(true !== 1);
Output: true, true

4. Predict the output: console.log("" !== 0); console.log(NaN !== NaN);
Output: true, true

5. Write a condition that checks if a variable input is strictly not equal to the string "0".
input !== "0"


// Part=D (relational operator)
// 5. Greater Than>
1.A student’s marks are 78. The passing marks are 40. Check whether the student has scored more than the passing marks.
  Ans. 
  let marks=78;
  let passingmarks=40;
  console.log(marks>passingmarks)

  2.Temperature today is 35°C and yesterday it was 28°C. Check if today is hotter.
    Ans.
     let todaytemp=35;
    let yesterdaytemp=28;
    console.log(todaytemp>yesterdaytemp)
        
3.Predict the output:
console.log(15 > 10);
console.log(10 > 15);
console.log(10 > 10);
Ans.
  1. TRUE
  2  False
  3. False

4. Predict the output:
  console.log("20" > 15);
  console.log("5" > "10");
  console.log("abc" > 10);
Ans. 
  1. True
  2. True
  3. False

5.What is the result of null < 0 and undefined < 0? Explain.
  Ans.the resutis 
       False
       False
6.A shop has 120 items in stock. A customer wants to buy 85 items. Write a condition using > to check if stock is sufficient.
  Ans.let stock=120;
      let customerwants=85;
      console.log(stock>customerwants)
      TRUE
7.Predict and explain:
  console.log(true > false);
  console.log("10" > "2");
  console.log(NaN > 5);
Ans. True
     False
     False

// 6.LESS THAN(<) 
1.A box can hold maximum 50 kg. Current weight is 42 kg. Check if more items can still be added.
  Ans.let maxweight=50
      let currentweight=42
      console.log(currentweight<maxweight)
      TRUE
2.Age of a person is 16. Minimum age required is 18. Check if the person is underage.
  Ans.let age = 16;
      let minimumAge = 18;
      console.log(age<minimumAge)
      TRUE
3.Predict the output:
  console.log("8" < 10);
  console.log("20" < "3");
  console.log("hello" < 5);
Ans. True
     True
     False
4.Predict the output:
  console.log("8" < 10);
  console.log("20" < "3");
  console.log("hello" < 5);
Ans. True
     True
     False
6.A tank capacity is 500 litres. Current water level is 375 litres. Write a condition using < to check if it is not full.
  Ans. let capacity=500;
       let currentlevel=375;
       console.log(currentlevel<capacity)
        =>TRUE
7.Predict and explain:
  console.log(false < true);
  console.log("5" < "15");
  console.log(NaN < 10);
Ans.True
    False
    False

// 7.Greater Than or Equal To >=
  1.Minimum marks required for distinction is 75. A student scored 75. Check if the student gets distinction.
  Ans.let minmarks=75
      let scored=75
      console.log(minmarks>= scored)
      TRUE
   2.Ticket price is ₹300. A person has ₹300. Check if they can buy the ticket.
  Ans.let ticketprice=300
      let personhas=300
      console.log(ticketprice>=personhas)
      TRUE
  3.Predict the output:
    console.log(25 >= 25);
    console.log(30 >= 25);
    console.log(20 >= 25);
  Ans.TRUE
      TRUE
      FALSE
  4.Predict the output:
    console.log("25" >= 25);
    console.log("10" >= "2");
    console.log(null >= 0);
  Ans. TRUE
       FALSE
       TRUE
  5.What is the result of undefined >= 0? Explain.
    Ans.FALSE
  6.A lift can carry maximum 8 people. Currently 8 people are inside. Write a condition using >= to check if the lift is full or overloaded.
    let max=8
    let inside=8
    console.log(max>=inside)
    TRUE
  7.Predict and explain:
    console.log(true >= 1);
    console.log("" >= 0);
    console.log(NaN >= NaN);
  Ans.TRUE
      TRUE
      FALSE
// 8.GREATER THAN OR EQUAL TO <=
  1.Maximum speed limit is 60 km/h. A vehicle is travelling at 60 km/h. Check if it is within the limit.
    Ans. let maxspeed=60
         let carspeed=60
         console.log(carspeed<=maxspeed)
         TRUE
  2.A student needs at least 40 marks to pass. He scored 39. Check if he has failed.
    Ans.let lestmarks=40;
        let scoredmarks=39;
      console.log(scoremarks<=leastmarks);
        TRUE
  3.Predict the output:
    console.log(15 <= 20);
    console.log(20 <= 15);
    console.log(15 <= 15);
  Ans.TRUE
      FALSE
      TRUE
  4.Predict the output:
    console.log("15" <= 20);
    console.log("30" <= "5");
    console.log(null <= 0);
  Ans.TRUE
      TRUE
      TRUE
  5.What is the result of undefined <= 0? Explain.
    Ans. FALSE
  6.A bag can hold maximum 10 books. Currently it has 10 books. Write a condition using <= to check if more books can be added.
    Ans. let baghold=10;
         let currentlyhold=10;
         console.log(currentlyhold<=baghold)
  7.Predict and explain:
    console.log(false <= 0);
    console.log("" <= 0);
    console.log(NaN <= 5);
  Ans.TRUE
      TRUE
      FALSE
// 9. MIXED PRACTICE(>,<,>+,<=)
  1.Write expressions to check:
    1.Whether age 18 is greater than or equal to voting age 18.
      Ans.console.log(18>=18)
    2.Whether temperature 32 is less than 35.
      Ans.console.log(35>=32)
    3.Whether score 90 is greater than 85.
      Ans.console.log(90>=85)
  2.Predict the outputs:
    console.log(10 > 5 && 5 < 10);
    console.log("10" >= 10);
    console.log(null <= undefined);
    console.log("5" < "10" && 5 > 2);
      Ans.TRUE
          TRUE
          FALSE
          FALSE
  3.A product costs ₹499. A customer has ₹500. Write conditions using >= and < to decide if the customer can buy it and if any change will be left.
    Ans.let originalcost=499
        let customerhas=500
        console.log(customerhas>=originalcost)
        TRUE
  4.Explain why "10" > "2" is false but 10 > 2 is true.
    Ans. "10">"2"=>Because thease are in string it was calculated by ASCII value.
          10>2=>Because they calculated by the number.

// Part E]: Increment / Decrement Operators (++ / --)
    PartA:
        1. Counter starts at 5, increment by 1
            Ans.let counter = 5;
                counter++;
                console.log("Counter:", counter);
                Counter:6
        
        2. Player has 3 lives, decrement by 1
            Ans.let lives = 3;
                lives--;
                console.log("Lives:", lives);
                Lives:2
        
        3. Score = 10, increase using ++
            Ans.let score = 10;
                score++;
                console.log("Score:", score);
                Scores:11
        
        4. Items = 8, decrease using --
            Ans.let items = 8;
              items--;
              console.log("Items:", items);
              Items:7
        
        5. Count = 0, increment twice
            Ans.let count = 0;
                count++;
                count++;
                console.log("Final Count:", count);
                Final Count:2
    Part B:
        6.Start with x = 5.
          Create y = x++
          Print both x and y.
          Explain why the values are different.
            Ans.let x = 5;
                let y = x++;
                console.log("x:", x); // 6
                console.log("y:", y); // 5
        7.Start with a = 5.
          Create b = ++a
          Print both a and b.
          Explain the difference from the previous question.
            Ans.let a = 5;
                let b = ++a;
                console.log("a:", a); // 6
                console.log("b:", b); // 6
        8.Start with lives = 3.
          Use post-decrement (lives--) and store the result in previousLives.
          Print both variables.
            Ans.let lives = 3;
                let previousLives = lives--;
                console.log("lives:", lives);                 // 2
                console.log("previousLives:", previousLives); // 3
       9.Start with attempts = 0.
         Use pre-increment (++attempts) and store the result in currentAttempts.
         Print both variables.
           Ans.let attempts = 0;
                let currentAttempts = ++attempts;
                console.log("attempts:", attempts);               // 1
                console.log("currentAttempts:", currentAttempts); // 1
       10.Start with points = 100.
          Increase it using ++
          Then decrease it using --
          Print the final value.
            Ans.let points = 100;
                ++points; // points becomes 101
                --points; // points becomes 100
                console.log("final points:", points); // 100
   Part C:
      11.Predict the output:
         let x = 10;
         let y = x++;
         let z = ++x;
         console.log(x, y, z);
          Ans.12,10,12
      12.Predict the output:
         let a = 5;
         let b = a-- + ++a;
         console.log(a, b);
          Ans.5,10

      13.Predict the output:
         let m = 7;
         let n = --m + m++;
         console.log(m, n);
          Ans.7,12
         
      14.Predict the output:
         let p = 3;
         let q = p++ + ++p + p;
         console.log(p, q);
          Ans.5,13
      15.Predict the output:
         let val = 0;
         val = val++ + ++val;
         console.log(val);
          Ans.2

// Part - F // logical Operators  

// 1. Logical and &&

// Q1

let username = "admin"
let password = 1234
console.log(username=="admin"&&password==1234)

// Q2

let isloggedIn = true
let hasPermission = true
console.log(loggedIn&&hasPermission)

// Q3 

let instock = true
let price = 800
console.log(instock&&price)

// Q4

let marks = 75
let attendence = 80 
console.log(marks>65&&attendence>70)

// Q5 

let isWeekend = true
let isHoliday = false
console.log(isWeekend&&isHoliday)

// Q6 

let a = 0;
let b = 10;
let result = a && b;
console.log(result); // 0 

// Q7

let x = 5;
let y = 10;
let result = (x > 3 && y) || 0;
console.log(result); // 10

// Q8

let p = "Hello";
let q = "";
let r = "World";
let result = p && q && r;
console.log(result); // ""

// Q9

let val = 5;
let condition = val && (val = 0);
console.log(condition);  // 0
console.log(val);  // 0 

// Q10 

let x = 10;
let y = 20;
let result = (x && y) && (x > y);
console.log(result); // false

// 2. Logical OR ||

// Q1

let passCorrect = true
let otpValid = false
console.log(passCorrect||otpValid)

// Q2

let isMember = false
let hasCoupon = true
console.log(isMember||hasCoupon)

// Q3

let age = 16
let height = 155
console.log(age>18||height>150)

// Q4

let emailGiven = true
let phoneGiven = false
console.log(emailGiven||phoneGiven)

// Q5 

let score = 900 
let timeBonus = true
console.log(score>1000||timeBonus)

// Q6 

let a = 0;
let b = false;
let c = "";
let d = null;
let e = 42;
let result = a || b || c || d || e;
console.log(result); // 42

// Q7 

let x = "Hello" || 0;
let y = 0 || "Hi";
console.log(x, y); // Hello HI

// Q8 

let a = 10;
let b = 20;
let result = (a < 5) || (b > 15);
console.log(result); // true

// Q9 

let val = 5;
let condition = val || (val = 0);
console.log(condition); // 5
console.log(val); // 5

// Q10 

let x = "" || 0 || false || null || undefined || "OK";
console.log(x); // Ok


   ### 3. Logical NOT `!`

Write a JavaScript program for each:

1. A user is not banned (`isBanned = false`). Check if they can login by negating `isBanned` using `!`.  
2. A task is not completed (`isCompleted = false`). Check if it is still pending using `!`.  
3. A light is on (`isOn = true`). Check if it is off using `!`.  
4. A subscription is not active (`isActive = false`). Check if the user cannot access premium content using `!`.  
5. A file is not read‑only (`isReadOnly = false`). Check if it can be edited using `!`.

   // ==========================================================================================================

   Q1.
   let isBanned = false;

console.log(!isBanned);  ===>. true

Q2.
   let isCompleted = false;
console.log(!isCompleted);
q3.
   
let isOn = true;

console.log(!isOn);

q4.
   let isActive = false;

console.log(!isActive);

Q5.
   let isReadOnly = false;

console.log(!isReadOnly);

// ==============================================================================================================
### Additional Questions (Logical NOT `!`)

6. Predict the output:
   ```js
   let a = 0;
   let b = 1;
   console.log(!a, !b);   =======>>>>>> true false
   ```

7. Predict the output:
   ```js
   let x = "Hello";
   let y = "";
   console.log(!x, !y);  ============>>>>>>>>> false true
   ```

8. Predict the output:
   ```js
   let val = 5;
   let result = !val;
   console.log(result); ==========>>>>>>>>>false
   ```

9. Predict the output:
   ```js
   let a = 10;
   let b = 20;
   let result = !(a && b);
   console.log(result);  ===========>>>>>>>>>false
   ```

10. Predict the output:
    ```js
    let x = 0;
    let y = 1;
    let result = !(x || y);
    console.log(result);   ==========>>>>>>false
    ```

***
// ===========================================================================================================

       ## Part G]: `typeof` Operator
----
### Part a: 

1. Declare a variable `name = "Rahul"` and print its type using `typeof`.  
2. Declare a variable `age = 25` and print its type.  
3. Declare a variable `isStudent = true` and print its type.  
4. Declare a variable `city` (without assigning a value) and print its type.  
5. Print the type of the value `null`.

  // Answer================================================================================================
q1.
   let name="Rahul";
console.log(typeof(name)); // string
// Q2
let age = 25;
console.log(typeof age); // number

// Q3
let isStudent = true;
console.log(typeof isStudent); // boolean

// Q4
let city;
console.log(typeof city); // undefined

// Q5
console.log(typeof null); // object
// ===================================================================================================

### Part b:

6. Predict the output:
   ```js
   console.log(typeof 42);  ====>>>. number
   console.log(typeof "Hello");   =============>>>> string
   console.log(typeof true);============>>>>>>> boolean
   console.log(typeof undefined); =======>>> undefined
   ```

7. Predict the output:
   ```js
   console.log(typeof null); =======>>>> object
   console.log(typeof {});  =====>>> object
   console.log(typeof []);  ====>>> object
   ```

8. Predict the output:
   ```js
   console.log(typeof NaN);  =====>>>> number
   console.log(typeof Infinity); ===>>> number
   console.log(typeof function(){});===>>> function
   ```

9. Create three variables:
   - `price = 99.99`  ====>>>> number
   - `message = "Welcome"`===>>> string
   - `isActive = false`  ===>>> boolean
   Print the type of each variable with a clear message.

10. Predict the output:
    ```js
    let value = null; 
    console.log(typeof value);===>>>> object
    console.log(typeof value === "object"); truee
    ```
// ===========================================================================================================

### Part c:

11. Predict the output:
    ```js
    console.log(typeof typeof 100);===>>> string
    console.log(typeof typeof "Hi");====>>> string
    console.log(typeof typeof true);====>>> string
    ```

12. Predict the output:
    ```js
    let a = 10;
    let b = "10";
    console.log(typeof a === typeof b);   // false
    console.log(typeof a == typeof b);     // true
    ```

13. Predict the output:
    ```js
    console.log(typeof null === "object");====>>> true
    console.log(typeof [] === "object");===>>> true
    console.log(typeof {} === "object");====>>>> true
    ```

14. Predict the output:
    ```js
    let x;
    console.log(typeof x);  // undefined
    x = null;
    console.log(typeof x);  ===>> object
    x = 0;
    console.log(typeof x);===>> number
    ```

15. Predict the output:
    ```js
    console.log(typeof NaN === "number");  ===>> false
    console.log(typeof Infinity === "number");===>>> true
    console.log(typeof (1 / 0));===>>> number
    ```

---
// =====================================================================================
  ## Part H]: Type Coercion

### Part a:

1. Convert the string `"25"` into a number using `Number()` and add `10` to it. Print the result.  
2. Convert the number `100` into a string using `String()` and join it with `" rupees"`. Print the result.  
3. Convert the value `0` into a boolean using `Boolean()` and print it.  
4. Convert the value `"Hello"` into a boolean and print it.  
5. Use the unary `+` operator to convert `"50"` into a number and multiply it by `2`
// =====================================================================================================

let string="25";
let y=Number(string);
console.log(y+10)
// q2.
   let number=100;
let y=String(number);
console.log(y+"rupees")
// Q3
let c = Boolean(0);
console.log(c); // false

// Q4
let d = Boolean("Hello");
console.log(d); // true

// Q5
let e = +"50";
console.log(e * 2); // 100\

// ============================================================================================

### Part b:

6. Predict the output:
   ```js
   console.log("10" - 5);  //5
   console.log("10" + 5);   //105
   console.log("10" * 2); //20
   console.log("10" / 2);  //5
   ```

7. Predict the output:
   ```js
   console.log("5" - "2");  // 3
   console.log("5" + "2");   //52
   console.log("5" * "2");   //10
   console.log("5" / "2");   //2.5
   ```

8. Predict the output:
   ```js
   console.log(Number("123"));  // 123
   console.log(Number("123abc"));  //NaN
   console.log(Number(true));  // 1
   console.log(Number(false));  //0
   console.log(Number(null));   // 0
   console.log(Number(undefined)); // NaN
   ```

9. Predict the output:
   ```js
   console.log(Boolean(0));  // false
   console.log(Boolean(""));  //false
   console.log(Boolean("0")); // true
   console.log(Boolean([])); //true
   console.log(Boolean({})); //true
   console.log(Boolean(null)); // false
   ```

10. Predict the output:
    ```js
    console.log(String(100));   // 100
    console.log(String(true)); // true
    console.log(String(null)); // null
    console.log(String(undefined)); //undefined
    console.log(100 + "");  // 100
    ```

// =======================================================================================================

### Part c:

11. Predict the output:
    ```js
    console.log("5" + 3 + 2);  //532
    console.log(5 + 3 + "2"); // 82
    console.log("5" - 3 + 2);  // 4
    console.log(5 - "3" + "2"); //22
    ```

12. Predict the output:
    ```js
    console.log(true + true);  // 2
    console.log(true + false);   // 1
    console.log(true + "false");  // truefalse
    console.log(false + "true");   //falsetrue
    ```

13. Predict the output:
    ```js
    console.log(null + 5);   // 5
    console.log(undefined + 5);  // NaN
    console.log(null + "5");   // null5
    console.log(undefined + "5");  // undefined5
    ```

14. Predict the output:
    ```js
    console.log([] + []); // empty
    console.log([] + {});  [object object]
    console.log({} + []);  [object object]
    console.log({} + {});  [object object][object object]
    ```

15. Predict the output:
    ```js
    let a = "10";
    let b = 5;
    let c = a + b;
    let d = a - b;
    let e = +a + b;
    console.log(c, typeof c);  // 105 string
    console.log(d, typeof d);   // 5 number
    // console.log(e, typeof e);   // 15 number                                                   ********
    ```

16. Predict the output:
    ```js
    console.log(!!"Hello");  // true
    console.log(!!"");     //false
    console.log(!!0);    // false
    console.log(!!1);  // true
    console.log(!!null);   // false
    console.log(!!undefined);   // false
    ```

17. Predict the output:
    ```js
    console.log(Number(""));   // 0
    console.log(Number(" "));  //0
    console.log(Number("0"));  //0
    console.log(Number("  25  "));  // 25
    console.log(Number("25px"));  //NaN
    ```

18. Predict the output:
    ```js
    let val1 = "5";  // 
    let val2 = 2;
    console.log(val1 + val2);  // 52
    console.log(+val1 + val2);  // 7
    console.log(val1 - val2);  // 3
    console.log(val1 * val2);  //10
    console.log(val1 / val2);  //2.5
    ```

---

   // =====================================================================================================

   # Bonus Mixed Practice Questions:

19. Predict the output:
    ```js
    let count = 5;
    console.log(typeof count++);   number
    console.log(count);     // 6
    console.log(typeof ++count);   // number
    console.log(count); 7
    ```

20. Predict the output:
    ```js
    let x = "10";   // 
    let y = ++x;
    console.log(x, y, typeof x, typeof y);   // 11,11. number, number
    ```

21. Predict the output:
    ```js
    let a = "5";   
    let b = a++;
    console.log(a, b, typeof a, typeof b);   // 6 5 number number
    ```

22. Predict the output:
    ```js
    console.log(typeof (1 + "2"));  // 3
    console.log(typeof (1 - "2"));  // -1
    console.log(typeof (1 * "2"));  // 2
    console.log(typeof (1 / "2"));  //0.5
    ```

23. Predict the output:
    ```js
    let val = null;
    console.log(typeof val);   // object
    console.log(val + 1);      // 1
    console.log(val - 1);    // -1
    console.log(val * 1);   // 0
    console.log(Boolean(val));   // false
    ```

---

   // =========================================================================================

   
