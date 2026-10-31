#q1
# n=5
# for i in range(n):
#     print("*"*n)


# Q2.
# row = int(input("Enter row no.:"))
# column=int(input("Enter column no.:"))
# for i in range(row):
#     for j in range(column):
#         print("*",end="")
#     print()
    
#q3.

# n=6
# for i in range(1,n):
#     for j in range(i):
#         print("*",end="")
#     print()
    
# Q4.
   
# n=5
# for i in range(1,n+1):
#     for j in range(1,i+1):
#         print(j,end="")
#     print()

# Q5.
# n=5
# for i in range(1,n+1):
#     for j in range(1,i+1):
#         print(i,end="")
#     print()

# Q6.
# s="ABCDE"
# for i in range(len(s)):
#     for j in range(i+1):
#         print(s[i],end="")
#     print()


# Q7.
# s="ABCDE"
# for i in range(len(s)):
#     for j in range(i+1):
#         print(s[j],end="")
#     print()

# Q8.

# n=5
# num=1
# for i in range(1,n+1):
#     for j in range(i):
#         print(num,end=" ")
#         num+=1
#     print()
    
    
# Q9

# for i in range(1, 6):
#     for j in range(1, i + 1):
#         print((i + j+1) % 2, end=" ")
#     print()

# Q10.

# for i in range(5,0,-1):
#     for j in range(i+1,1,-1):
#         print("*",end="")
#     print()

# Q11.

# for i in range(6,1,-1):
#     for j in range(1,i):
#         print(j,end="")
#     print()

# Q12

# s="ABCDE"
# for i in range(len(s),0,-1):
#     for j in range(0,i):
#         print(s[j],end="")
#     print()

# Q13

# for i in range(1,6):
#     for j in range(5-i):
#         print(" ",end="")
#     for k in range(1,i+1):
#         print("*",end="")
#     print()


# Q14

# for i in range(1,6):
#     for j in range(0,i+1):
#         print(" ",end="")
#     for k in range(6-i):
#         print("*",end="")
#     print()


# Q15

# for i in range(1,6):
#     for j in range(5-i):
#         print(" ",end="")
#     for k in range(i*2-1):
#         print("*",end="")
#     print()
        

# Q16

# for i in range(5,0,-1):
#     for j in range(5-i):
#         print(" ",end="")
#     for j in range(2*i-1):
#         print("*",end="")
#     print()

# Q17

# for i in range(1,5):
#     for j in range(5-i):
#         print(" ",end="")
#     for k in range(i*2-1):
#         print("*",end="")
#     print()
# for i in range(5,0,-1):
#     for j in range(5-i):
#         print(" ",end="")
#     for j in range(2*i-1):
#         print("*",end="")
#     print()

# Q18

# for i in range(1,6):
#     for j in range(5-i):
#         print(" ",end="")
#     for j in range(1,6):
#         print("*",end="")
#     print()

# Q19

# for i in range(1,6):
#     for j in range(1,i+1):
#         print(j,end="")
#     for j in range(1,2*(5-i)):
#         print(" ",end="")
#     for j in range(i,0,-1):
#         print(j,end="")
        
#     print()
    
# Q20


# n = 5

# for i in range(1, n + 1):
#     for s in range(n - i):
#         print(" ", end="")
#     for j in range(1, i + 1):
#         print(j, end=" ")
#     print()

# Q21

# n = 5

# for i in range(1, n + 1):
#     for s in range(n - i):
#         print(" ", end="")

#     for j in range(1, i + 1):
#         print(j, end="")

#     for j in range(i - 1, 0, -1):
#         print(j, end="")

#     print()

# Q22

# n = 5

# for i in range(1, n + 1):
#     for s in range(n - i):
#         print(" ", end="")

#     for j in range(1, i + 1):
#         print(chr(64 + j), end="")

#     for j in range(i - 1, 0, -1):
#         print(chr(64 + j), end="")

#     print()
    
# Q23

# n=5
# for i in range(n):
#     ch=69-i
#     for j in range(i+1):
#         print(chr(ch+j),end="")
#     print()


# Q 24

# n=5
# for i in range(1,n+1):
#     for j in range(i):
#         print("*",end="")
#     print()
# for i in range(1,n):
#     for j in range(n-i):
#         print("*",end="")
#     print()

# Q 25


# n=5
# for i in range(n):
#     for j in range(1,n-i+1):
#         print(j,end="")
#     print()
# for i in range(1,n):
#     for j in range(1,i+2):
#         print(j,end="")
#     print()

# Q 26
# n=5
# for i in range(n,0,-1):
#     for j in range(i):
#         print(chr(65+j),end="")
#     print()
# for i in range(1,n):
#     for j in range(i+1):
#         print(chr(65+j),end="")
#     print()

        
# Q27

# n=5
# for i in range(n):
#     for j in range(n):
#         if (i+j)%2==0:
#             print("*",end="")
#         else:
#             print("#",end="")
#     print()

# Q28

# n=5
# for i in range(n):
#     for j in range(n):
#         if (i+j)%2==0:
#             print("1",end="")
#         else:
#             print("0",end="")
#     print()

# Q29

# n=5
# for i in range(1,n+1):
#     for j in range(1,n+1):
#         print(j*i,end=" ")
#     print()
    
    
# Q30
# n=5
# for i in range(1,6):
#     if i%2==0:
#         for j in range(i,0,-1):
#             print( j,end="")
#     else:
#         for j in range(1,i+1):
#             print(j,end="")
#     print()
    
       
# Q31

# n=4
# for i in range(1,n+1):
#     for j in range(n-i):
#         print(" ",end=" ")
#     for j in range(1,i+1):
#         print(j,end=" ")
#     for j in range(i-1,0,-1):
#         print(j,end=" ")
#     print()
# for i in range(n-1,0,-1):
#     for j in range(n-i):
#         print(" ",end=" ")
#     for j in range(1,i+1):
#         print(j,end=" ")
#     for j in range(i-1,0,-1):
#         print(j,end=" ")
#     print()
        
    
# Q32
 
        
# n=5    
# for i in range(n*2-1):
#     for j in range(n*2-1):        
#         a = i
#         b = j
#         c = 2 * n - 2 - i
#         d = 2 * n - 2 - j

#         print(n - min(a, b, c, d), end=" ")
#     print()

# Q33

# n=5
# for i in range(5):
#     for j in  range(5):
#         if i==0 or j==0 or j==n-1 or i==n-1:
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()
        
    
# Q35

# n=5
# for i in range(5):
#     for j in range(5):
#         if i==0 or j==0 or i==n-1 or j==n-1:
#             print("1",end="")
#         else:
#             print("0",end="")
#     print()
    
# Q36
# n=5
# for i in range(5):
#     for j in range(5):
#         if j==0 or  i==n-1 or i==j:
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()
            
# Q37

# for i in range(5):
#     for j in range(5):
#         if i==0 or j==0 or i==1 and j==3 or i==2 and j==2 or i==3 and j==1:
    #         print("*",end="")
    #     else:
    #         print(" ",end="")
    # print()

# Q38

# for i in range(5):
#     for j in range(2*5-1):
#         if i+j==4 or j-i==4 or i==4:
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()
        
             
# Q 39

# for i in range(7):
#     for j in range(7):
#         if i+j==3 or j-i==3 or i-j==3 or i+j==9:
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()
        
# Q40

# for i in range(5):
#     for j in range(5):
#         if i+j==4 or i==j:
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()

# Q41

# for i in range(5):
#     for j in range(5):
#         if i+j==4 or i==j or i==2:
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()

# Q42

# n=int(input("enter your no.:"))
# for i in range(n):
#     for j in range(n):
#         if i+j==n-1 or i==j:
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()

# Q43

# for i in range(1,6):
#     print("*"*i+" "*(10-2*i)+"*"*i)
# for j in range(1,5):
#     print("*"*(5-j)+" "*(2*j)+"*"*(5-j))
    
        
# for i in range(1, 6):
#     for j in range(1, i + 1):
#         print("*", end="")
#     for j in range(10-2*j,0,-1):
#         print(" ",end="")
#     for j in range(1,i+1):
#         print("*", end="")
#     print()
    
# for i in range(4,0,-1):
#     for j in range(1, i + 1):
#             print("*", end="")
#     for j in range(10-2*j,0,-1):
#             print(" ",end="")
#     for j in range(1,i+1):
#             print("*", end="")
#     print()

# Q44

# for i in range(9):
#     for j in range(9):
#         if i==0 or i+j==8 or i==j or i==8:
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()

# Q45

# for i in range(5):
#     for j in range(5-i,0,-1):
        
#         print(" ",end="")
#     for j in range(0,i+1):
#         ch=65+j
#         print(chr(ch),end="")
#     for j in range(i-1,-1,-1):
#         ch=65+j
#         print(chr(ch),end="")
#     print()
# for i in range(3,-1,-1):
#     for j in range(5-i,0,-1):
        
#         print(" ",end="")
#     for j in range(0,i+1):
#         ch=65+j
#         print(chr(ch),end="")
#     for j in range(i-1,-1,-1):
#         ch=65+j
#         print(chr(ch),end="")
#     print()
    
    
# Q46
# for i in range(5):
#     for j in range(5):
#         if 

# n = 5

# for i in range(n):
#     for j in range(n - i - 1):
#         print(" ", end="")

#     num = 1
#     for j in range(i + 1):
#         print(num, end="")
#         num = num * (i - j) // (j + 1)

#     print()


# Q47
# for i in range(1):
#     print(" "+"*"*2+" "*3+"*"*2)
#     print("*"*4+" "+"*"*4)
# for i in range(5,0,-1):
#     for j in range(5-i):
#         print(" ",end="")
#     for j in range(1,2*i):
#         print("*",end="")
#     print()
    
    
# Q48

# for i in range(7):
#     for j in range(9):
#         if (i == 0 and (j == 0 or j == 1 or j == 5 or j == 6)) or \
#            (i == 1 and (j == 0 or j == 3 or j == 5 or j == 8)) or \
#            (i == 2 and (j == 0 or j == 4 or j == 8)) or \
#            (i == 3 and (j == 1 or j == 7)) or \
#            (i == 4 and (j == 2 or j == 6)) or \
#            (i == 5 and (j == 3 or j == 5)) or \
#            (i == 6 and j == 4):
#             print("*", end="")
#         else:
#             print(" ", end="")
#     print()

# Q49\
    
# n=int(input("Enter your no.:"))
# for i in range(n):
#     for j in range(n):
#         if i==n//2 or i==j or i+j==n-1 :
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()


# Q50

# n=int(input("Enter your no.:"))
# for i in range(n):
#     for j in range(n):
#         print("#",end="")
        
#     print()

# Q51
