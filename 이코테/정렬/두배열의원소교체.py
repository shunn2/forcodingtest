N, K = map(int, input().split())
A = list(map(int,input().split())) #오름차순 정렬
B = list(map(int, input().split())) #내림차순 정렬

A.sort()
B.sort(reverse=True)

for i in range(K):
    if A[i] < B[i]:
        A[i], B[i] = B[i], A[i]
    else:
        break

print(sum(A))