import sys
t = int(sys.stdin.readline())
arr= []
for i in range(t):
    cnt = 0
    x1, y1, x2, y2 = map(int,input().split())
    n = int(sys.stdin.readline())
    for j in range(n):
        px, py, pr = map(int, input().split())
        d1 = (((x1 - px) ** 2) + ((y1 - py) ** 2)) ** 0.5 #출발점으로부터
        d2 = (((x2 - px) ** 2) + ((y2 - py) ** 2)) ** 0.5 #도착점으로부터
        if (d1 < pr and d2 > pr) or (d1 > pr and d2 < pr):
            cnt += 1
    print(cnt)