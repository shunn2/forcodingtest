N = int(input())
count =0
while N>=0:
    if N%5 == 0:
        count += int(N // 5)
        print(count)
        break
    N -= 3
    count += 1
else:
    print(-1)

#조건식이 만족하지 않으면 else 문 실행됨. break으로 끝나면 else문 실행 안됨