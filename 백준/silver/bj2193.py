n = int(input())

count=[1,1]

if(n >= 3):
    for i in range(2,n):
        count.append(count[i-2]+count[i-1])

print(count[n-1])