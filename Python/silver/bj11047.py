n,k=map(int,input().split())
arr=[]
index=0
count=0
for i in range(n):
    arr.append(int(input()))
    if(arr[i]<=k):
        index = i

while(k != 0):
    if(k>=arr[index]):
        count += k//arr[index]
        k -= arr[index] * (k//arr[index])
    else:
        index-=1

print(count)