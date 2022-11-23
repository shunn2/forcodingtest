from collections import deque

x = int(input())
counts=[]
for i in range(x):
    n, m = map(int, input().split())
    arr = deque(list(map(int,input().split())))
    index = m
    count = 0
    while(index!=-1):
        if(index == 0):
            if(arr[index] < max(arr)):
                arr.append(arr.popleft())
                index = len(arr) - 1
            else:
                index -= 1
                count += 1
        else:
            if(arr[0] < max(arr)):
                arr.append(arr.popleft())
                index -= 1
            else:
                arr.popleft()
                index -= 1
                count += 1
    counts.append(count)

for i in range(len(counts)):
    print(counts[i])



