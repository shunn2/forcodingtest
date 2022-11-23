from collections import deque
t = int(input())

dx=[-1,1,0,0]
dy=[0,0,-1,1]
cnt = 0
def graph(x,y):
    q= deque()
    q.append((x,y))
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or ny < 0 or nx >=m or ny >= n: 
                continue 
            if arr[nx][ny] == 0: 
                continue 

            if arr[nx][ny] == 1:
                q.append((nx,ny))
                arr[nx][ny]=0

for i in range(t):
    n,m,k = map(int,input().split())
    arr=[[0] * n for _ in range(m)]
    count = 0
    for j in range(k):
        x,y=map(int,input().split())
        arr[y][x]=1
    for a in range(m):
        for b in range(n):
            if(arr[a][b]==1):
                graph(a,b)
                count+=1
    print(count)