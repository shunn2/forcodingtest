L = int(input())
S = list(map(int,input().split()))
n = int(input())

A=0
B=0
count=0

S.append(n)
S.sort()
n_index = S.index(n)

if(n_index!=0):
    A = S[n_index-1]
else:
    A=0
B = S[n_index+1]

count = (S[n_index]-A)*(S[n_index+1]-S[n_index])-1
if(S[n_index]==S[n_index+1]):
    count=0
print(count)

#예외처리
# 5
# 5 7 9 10 12
# 4

# 3