n = int(input())
array = list(map(int,input().split()))

#ai = i번째 식량 창고까지의 최적 해
#ki = i번째 식량 창고에 있는 식량의 양
#ai = max(ai-1,ai-2+ki)

d =[0] * 100

d[0] = array[0]
d[1] = max(array[0],array[1])
for i in range(2,n):
    d[i] = max(d[i-1],d[i-2]+array[i])

print(d[n-1])