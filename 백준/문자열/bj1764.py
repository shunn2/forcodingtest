n,m=map(int,input().split())
n_arr=[]
m_arr=[]
for _ in range(n):
    n_arr.append(input())
for _ in range(m):
    m_arr.append(input())
nm_set=(set(n_arr)&set(m_arr))
nm_set=list(nm_set)
nm_set.sort()
print(len(nm_set))
for i in range(len(nm_set)):
    print(nm_set[i])