# from itertools import combinations

# case = int(input())

# def count_case(n,m):
#     temp = len(list(combinations(range(1,m+1),n)))
#     print(temp)


# for i in range(case):
#     n  ,m=map(int,input().split())
#     count_case(n, m)

# --> 시간 초과. 조합이 아닌 단순 개수라 시간초과

# import math

# case = int(input())
# for _ in range(case):
#     n, m = map(int, input().split())
#     print(math.comb(m,n))
# --> 성공

import sys
input = sys.stdin.readline

case = int(input())
for _ in range(case):
    n, m = map(int, input().split())
    dp = [[0 for _ in range(m+1)] for _ in range(n+1)]
    for i in range(1, n+1):
        for j in range(1, m+1):
            if i == 1:
                dp[i][j] = j
                continue
            if i == j:
                dp[i][j] = 1
            else:
                if j > i:
                    dp[i][j] = dp[i][j-1] + dp[i-1][j-1]
    print(dp[n][m])