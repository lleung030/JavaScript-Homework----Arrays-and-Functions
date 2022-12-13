# A list of integers is sorted in “Wave” order if alternate items are not less than their immediate neighbors (thus the other alternate items are not greater than their immediate neighbors).
# Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.
# The wave-sorted lists has to begin with an element not less than the next, so [1, 4, 5, 3] is not sorted in Wave because 1 < 4
# Your task is to implement a function that takes a list of integers and sorts it into wave order in place; your function shouldn't return anything.
# Note:
# The resulting array shouldn't necessarily match anyone in the tests, a function just checks if the array is now wave sorted.


'''check first index
compare first index with second index
iterate through list 
check to see if index is wave like'''


# lst = [4, 1, 7, 5, 6, 2, 3]
# lst = [1, 1, 2, 2]
# lst = [1, 2, 3, 4]
lst = [1, 4, 5, 3]


# def wave(lst):
#     odd =[]
#     even =[]
#     for i in range(len(lst)):
#         if i%2==0:
#             even.append(lst[i])
#             print(even)
#         elif i%2==1:
#             odd.append(lst[i])
#             print(odd)
            
#     for x in odd:
#         for y in even:
#             if x>y:
#                 return True
#             elif x<y:
#                 return True
#             else:
#                 return False

# print(wave(lst))


# .push, .shift, .unshift, .pop, indexOf, includes(), slice, splice to insert, charAt(). join, split


def move_zeros(li):    
    zeros = []    
    counter = li.count(0)    
    for _ in range(counter):        
        li.remove(0)        
        zeros.append(0)
        result = li + zeros
    return result

print(move_zeros([0,1,0,3,12]))