# n=58321
# count=0
# while n>0:
#     digit=n%10
#     count=count+1
#     n=n//10
# print(count)


# Q42

# n=583
# sum=0
# while n>0:
#     digit=n%10
#     sum=sum+digit
#     n=n//10
# print(sum)

# Q43

# n=5830
# reverse=0
# while n>0:
#     digit=n%10
#     reverse=reverse*10+digit
#     n=n//10
# print(reverse)

# Q44
# n=234
# product=1
# while n>0:
#     digit=n%10
#     product=product*digit
#     n=n//10
# print(product) 

# Q45


# N = 58321

# while N > 0:
#     digit = N % 10
#     print(digit)
#     N = N // 10

# Q46

# N = 58321
# last_digit=N%10

# while N > 0:
#     digit = N % 10
#     N = N // 10
# print(last_digit)
# print(digit)

# q47

# n=583204
# count=0
# while n>0:
#     digit=n%10
#     if digit%2==0:
#         count=count+1
#     n=n//10
# print(count)

# q48

# n=583204
# count=0
# while n>0:
#     digit=n%10
#     if digit%2!=0:
#         count=count+1
#     n=n//10
# print(count)

# Q49

# n=583204
# sum=0
# while n>0:
#     digit=n%10
#     if digit%2==0:
#         sum=sum+digit
#     n=n//10
# print(sum)

# Q50

# n=583204
# largest=0

# while n>0:
#     digit=n%10
#     if digit > largest:
#         largest = digit
#     n=n//10
# print(largest)
      

# Q 51

# n=583204
# smallest=9

# while n>0:
#     digit=n%10
#     if digit < smallest:
#         smallest = digit
#     n=n//10
# print(smallest)


# Q52

# n=123
# y=n

# reverse=0
# while n>0:
#     digit=n%10
#     reverse=reverse*10+digit
#     n=n//10
# if reverse==y:
#     print("Palindrome")
# else:
#     print("Not Palindrome")


# Q 53

# n=505250
# d=5
# count=0
# while n>0:
#     digit=n%10
#     if digit==d:
#         count=count+1
#     n=n//10
# print(count)

# Q 54

# n=77777
# y=n%10
# result="yes"
# while n>0:
#     digit=n%10
    
#     if digit!=y:
#         result="no"
#         break
    
#     n=n//10
# print(result)
  
  
# Q 55

# n=58321
# last=n%10
# sum1=0
# sum2=0
# while n>0:
#     digit=n%10
#     sum2=sum2+digit
#     n=n//10
# sum1=last+digit
# print("first and last digit digit sum:",sum1)
# print("middle digit sum:", sum2-sum1)
    
  
# Q 56
# n=5
# i=1
# fact=1
# while i<=5:
#     fact=fact*i
#     i=i+1
#     print(fact)
    
# Q57

# n=25
# fact=1
# i=1
# while fact<n:
#     i=i+1
#     fact=fact*i
# if fact==n:
#     print("yes")
# else:
#     print("no")  


# Q58

# n=20
# fact=1
# i=0
# while fact*(i+1)<=n:
#     i=i+1
#     fact=fact*i
# print(fact)

# 59

# i = 1

# while i <= 2:
#     j = 1

#     while j <= 3:
#         print(i, j)
#         j += 1

#     i += 1
    
# output 
# 1 1
# 1 2
# 1 3
# 2 1
# 2 2
# 2 3

# q 60

# i = 1

# while i <= 3:
#     j = 1

#     while j <= 2:
#         print(j, end=" ")
#         j += 1

#     print()
#     i += 1
    
# # 1 2 
# 1 2 
# 1 2 


# Q61

# i = 1

# while i <= 3:
#     j = 1

#     while j <= i:
#         print("*", end=" ")
#         j += 1

#     print()
#     i += 1

# output
# * 
# * * 
# * * * 

# Q62
# 123
# 23
# 1
# i = 1

# while i <= 3:
#     j = i

#     while j <= 3:
#         print(j, end=" ")
#         j += 1

#     print()
#     i += 1

# # Q64

# i = 1

# while i <= 2:
#     j = 1

#     while j <= 2:
#         print(i + j)
#         j += 1

#     i += 1

# print("Finished")


# 2
# 3
# 3
# 4
# Finished


# Q65

# i = 1

# while i <= 2:
#     print("A", i)
#     i += 1

# j = 1

# while j <= 3:
#     print("B", j)
#     j += 1
 
# A 1
# A 2
# B 1
# B 2
# B 3   

# Q66


# i = 1
# j = 1

# while i <= 3:
#     while j <= 2:
#         print(i, j)
#         j += 1

#     i += 1

# 1 1
# 1 2


# Q67
# i = 1

# while i <= 3:
#     j = 1

#     while j <= 2:
#         print(i, end="")
#         j += 1

#     print()
#     i += 2
    
# 11
# 33

# Q68


# i = 1

# while i <= 3:
#     j = 1

#     while j < i:
#         print(j, end=" ")
#         j += 1

#     print("X")
#     i += 1

# X
# 1 X
# 1 2 X

# Q69


# i = 1

# while i <= 3:
#     j = 1

#     while j <= 4:
#         if j == 3:
#             break

#         print(i, j)
#         j += 1

#     i += 1
# # 1 1
# # 1 2
# # 2 1
# # 22
# # 31
# # 32

# Q 70


# i = 1

# while i <= 2:
#     j = 1

#     while j <= 4:
#         print(j, end=" ")

#         if j == 2:
#             break

#         j += 1

#     print("|")
#     i += 1
    
# 1 2 |
# 1 2 |

# Q71
# i = 1

# while i <= 2:
#     j = 1

#     while j <= 2:
#         if j == 5:
#             break

#         print(i, j)
#         j += 1

#     i += 1

# 1 1
# 1 2
# 2 1
# 2 2

# Q72

# i = 1

# while i <= 3:
#     j = 1

#     while j <= 3:
#         if j == 2:
#             break

#         print(i, j)
#         j += 1

#     print("Next row")
#     i += 1

# 1 1
# Next row
# 2 1
# Next row
# 3 1
# Next row

# Q73

# i = 1

# while i <= 2:
#     j = 0

#     while j < 4:
#         j += 1

#         if j == 2:
#             continue

#         print(i, j)

#     i += 1
    
# 1 1
# 1 3
# 1 4
# 2 1
# 2 3
# 2 4

# Q74

# i = 1

# while i <= 5:
#     i += 1

#     if i == 3:
#         continue

#     print(i, end=" ")

# 2 4 5 6 

# Q75

# i = 1

# while i <= 3:
#     j = 0

#     while j < 3:
#         j += 1

#         if j == 2:
#             continue

#         print(j, end=" ")

#     print("Row")
#     i += 1
    
# 1 3 Row
# 1 3 Row
# 1 3 Row

# Q76

# 12
# 13
# 21
# 23
# 31
# 32
# i = 1

# while i <= 3:
#     j = 1

#     while j <= 3:
#         if j == i:
#             j += 1
#             continue

#         print(i, j)
#         j += 1

#     i += 1

# Q77


# i = 1

# while i <= 2:
#     j = 0

#     while j < 5:
#         j += 1

#         if j == 2:
#             continue

#         if j == 4:
#             break

#         print(i, j)

#     i += 1
    
# 1 1
# 1 3
# 2 1
# 2 3

# Q78

# i = 1

# while i <= 3:
#     j = 1

#     while j <= 4:
#         if j == 2:
#             j += 1
#             continue

#         if i == 3 and j == 4:
#             break

#         print(i * j, end=" ")
#         j += 1

#     print("End")
#     i += 1

# print("Done")


# 1 3 4 End
# 2 6 8 End
# 3 9 End
# Done
