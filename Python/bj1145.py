n=input().split()
lst=list(map(int,n))
temp=1
cnt=0
while True:
    for i in range(len(lst)):
        if(temp%lst[i]==0):
            cnt+=1
    if(cnt>=3):
        print(temp)
        break
    cnt=0
    temp+=1