n=int(input())
num=n
cnt=0
a=0
while True:
    a=num//10+num%10
    num=num%10*10+a%10
    cnt+=1
    if(num==n):
        break

print(cnt)
