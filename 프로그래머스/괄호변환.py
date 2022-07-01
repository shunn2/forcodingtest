def check(p):
    stack=[]
    for i in p:
        if len(stack) == 0: 
            stack.append(i)
        elif(i==')'):
            if(stack[-1]=='('):
                stack.pop()
            else:
                stack.append(i)
        elif(i=='('):
            stack.append(i)
    if(len(stack)==0):
        return 1
    else:
        return 0
def reverse(p):
    temp=list(p[1:len(p)-1])
    for i in range(len(temp)):
        if(i=='('):
            temp[i]=')'
        else:
            temp[i]='('
    return ''.join(temp)
def stringSep(p):
    left=0
    right=0
    i=0
    u=""
    v=""
    if(p==""):
        return ""
    elif(check(p)):
        return p
    else:
        while True:
            if(p[i]=='('):
                left+=1
                u+=p[i]
            else:
                right+=1
                u+=p[i]
            i+=1
            if(left==right):
                v+=p[i:]
                break
    if(check(u)==1):
        v = stringSep(v)
        return u+v
    else:
        temp="("
        temp+=stringSep(v)
        temp+=")"
        temp+=reverse(u)
        return temp


def solution(p):
    return stringSep(p)

print(solution("(()())()"))