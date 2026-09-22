# Assignment 3 - Operators, Strings, Input & Output


# Q1. Predict the Output

a = 15
b = 20

print(a < b)
print(a > b)
print(a == b)
print(a != b)
print(a <= b)
print(a >= b)


# Q2. Compare Expressions

x = 10
y = 10

print(x == y)
print(x != y)
print(x < y)
print(x <= y)
print(x >= y)


# Q3. Comparison with Arithmetic

a = 10
b = 5

print(a + b == 15)
print(a * b > 40)
print(a - b != 5)
print(a // b == 2)


# Q4. String Comparison

print("Python" == "Python")
print("Python" == "python")
print("Hello" != "hello")


# Q5. Trace the Value

x = 20

x += 10
x -= 5
x *= 2
x //= 5

print(x)


# Q6. Assignment Operator Practice

marks = 50

marks += 10
marks -= 5
marks *= 2

print(marks)


# Q7. Basic Membership

text = "Python Programming"

print("Python" in text)
print("Java" in text)
print("Python" not in text)


# Q8. Character Membership

word = "computer"

print("p" in word)
print("x" in word)
print("c" not in word)


# Q9. Case Sensitivity in Membership

text = "Python"

print("P" in text)
print("p" in text)
print("Python" in text)
print("python" in text)


# Q10. Membership with User Input

text = input("Enter a word or sentence: ")

print("a" in text)


# Q11. Email Symbol Check

email = input("Enter email: ")

print("@" in email)


# Q12. Find Character Codes

print(ord("A"))
print(ord("a"))
print(ord("Z"))
print(ord("z"))
print(ord("0"))
print(ord("9"))
print(ord("@"))


# Q13. Convert Codes to Characters

print(chr(65))
print(chr(66))
print(chr(97))
print(chr(98))
print(chr(48))
print(chr(57))
print(chr(64))


# Q14. Uppercase and Lowercase

print(ord("A"))
print(ord("a"))
print(ord("B"))
print(ord("b"))

print(ord("a") > ord("A"))
print(ord("a") - ord("A"))
print(ord("b") - ord("B"))


# Q15. Character Code Program

char = input("Enter a character: ")

print(ord(char))


# Q16. Next Character

char = input("Enter a letter: ")

print(chr(ord(char) + 1))


# Q17. Character Comparison and Unicode

print("A" < "B")
print("a" < "b")
print("A" < "a")
print("0" < "9")

print(ord("A"))
print(ord("B"))
print(ord("a"))
print(ord("b"))
print(ord("0"))
print(ord("9"))


# Q18. Unicode Character Challenge

print(chr(9731))
print(chr(9829))
print(chr(8377))

print(ord("☃"))
print(ord("♥"))
print(ord("₹"))


# Q19. Basic Indexing

text = "PYTHON"

print(text[0])
print(text[1])
print(text[-1])
print(text[-2])


# Q20. Positive and Negative Indexing

text = "COMPUTER"

print(text[0])
print(text[3])
print(text[-1])
print(text[-3])


# Q21. Predict the Output

text = "PYTHON"

print(text[0])
print(text[2])
print(text[-1])
print(text[-2])


# Q22. Indexing a User Input

word = input("Enter a word: ")

print(word[0])
print(word[-1])


# Q23. Think Carefully About Indexing

word = "PROGRAM"

print(word[0])
print(word[2])
print(word[-1])
print(word[-4])


# Q24. Basic Slicing

text = "PYTHON"

print(text[0:3])
print(text[2:5])
print(text[1:6])


# Q25. Start and Stop

text = "PROGRAMMING"

print(text[:4])
print(text[4:])
print(text[:])


# Q26. Negative Slicing

text = "COMPUTER"

print(text[-5:])
print(text[:-3])
print(text[-6:-2])


# Q27. Step in Slicing

text = "PYTHON"

print(text[::2])
print(text[1::2])
print(text[::-1])


# Q28. Reverse a String

text = input("Enter a string: ")

print(text[::-1])


# Q29. Alternate Characters

text = input("Enter a string: ")

print(text[::2])


# Q30. Extract First and Last Three Characters

text = input("Enter a string: ")

print(text[:3])
print(text[-3:])


# Q31. Slicing Challenge

text = "ABCDEFGHIJ"

print(text[2:8:2])
print(text[8:2:-2])
print(text[::-2])


# Q32. Slice Without Counting from the Beginning

text = "BTECH-CSE-2026"

print(text[:5])
print(text[6:9])
print(text[-4:])


# Q33. Basic split()

text = "Python is easy"

print(text.split())


# Q34. Custom Separator

data = "apple,banana,mango"

print(data.split(","))


# Q35. Separator Not Present

text = "Python is easy"

print(text.split(","))


# Q36. Split a Full Name

first, middle, last = input().split()

print(first)
print(middle)
print(last)


# Q37. Multiple Inputs Using split()

first_name, last_name = input().split()

print(f"First Name: {first_name}")
print(f"Last Name: {last_name}")


# Q38. Three Numeric Inputs

a, b, c = map(int, input().split())

print(a + b + c)


# Q39. Student Record

name, age, course, city = input().split(",")

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Course: {course}")
print(f"City: {city}")


# Q40. Email Analyzer

email = input()

username, domain = email.split("@")

print(f"Username: {username}")
print(f"Domain: {domain}")


# Q41. Sentence Analyzer

sentence = input()

words = sentence.split()

print(f"First word: {words[0]}")
print(f"Last word: {words[-1]}")
print(f"Total number of words: {len(words)}")


# Q42. New Line

print("Hello\nWorld")


# Q43. Tab

print("Name:\tRahul")
print("Age:\t20")
print("City:\tAhmedabad")


# Q44. Backslash

print("C:\\Python\\Programs")


# Q45. Single Quote

print("It's Python")


# Q46. Double Quote

print('He said "Hello"')


# Q47. Predict the Output

print("Python\nProgramming")


# Q48. Combined Escape Sequences

print("Student Details\n")
print("Name:\tRahul")
print("Age:\t20")
print("Course:\tB.Tech")


# Q49. sep

print("2026", "09", "09", sep="-")


# Q50. end

print("Hello", end=" ")
print("Python")


# Q51. sep and end

print(10, 20, 30, sep="-", end="\n")
print(40, 50, 60, sep="-")


# Q52. Student Introduction

name = input("Name: ")
age = input("Age: ")
city = input("City: ")
course = input("Course: ")

print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"Course: {course}")


# Q53. Formatted Price

price = float(input("Enter price: "))

print(f"{price:.2f}")


# Q54. String and Integer

age = int(input("Enter age: "))

print("Age after 5 years:", age + 5)


# Q55. Incorrect Quotes

print("It's Python")


# Q56. Incorrect Slicing Syntax

text = "Python"

print(text[1:4])


# Q57. Incorrect split() Separator

a, b = input().split()

print(a)
print(b)


# Q58. String Addition vs Numeric Addition

a, b = map(int, input().split())

print(a + b)


# Q59. Escape Sequence Debugging

print("C:\\new\\test")


# Q60. Student Result Information

name = input("Enter name: ")
m1, m2, m3 = map(int, input().split())

total = m1 + m2 + m3
average = total / 3

print(f"Name: {name}")
print(f"Total: {total}")
print(f"Average: {average:.2f}")


# Q61. Student ID Analyzer

student_id = input()

degree, batch, branch, roll = student_id.split("-")

last_three = student_id[-3:]
roll_number = int(roll)

print(f"Degree: {degree}")
print(f"Batch: {batch}")
print(f"Branch: {branch}")
print(f"Roll Number: {roll_number}")


# Q62. Username Generator

name = input()

words = name.split()

first_name = words[0]
last_name = words[2]

username = first_name.lower() + "." + last_name.lower()

print(username)


# Q63. Sentence Information

sentence = input()

words = sentence.split()

print(f"First word: {words[0]}")
print(f"Last word: {words[-1]}")
print(f"Number of words: {len(words)}")


# Q64. Email Analyzer + Membership

email = input()

print(f"@ Present: {'@' in email}")

username, domain = email.split("@")

print(f"Username: {username}")
print(f"Domain: {domain}")


# Q65. Character Analyzer

char = input()

code = ord(char)

print(f"Character: {char}")
print(f"Code: {code}")
print(f"Previous: {chr(code - 1)}")
print(f"Next: {chr(code + 1)}")


# Q66. Product Bill

product = input("Product: ")
price = float(input("Price: "))
quantity = int(input("Quantity: "))
discount_percentage = float(input("Discount: "))

subtotal = price * quantity
discount = subtotal * discount_percentage / 100
final_total = subtotal - discount

print(f"Product: {product}")
print(f"Price: {price:.2f}")
print(f"Quantity: {quantity}")
print(f"Subtotal: {subtotal:.2f}")
print(f"Discount: {discount:.2f}")
print(f"Final Total: {final_total:.2f}")


# Q67. Date Analyzer

date = input()

day, month, year = date.split("-")

print(f"Day: {day}")
print(f"Month: {month}")
print(f"Year: {year}")

print(date[-4:])


# Q68. String Transformation Challenge

text = input()

words = text.split()

first = words[0]
second = words[1]

print(f"First Word: {first}")
print(f"Second Word: {second}")
print(f"First Word Reversed: {first[::-1]}")
print(f"Second Word Reversed: {second[::-1]}")


# Q69. Final Challenge - Student Code Formatter

student_id = input()

parts = student_id.split("-")

degree = parts[0]
batch = parts[1]
branch = parts[2]
roll = parts[3]

last_three = student_id[-3:]

print(f"Degree: {degree}")
print(f"Batch: {batch}")
print(f"Branch: {branch}")
print(f"Roll: {roll}")
print(f"Code: {degree}/{branch}/{last_three}")


# Q70. Final String + Input/Output Challenge

full_name = input()

words = full_name.split()

first_name = words[0]
last_name = words[-1]

first_upper_part = first_name[:3].upper()
last_lower_part = last_name[1:4].lower()

reversed_name = full_name[::-1]

print(f"Original: {full_name}")
print(f"First Name: {first_name}")
print(f"Last Name: {last_name}")
print(f"First Name (Upper Part): {first_upper_part}")
print(f"Last Name (Lower Part): {last_lower_part}")
print(f"Full Name Reversed: {reversed_name}")
