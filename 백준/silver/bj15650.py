n, m = map(int,input().split())

arr = []
temp = 0
def dfs(temp):
    if(len(arr) == m):
        print(' '.join(map(str, arr)))
        return
    for i in range(1,n+1):
        if (i > temp) and (i not in arr):
            arr.append(i)
            temp = max(arr)
            dfs(temp)
            arr.pop()

dfs(temp)