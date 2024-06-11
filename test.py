def reverse_number(num):
    # Convert the number to a string
    num = str(num)
    # Reverse the number
    reverse = num[::-1]
    # Return the number
    return reverse


def oppositeNumber(num):
    return -num



if __name__ == '__main__':
    print(reverse_number(1234))
    print(oppositeNumber(5))