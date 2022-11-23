laser = input()
count = 0
s = []

for i in range(len(laser)):
    if laser[i] == '(':
        s.append(laser[i])
        
    else:
        if laser[i-1] == '(': 
            s.pop()
            count += len(s)
            
        else:
            s.pop() 
            count += 1
print(count)