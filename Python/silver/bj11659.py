import sys

n,m = map(int,sys.stdin.readline().split())
numbers = list(map(int,sys.stdin.readline().split()))
results = [0]
temp = 0
for i in numbers:
    temp += i
    results.append(temp)

for _ in range(m):
    i,j = map(int,sys.stdin.readline().split())
    print(results[j] - results[i-1])