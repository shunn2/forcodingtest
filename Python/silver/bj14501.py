import sys

n = int(input())

task = [list(map(int,sys.stdin.readline().split())) for _ in range(n)]

dp = [0 for _ in range(n+1)]

for i in range(n-1,-1,-1):
    if i + task[i][0] > n:
        dp[i] = dp[i+1]
    else:
        dp[i] = max(task[i][1] + dp[i + task[i][0]], dp[i+1])

print(dp[0])
##왜 뒤에서 부터 했을 까.