N=input()

result=int(N[0])

for i in range(1, len(N)):
    num=int(N[i])
    if(num<=1 or result <=1):
        result+=num
    else:
        result*=num
    i+=1

print(result)