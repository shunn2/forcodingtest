n = int(input())

arr=list(map(int,input().split()))

arr.sort()

sum=0

for i in range(n):
    sum+=arr[i]*(n-i)

print(sum)