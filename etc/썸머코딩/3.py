def solution(atmos):
    answer = 0
    last_day=-3
    for i in range(len(atmos)):
        if(atmos[i][0]>=81 or atmos[i][1]>=36):
            if(atmos[i][0]>=151 and atmos[i][1]>=76):
                if(i-last_day>2):
                    answer+=1
                last_day=last_day-2
            elif(i-last_day>2):
                last_day=i
                answer+=1
            
        
        print(last_day)
    return answer

answer1 = solution([[140, 90], [177, 75], [95, 45], [71, 31], [150, 30], [80, 35], [72, 33], [166, 81], [151, 75]])

print(answer1)