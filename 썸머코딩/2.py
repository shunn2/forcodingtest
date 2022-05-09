import re

def solution(rooms, target):
    answer = []
    room_number=0
    plist=[]
    room_list=[[0]*5000]
    for i in range(len(rooms)):
        # room_number=re.search('[(.+?)]', rooms[i])
        # print(room_number)
        plist=rooms[i].split(',')
        print(plist)
        # plist[0]=plist[0]-room_number.group(1)
        # for j in plist:
        #     answer.append(j)
        # answer=set(plist)
    return answer

solution(["[403]James", "[404]Azad,Louis,Andy", "[101]Azad,Guard"],403)