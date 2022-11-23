S = input()
N = int(input())
names = [input() for _ in range(N)]
max_chance = 0
result = 'Z' * 20
for name in names:
    L = S.count('L') + name.count('L')
    O = S.count('O') + name.count('O')
    V = S.count('V') + name.count('V')
    E = S.count('E') + name.count('E')
    chance = ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100
    if chance > max_chance:
        max_chance = chance
        result = name
    elif chance == max_chance:
        max_chance = chance
        result = min(result, name)
print(result)