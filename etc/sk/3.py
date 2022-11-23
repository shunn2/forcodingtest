def solution(n, plans, clients):
    answer=[]
    all_plan = []
    additional = []
    for i in range(len(plans)):
        plan = plans[i].split(' ')
        additional = plan[1:] + additional
        additional.sort()
        plan[1:]=additional
        all_plan.append(plan)
    for i in range(len(clients)):
        result = 0
        client = clients[i].split(' ')
        temp = True
        index=[]
        for j in range(len(all_plan)):
            temp = True
            if(client[0]>all_plan[j][0]):
                temp = False
                continue
            else:
                for k in range(len(client)-1):
                    if client[k+1] not in all_plan[j][1:]:
                        temp = False
                        break
            if(temp):
                index.append(j+1)
        if(len(index)):
            answer.append(min(index))
    return answer
n = 5
plans =["100 1 3","500 4","2000 5"]
clients = ["300 3 5","1500 1","100 1 3","50 1 2"]
print(solution(n,plans,clients))
#3310