from collections import Counter

t = int(input())
for i in range(t):
    n = int(input())
    arr= []
    cnt = 1
    for j in range(n):
        x, y = map(str,input().split())
        arr.append(y)
    result = Counter(arr)
    for k in result:
        cnt *= result[k] + 1
    print(cnt-1)
