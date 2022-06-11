N = int(input())
arr = []

for _ in range(N):
  start, end = map(int, input().split())
  arr.append([start, end])

arr.sort(key=lambda a: a[0])
arr.sort(key=lambda a: a[1])

last = 0 
conut = 0 

for i, j in arr:
  if i >= last: 
    conut += 1
    last = j

print(conut)