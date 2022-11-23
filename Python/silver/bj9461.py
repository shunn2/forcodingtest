n = int(input())

arr = []
dp = [1,1,1,2,2,3,4,5,7,9]
for _ in range(n):
    arr.append(int(input()))

for i in range(10, max(arr)+1):
    dp.append(dp[i-5]+dp[i-1])

for i in arr:
    print(dp[i-1])