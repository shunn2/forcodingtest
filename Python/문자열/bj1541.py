n = input().split('-')
num=0

def add(arr):
    temp = arr.split('+')
    number=0
    for i in range(len(temp)):
        number+=int(temp[i])
    return number

if(len(n)>1):
    for i in range(len(n)):
        if(i==0):
            num+=add(n[i])
        else:
            num-=add(n[i])
else:
    num+=add(n[0])

print(num)