n=int(input())

cnt=99
if(n<100):
    cnt=n
else:
    for i in range(100,n+1):
        lst=list(map(int,str(i)))
        if(lst[1]-lst[0]==lst[2]-lst[1]):
            cnt+=1

print(cnt)
