def solution(arr):
    answer=[]
    count = 0
    arr.sort()
    print(arr)
    if(len(set(arr))==len(arr)):
        return [-1]

    for i in range(len(arr)-1):
        if(arr[i]==arr[i+1]):
            if(i==len(arr)-2):
                answer.append(count+2)
            count+=1
            continue
        if(count!=0):
            answer.append(count+1)
            count = 0
    return answer

print(solution(list(map(int,input().split()))))

