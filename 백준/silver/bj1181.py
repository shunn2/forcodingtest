import sys

n = int(input())
word_list = []

for _ in range(n):
	word_list.append(sys.stdin.readline().strip())
word_list = list(set(word_list))  # 중복 제거

word_list.sort(key = lambda x: (len(x), x)) # 정렬 다중 조건
result = "\n".join(word_list)
print(result)