# def solution(p):
#     answer = [0] * len(p)
#     index= 0
#     for i in range(len(p)):
#         temp = p[i]
#         result = False
#         for j in range(i,len(p)):
#             if temp > p[j]:
#                 temp = p[j]
#                 index = j
#                 result = True
#         if(result):
#             answer[i]+=1
#             answer[index]+=1
#             temp = p[i]
#             p[i] = p[index]
#             p[index] = temp
#         print(p)
#     return answer

# solution(list(map(int,input().split())))

a=[11,2]
b=[2,3,4]
a=b
print(a)
