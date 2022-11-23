from collections import deque

def bfs(a,b,graph):
    q=deque()
    q.append((a,b))
    dx=[-1,1,0,0]
    dy=[0,0,1,-1]
    count = 0
    while q:
        x,y = q.popleft()
        for i in range(4):
            nx=x+dx[i]
            ny=y+dy[i]
            if nx>=0 and nx<len(graph) and ny>=0 and ny<len(graph[0]) and graph[nx][ny]!='F':
                q.append((nx,ny))
                count +=1
def solution(grid, k):
    answer = -1
    grid = bfs(0,0,grid)
    answer = grid[len(grid),len(grid[0])]
    return answer