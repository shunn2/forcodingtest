n = int(input())
num = list(map(int,input().split()))
dp=[0]*n
dp[0]=num[0]
for i in range(1,n):
    if(dp[i-1]+num[i]<num[i]):
        dp[i]=num[i]
    else:
        dp[i]=dp[i-1]+num[i]

print(max(dp))
