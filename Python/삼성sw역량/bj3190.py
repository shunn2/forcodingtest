n = int(input())
k = int(input())
graph = [[0] * n for _ in range(n)]
for i in range(k):
    a, b = map(int, input().split())
    graph[a - 1][b - 1] = 2
l = int(input())
