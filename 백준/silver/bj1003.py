n = int(input())
m=[]

arr = [[] for _ in range(41)]
arr[0]=[1,0]
arr[1]=[0,1]


for _ in range(n):
    x = int(input())
    for i in range(x+1):
        if(arr[i]==[]):
            arr[i].append(arr[i-2][0] + arr[i-1][0])
            arr[i].append(arr[i-2][1] + arr[i-1][1])
        else:
            continue
    m.append(x)

for i in m:
    print(*arr[i])