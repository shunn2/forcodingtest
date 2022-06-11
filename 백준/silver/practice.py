import ast
def solution(v):
    x_list=[]
    y_list=[]
    for i in range(len(v)):
        x_list.append(v[i][0])
        y_list.append(v[i][1])
    x_list.sort()
    y_list.sort()
    return [x_list[1],y_list[1]]
ex=input()
v = ast.literal_eval(ex)
print(v)