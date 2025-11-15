import random 

secret = random.randint(1, 10)
guess = None

print("Угадай число от 1 до 10")

while guess != secret:
    guess = int(input("Введите число: "))
    
    if guess < secret:
        print("Больше!")
    elif guess > secret:
        print("Меньше!")
    else:
        print("Поздравляю, вы угадали число", secret)