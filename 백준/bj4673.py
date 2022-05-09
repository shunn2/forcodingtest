num = set(range(1,10001))
rmv = set()

for i in range(1,10001):
    for j in str(i):
        i+=int(j)
    rmv.add(i)

self_num=sorted(num-rmv)
for i in self_num:
    print(i)