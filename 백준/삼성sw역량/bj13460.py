from collections import deque
n,m=map(int,input().split())
arr=[]
dx=[-1,1,0,0]
dy=[0,0,-1,1]
red=[]
blue=[]
for i in range(n):
    arr.append(list(map(str,input())))
    for j in range(m):
        if(arr[i][j]=='R'):
            red=[i,j]
        if(arr[i][j]=='B'):
            blue=[i,j]

def bfs(rx, ry, bx, by):
    q = deque()
    q.append((rx, ry, bx, by))
    visited = []
    visited.append((rx, ry, bx, by))
    count = 0
    while q:
        for _ in range(len(q)):
            rx, ry, bx, by = q.popleft()
            if count > 10: 
                print(-1)
                return
            if arr[rx][ry] == 'O': 
                print(count)
                return 
            for i in range(4): 
                nrx, nry = rx, ry
                while True: 
                    nrx += dx[i]
                    nry += dy[i]
                    if arr[nrx][nry] == '#': 
                        nrx -= dx[i]
                        nry -= dy[i]
                        break
                    if arr[nrx][nry] == 'O':
                        break
                nbx, nby = bx, by
                while True: 
                    nbx += dx[i]
                    nby += dy[i]
                    if arr[nbx][nby] == '#':
                        nbx -= dx[i]
                        nby -= dy[i]
                        break
                    if arr[nbx][nby] == 'O':
                        break
                if arr[nbx][nby] == 'O':
                    continue
                if nrx == nbx and nry == nby: 
                    if abs(nrx - rx) + abs(nry - ry) > abs(nbx - bx) + abs(nby - by):
                        nrx -= dx[i]
                        nry -= dy[i]
                    else:
                        nbx -= dx[i]
                        nby -= dy[i]
                if (nrx, nry, nbx, nby) not in visited: 
                    q.append((nrx, nry, nbx, nby))
                    visited.append((nrx, nry, nbx, nby))
        count += 1
    print(-1)
bfs(red[0], red[1], blue[0], blue[1])
