N,K=map(int,input().split())

cnt=0

# while(N!=1):
#     if(N%K==0):
#         N=N/K
#         cnt+=1
#     else:
#         N-=1
#         cnt+=1

# print(cnt)

#N이 100억 이상의 큰 수가 되는 경우에도 로그 시간복잡도가 나오게 짤 수 있다.
target = 0

while True:
    target = (N//K)*K
    cnt+=(N-target)
    N=target
    if N<K:
        break
    cnt+=1
    N//=K

cnt+=(N-1)
print(cnt)


