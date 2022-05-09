s=input()
n=[-1]*26
for i in range(len(s)):
    n[ord(s[i])-97]=s.find(s[i])

for i in range(len(n)):
    print(n[i],end=" ")

# s = input()

# for num in range(97, 123):
#     try:
#         print(s.index(chr(num)), end=' ')
#     except:
#         print(-1, end=' ')