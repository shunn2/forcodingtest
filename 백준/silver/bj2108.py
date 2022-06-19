import sys
n = int(sys.stdin.readline())
numbers = []

for i in range(n):
    numbers.append(int(sys.stdin.readline()))

numbers.sort()
set_numbers = list(set(numbers))
#최빈값 구하기
max_count = 0
max_number = []
for number in set_numbers:
    temp = numbers.count(number)
    if(max_count < temp):
        max_number=[]
        max_count = temp
        max_number.append(number)
    elif(max_count == temp):
        max_number.append(number)
max_number.sort()
#산술평균
print(round(sum(numbers)/n))
#중앙값
print(numbers[n//2])
#최빈값
if(len(max_number) > 1):
    print(max_number[1])
else:
    print(max_number[0])
#범위
print(numbers[len(numbers)-1] - numbers[0])