import math
n = int(input())
a=list(map(int,input().split()))
b,c = map(int,input().split())
cnt = n
for i in range(n):
    if(a[i]>b):
        a[i] -= b
    else:
        a[i]=0
    cnt += math.ceil(a[i]/c)

print(cnt)