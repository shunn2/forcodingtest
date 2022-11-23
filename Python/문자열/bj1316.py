n = int(input())
cnt=0
for i in range(n):
    arr=[]
    temp = list(input())
    check=True
    for i in temp:
        if i not in arr:
            arr.append(i)
        if i == arr[len(arr)-1]:
            continue
        else:
            check=False
            break
    if check:
        cnt+=1
print(cnt)