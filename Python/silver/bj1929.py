import sys

m, n = map(int, sys.stdin.readline().split())
result=0
for i in range(m,n+1):
    result = 0
    if(i==1):
        continue
    for j in range(2, int(i**0.5) + 1):
        if(i % j == 0):
            result = 1
            break
    if(result==0):
        print(i)
