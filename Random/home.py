print('Hello World');
print('o---');
print(' ||||');
print('*' * 10); #**********
hello = 10;
hello = "hi";
print(hello);
num = 89;
num = num + 1;
print(num);
num1 = 10;
num2 = 2.2;
print(num1 + num2);
good = True;
name = 'John';
age = '20';
#idk = input('what is your name? ');
#print('hi ' + idk);
#hobby = input('what do you like to do? ');
#print('That is cool, ' + hobby);
Jdo = 2;
#year = input('what is your birth year? ');
#age = 2021 - float(year);
#print(age);
#pounds = input('how much do you weigh? (lb) ');
#kg = float(pounds) / 2.205;
#print(kg); inpit fields
result = 243 - 2345.0;
print(result);
#use three quotes for multi line string
string = ''' 
Hello World

I am Leon

:D
''';

print(string);

lol = "hello";
print(lol[2]);
print(lol[-1]); #last char
print(lol[1:5]);
print(lol[3:]);
new_lol = lol[:]; #new stirng 
print(new_lol);
first = 'joe';
last = 'mama';
print(f'{first} [{last}] is a coder');
course = 'Python';
print(len(course));
print(course);
print(course.upper());

if 1 > 2 and 2 != 1:
    print('hi');
else:
    print("hello");

if (1 == 2) or 2 == 2:
    print("sdafsddffsd");

if not True:
       print("1")
elif not 1 + 1 == 3:
   print("2");
else:
   print("3");

h = 0;

while h < 5: 
    print(h);
    h += 1;

x = [2, 4]
x += [6, 8]
print(x[2]//x[0])
for i in range(5):
      print("hello!")

print(list(range(5)))

for i in range(1, 30, 2):
        print(i);
weight = 10;
height = 222;
if (weight / height**2 >= 30):
    print("Obesity");
elif (weight / height**2 >= 25 and weight / height**2 < 30):
    print('Overweight');
elif (weight / height**2 >= 18.5 and weight / height**2 < 25):
    print("Normal");
else: 
    print('Underweight');

y = 0;

while y < 5:
    print(y)
    y += 1;
    if y == 2:
        break;

nums = [1, 2, 3]
print(nums + [4, 5, 6])
print(nums * 2) #concat

numm = [1, 2, 3]

print(numm == nums);

numm += [3, 2, 1];

print(2 in numm) #true

word1 = ['hi', 'hello', 'hello there'];

for i in word1:
    print(i + '!');

abcss = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
];

print(abcss[0][1]);
print(abcss);

sqr = [9, 16, 25, 36, 49];
print(sqr[1]);
print(sqr[1:]); #like substring
print(sqr[::2]); #no start, no end, skips every other one [start:end:step]
print(sqr[::-2]);
print(sqr[1:-1]);
l = list(range(10, 2)); #empty list
l = list(range(0, 10, 2));
print(l);
l = list(range(10)); #excludes 10
print(l);
lis = [1, 1, 2, 3, 5, 8, 13]
print(lis[lis[4]]) # -> print(list[5]) -> 8
for g in x:
    print('1');

x = [6, 4, 2, 9]
print(x[::-1]); # reverse everything
print(x[0]+x[2]);

w = (list(range(0, 10)));
print(w);
nums = [1, 2, 3];
nums.append(4); #like push in js
print(nums);

let = []

for x in range(0, 9): #remember that it excludes 9
    let.append(x);

print(let);

let = [443, 434, 4, 2, 3, 5456, 56, 54];
print(max(let)); # max value in a list
print(min(let));

let = [1, 1, 1, 1, 1, 1, 1];
print(let.count(1));
print(let.count(23323)); #0
print(let.remove(1)); # removes the value 1 once from the list. prints none
print(let);
#print(let.remove(2)) error saying that it is not in the list. 2 is not  in the list

let = [2, 1, 1, 1, 1, 1, 2];
let.remove(2); #will remove the fist 2
print(let);

let = list(range(0, 4));
print(let);
let.reverse(); #prints none
print(let);

data = [7, 5, 6.9, 1, 8, 42, 33, 128, 1024, 2, 8, 11, 0.4, 1024, 66, 809, 11, 8.9, 1.1, 3.42, 9, 100, 444, 78]
m = min(data);
n = max(data);
print(m)
print(n);
data.remove(m);
data.remove(n);
data.remove(n);
print(data);

data = [7, 5, 6.9, 1, 8, 42, 33, 128, 1024, 2, 8, 11, 0.4, 1024, 66, 809, 11, 8.9, 1.1, 3.42, 9, 100, 444, 78]
m = min(data);
n = max(data);
data.remove(m);
data.remove(n);
data.remove(n);

r = 0;
for i in data:
    r += i;

print(r);

let = [1, 2, 3, 4, 5, 6, 7];

print(let.index(2)); #prints 1 because 2 is the 2nd index in that list
#print(let.index(432432)); This will result in an error

let = 'HelloWorld';

print(let.index('H')); 

#print(let.index('H')); this will result in an error. the index function is case senstive

let = ['a', 'b', 'c'];
let = [4, 5, 6]
print('letters: {[0]} {[1]} {[2]}')

print('letters: {0} {1} {2}'. format(let[0], let[1], let[2]));
print(f'letters: {let}')

print("{0}{1}{0}".format("abra", "cad")) # 0 = abra and 1 == cad
#naming the placeholders

print("{x} + {y}". format(x = 3, y = 2));

#list to string
let = [1, 2, 3];
#print(' '.join(let)); error, cannot use join on a list with numbers
let = ['a', 'b', 'c'];
print(' '.join(let));
print(''.join(let)); #no space between the chars

#replacing strings

let = 'Hi World';
print(let);
print(let.replace('Hi', 'Hello')); #Changes to Hello World
print(let); #doesnt change

let = let.replace('Hi', 'Hello'); #doing this will change the string
print(let);

print(let.startswith('Hi'));
print(let.startswith('hi')); #false
print(let.endswith('World'));
print(let.upper());
print(let.lower());
print(let); #does not change the string. you have to assign it again in order to change it
#change string to list
let = "Hello, world hi lol";

print(let.split(', ')) #when it finds ', ' it list splits
print(let); #again does not change the value of let
let = let.split(', ');
print(let);

## creating your own function. you use def to start it

def fun():
    print('hi');

#prints hi everytime the function is called 

fun();
fun();
fun();

#agruments

def add(x, y):
    return x + y;

let = add(3, 2);
print(let);

def i():
    print(2);

print(i());
#printing a function that doesnt return anything will print 'None'

let = 'stringlol';

print(let.index('s'));
#print(let.index('2')); error
"""
print('hi'); this is a document comment
""";



def search(text, word):
    count = 0;
    length = len(word);
    for i in text:
        count += 1;
        if (text[count:len(word) + count] == word):
            
            return 'Word found'
            
    return 'Word not found';

print(search("this is some sample text", 'some'));

def u():
    for i in range(0, 23):
        print(i);
        if i == 3:
            return;

u();
print(u()); #prints none since it does not return anything
print(0 / 5);

try:
    print(lol[323231233]);
except:
    print('cannot print because there is an error');
finally:
    print('this will always print regardless if there is an error');


'''
try:
  print(1 / 0)
except ZeroDivisionError:
  raise ValueError
'''
#there is two exceptions if this runs. if there was no raising, then no exceptions would occur
'''
try:
  print(1 / 0)
except ZeroDivisionError:
  raise ValueError('bruh moment');
'''
#you can also add things inside of the parameters to customize the error
#you can also re-raise an exception. the except in try-except will not throw an exception
'''
try: 
    i = 0 / 2;
except:
    raise; #this will output to whatever the exception is when it is triggered.
'''
#you can do this so that the error appears because in an except, you do not see the error.
print('a');
assert 1 + 1 == 2;
print('b');
#assert 2 + 1 = 2; this will result in an exception
assert 2 + 2 == 4; #if the above code was uncommented, this code will not run!
print('c');
print('this could check for valid input at the start of a function');

let = 23;
assert 23 == let;
#myfile = open("filename.txt"); this is how you open other files
let = 'eweew';
for i in let:
    print(i);

let = [1, 2, 3, 4, 4];
let2 = [3, 3, 2];
let.extend(let2);
print(let) #this will change the array
let = [1, 2, 3]; #because insert has the first parameter 1, [2, 3] gets pushed to the right by 1. 
# if the first para is 2, then only the 3 will be push the to right by 1
let.insert(1, 2.0);
print(let);
let.remove(2.0);
print(let);
let.pop() #removes element from the end of the list
print(let);
let = [5, 2, 1, 1, 2, 3, 4, 5];
let.sort();
print(let);
let = ['d', 'e', 'a', '2', '3']; #prints lowest to highest number, then a d e
let.sort();
print(let);

let2 = 'dasdsa';
let2 = let.copy();
print(let2);
print(let2[:]);
#None = null
#Dictionaries
let = {
    "Hello": 'world',
    'dee': 'dp'
};

print(let['Hello']); #prints the value

let['dee'] = 'aaa';
print(let['dee']); #changes to value of dee
print(let);
#print(let['er']); error
#you cannot use an array as a key
'''
j {
    [2, 2, 2]: 'hi'
}
'''

let = {
    1: "one",
    2: "two",
    3: "three",
};

print(1 in let);
print(0 in let);
print(0 not in let); #checks if that key is in the dictornary
#get() is like index()
print(let.get(1)); #True
print(let.get(7)); #None
print(let.get(2, "not found")); #2 is in the dictornary so it prints the value
print(let.get(23, "not found")); #prints not found

let = (1, 2, 3); #tuples cannot be changed
print(let[1]); #2
let = [(1, 2), (3, 4)];
print(let[1][0]);
print(let[1]);
let = ([1, 2], [3, 4]);
let[0][1] = 1;
print(let); #you can change arrays inside of tuples
let = [1, 2], [3, 4]; #tuple 
let[0].extend([1, 2, 3]);
print(let);
print(type(let));

let = 'hello', 'world'; #tuple
print(let);

let = [1, 2, 3];
print(let[:-1]); #remember that 3 is not printed because it stops at index -1
print(let[2:1]); #empty list
print(let[2:1:-1]);

for i in range(10):
    print(i);

let = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for i in let:
    for j in i:
        print(j)

#Syntax from w3 newlist = [expression for item in iterable if condition == True]
let = [i*2 for i in range(10) if i != 6]; #skips 12
print(let);

txt = "assdd dad jsadj jsaslkd skdjkld kljdlkdjskldjklsjkldksaajskldsalkkl";

let = txt.split();

longest = "";
for i in let:
    if len(i) > len(longest):
        longest = i;

print(longest);

def app(func, arg):
    arg += 1;
    return func(arg); #calls it once

def add10(arg):
    return 10 + arg;

print(app(add10, 10));

def app(func, arg):
    arg += 1;
    return func(func(arg)); #calls it twice

def add10(arg):
    return 10 + arg;

print(app(add10, 10));

def sub(x):
    return x - 10;

print(sub(sub(20)));

print((lambda x: x**2) (3)); #similar like an arrow function in js

let = lambda x: print(x**3);

let(3);

add_five = lambda x: x + 5;

let = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

e = list(map(add_five, let));
print(e);

e = list(map(lambda x: x + 5, let));
print(e)

def addFive(x):
    return x + 5;

e = list(map(addFive, let));
print(e);

e = list(filter(lambda x: x % 2 == 0, let));
print(e);

def modo(x):
    if x % 2 == 0:
        return x;

e = list(filter(modo, let));
print(e);

a = 1;

b = a;

print(a);

o = let;
o.append(2);
print(let);

#sets 
num = {1, 2, 3, 4};
print(1 in num);
# print(num[1]); is an error
let = {'hi', 'hello'};
print("hi" in let);

let = set({}); #empty set
print(let);

let = {} #empty dictionary

let = [1, 2, 3, 4];
let.append(10);
print(let);
let.pop();
print(let);
let.pop(1);
print(let); #pops the first index
let = [1, 2, 3, 4];
let.remove(1);
print(let);
#sets are unordered (no indexing). cannot store duplicate elements
let = {1, 2, 3, 4};
let.pop();
print(let);
#let.append(4); has no append
let.add(5);
print(let);
#let.pop(1); error
let.remove(5);
print(let);

let1 = {1, 2, 3, 4, 5, 6};
let2 = {4, 5, 6, 7, 8, 9};
let3 = {10};
print(let1 | let2 | let3); #combines the three (union operator)
print(let1 & let2); #only gets the elements containing in both sets (intersection operator)
print(let1 & let2 & let3); #only gets the elements in all sets
print(let1 - let2 - let3); #will get unique elements in the first set (difference operator)
#the elements have to only occur in that one set
print(let2 - let1 - let3); #only in let2
print(let3 - let1 - let1); #only in let3
print(let1 ^ let2 ^ let3); #gets items but not the items that occur in more than one set
#the thing above is called the symmetric difference operator 

class Dog:
    def __init__(self, breed, color): #the self para is the object itself
        self.breed = breed;
        self.color = color;

    def bark(self):
        print('Bark');

    def get_breed(self):
        return self.breed;
    
    def set_breed(self, breed):
        self.breed = breed;

    def get_color(self):
        return self.color;

    def set_color(self, color):
        self.color = color;

chad = Dog('Shepherd', 'Brown')
clark = Dog('Shiba Inu', 'Yellow'); #the first method has three paras but only two were passed
#the third para is the object itself

print(clark.color);
print(clark.get_breed());
print(clark.get_color());
clark.set_breed('human');
clark.set_color('white');
print(clark.get_breed());
print(clark.get_color());
print(chad.get_breed());

class SchoolStudents:
    def __init__(self, name, age, grade):
        self.name = name;

        if (age >= 16 and age <= 21):
            self.age = age;
        else:
            print('Not a valid age');

        if (grade <= 100 and grade >= 0):
            self.grade = grade;
        else:
            print('No valid grade');

    get_age = lambda self: str(self.age) + ' years old';

    get_name = lambda self: self.name;

    get_grade = lambda self: 'grade: ' + str(self.grade);

    def set_grade(self, grade): #cannot use lambda because its assigning something
        self.grade = grade;

    def set_age(self, age):
        self.age = age;

class Course:
    let = [1, 2, 3, 4];
    def __init__(self, name, max_students):
        self.name = name;
        self.max_students = max_students;
        self.students_enrolled = [];

    def add_student(self, student):
        if (len(self.students_enrolled) < self.max_students):
            self.students_enrolled.append(student);
            return True;
        else:
            print('Course full');
            return False;
        
    get_students = lambda self: self.students_enrolled;

    get_students_name = lambda self, student: self.students_enrolled[student].name;

    get_students_age = lambda self, student: self.students_enrolled[student].age;

    get_students_grade = lambda self, student: self.students_enrolled[student].grade;  

    def average_grade(self):
        grade = 0;
        for i in range(0, len(self.students_enrolled)):
            grade += self.get_students_grade(i);
        return grade / len(self.students_enrolled);

s1 = SchoolStudents('Leon', 20, 33);
s2 = SchoolStudents('John', 19, 90);
s3 = SchoolStudents('Chad', 19, 70);
s4 = SchoolStudents('Tim', 19, 100);
s5 = SchoolStudents('lololol', 9123, 920290);

print(s1.get_grade());
print(s1.get_age());
print(s1.get_name());

'''
print(s5.get_grade());
print(s5.get_age());
error because they have no attributes
'''

course1 = Course('English', 3);
course2 = Course('Math', 20);

course1.add_student(s1);
course1.add_student(s2);
course1.add_student(s3);
course1.add_student(s4);

print(course1.students_enrolled);
print(course1.students_enrolled[0]);
print(course1.students_enrolled[0].name);
print(course1.students_enrolled[1].get_name());
print(course1.students_enrolled[1].get_age());
print(course1.students_enrolled[1].get_grade());
print(course1.get_students());
print(Course.let);
print(course1.let);

print(course1.get_students_name(0));
print(course1.get_students_age(0));
print(course1.get_students_grade(0));

print(course1.average_grade());

class Animal: 
    def __init__(self, name, age):
        self.name = name;
        self.age = age;

    to_string = lambda self: print(f"I am {self.name} and I am {self.age} years old.");

    speak = lambda self: print('?????????/');

class Cat(Animal): #inherting the animal class
    speak = lambda self: print('Moew'); #Method overriding speak

class Bird(Animal):
    speak = lambda self: print('C#');

class Fish(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age); #calls the __init__ method in the Pet class
        self.color = color;

    to_string = lambda self: print(f'I am {self.name} and I am {self.age} years old and I am {self.color}')

pet = Animal('Leon', 190);
pet.to_string();

cat = Cat('Chad', 20); #has the things in the animal and cat class
cat.to_string();

bird = Bird('John', 10);
bird.to_string();

fish = Fish('Pop', 11, 'orange');

cat.speak();
bird.speak();
pet.speak();
fish.speak();

fish.to_string();

class Person:
    people = 0;
    GRAVITY = -9.8;

    def __init__(self, name):
        self.name = name;
        Person.add_person();

    @classmethod #accessing the people var in the class
    def number_of_people(cls): #cls instead of self because its based on the class not object
        return cls.people;

    @classmethod
    def add_person(cls):
        cls.people += 1;
    


p1 = Person('Hu');
p2 = Person('Jim');
print(Person.people);
Person.add_person();
Person.add_person();
Person.add_person();
Person.add_person();
print(Person.people);

class Math:

    @staticmethod #cannot use lambda with using decorators
    def add10(x):
        return x + 10;

print(Math.add10(1));

#make constants (cannot change it)
PI = 3.14
#numeric literals are binary, decimal, octal, hexadecimal. are unchangable
#int, float, complex

q = 0b1010 #binary
w = 50 # decimal
e = 0o310 #octal
r = 0x12c #hexa
t = 3.2j;
y = 1.5e2

print(q, w, e, r, y)
print(t, t.imag, t. real)
#single line statement 
x = 1
#multi-line statement. no spaces after the backslash. its an continuation character
x = 1 + 3 + \
    3

#string literals -> seq. of chars
unicode = u'\u00dcic\u00f6de' 
raw = r"fdsfaf\n"; #ignores backslash as an escape char. treats backslash as a literal char
print(unicode, raw)
#boolean literals. True = 1, False = 0
print(True, False)
print(bool(1), bool(0))
print(bool(1 > 0)) #True
a = 1 == True
b = 1 == False
c = True + 22;
print(a, b, c)
#Special literal: None (null) it is not a type
d = None #useful for declaring a var that you dont know the date type yet
print(d)
print(type(3j))
let = [2, 3, 3]
print('hello', let[2])
print(bool(True) + 5)
print(True + 1)#it turns into a number if you need to do math
#tuples are faster than lists
#strings cannot be changed so assigning a value using an index will result in an error str[2] = '2'
#sets are unordered and can only have one element.
s = {1, 2, 3, 4, 5}
print(s)
#dictionaries are good for data. they are unordered
print(1, 2, 3, sep='*')
print(1, 2, 3, sep='*', end='1') #does not create a new line for this next print
print("I like {0} and {1}".format('tea', 'milk'))

o = '2';
print(o)
import math
print(math)
print(math.pi)
print(math.e)
print(math.sqrt(9));
from math import pi, e #no need to add math. although only pi and e.
print(math.pi)
print(math.e)
print(pi)
print(e)
#print(sqrt(9)); error
import sys
print(sys.path) #list of directory locations

#idenity operators
#is and is not are used to check if two values or vars are located in the same part of memory

x = 6
y = 6 
print(x is y)
print(x is not y)
x = 7
y = 6
print(x is y)
print(x is not y)

#membership operators
#in, not in
#used to check if a value or var is found in a seq 

let = [1, 2, 3]
print(1 in let) #works with tuples, lists, strings, dicts
let = (1, 2, 3)
print(1 in let)
print(4 not in let)
let = 'jello'
print('j' in let)
let = {1: 'one', 2: 'two'}
print(1 in let)

let = 'wrrw'
print('w' in let)

print(bool(math.pi))#True

while 1 > 2:
    print(1)
else: 
    print(2)

let = [1, 2, 3]
let[0] = [1, 2, 3]
print(let)

del let
#print(let) error
aList = [1, 2, 3, 4, 5, 6, 7]
pow2 =  [2 * x for x in aList]
print(pow2)
let = (1)
let2 = (1,) #comme for tuple
print(type(let))
print(type(let2))

#tuple constructor
let = tuple((1, 2, 3, 4))
print(let)
#cannot remove items from tuple but you can delete the entire thing
let = 1, 2, 3
print(let) #tuple
let, let2, let3 = 1, 2, 3
print(type(let)) #int
let1 = let2 = 1 #both let1 and let2 have the same value
let = {1, 2, 3, 3}
print(let) #gets rid of the extra 3
let.update([4, 5])
print(let)
let.remove(2)
print(let)
let.discard(4) 
print(let)
let.discard(12321) #no error
#let.remove(432) error
let = {1, 2, 3, 4, 5}
let.pop()
print(let) #pops the first item
let.clear() 
print(let) #also works with lists
set1 = {"Yellow", "Orange", "Black"}
set2 = {"Orange", "Blue", "Pink"}
 
set1.difference_update(set2)
print(set1)
#returns elements mot in both sets


set1 = {10, 20, 30, 40, 50}
set2 = {60, 70, 10, 30, 40, 80, 20, 50}
 
print(set1.issubset(set2))
print(set2.issuperset(set1))

if -1:
    print(1)

let = [1, 2, 3]
let.reverse()
print(let)
let = [43, 3, 2, 0, 2]
i = let.sort()
print(let) #changes orginal list
let = [43, 3, 2, 0, 2]
new_let = sorted(let)
print(let)
print(new_let)
let = [1, 2, 3] * 5
print(let)
let = [1, 2, 3]
let2 = let
let2.append(34)
print(let)
print(let2) #changes both lists because they are both referred to as the same in memory
let3 = let.copy
let3 = list(let)
let3 = let[:]
let = [1, 2, 3, 4, 4, 5]
b = [i*i for i in let] #syntax: expression and for loop
print(let)
print(let.count(2))
print(let.count(332))
let = (1, 2, 3)
let = list(let)
print(let)
let = tuple(let)
print(let)
one, two, three = let;
print(one)
print(two)
print(three)
let = (1, 2, 3, 4, 5, 6, 67)
one, *two, three = let
print(one)
print(two)
print(three)
let = {
    'helllo': 2,
    'deeee': 3,
    '223': 222
}

let.pop('deeee')
print(let)
let.popitem()
print(let)

for k, y in let.items():
    print(k, y)

print(let.items())

let = {
    'helllo': 2,
    'deeee': 3,
    '223': 222
}

let2 = {
    'hell23324lo': 22323,
    'dee424ee': 3233,
    '223233': 223232
}

let.update(let2)
print(let)
print(let2)

let = (1, 2, 3)

let = set(let)
print(let)
let.pop()
print(let)
let2 = {1, 2, 3, 4}
let.union(let2) #changes the 2nd list by combining elements
print(let)
print(let2)
let.update(let2) #changes the 1st list by combining elements
print(let)
print(let2)
let = {1, 2, 3}
let2 = {4, 2, 3}
print(let.intersection(let2))
let = frozenset([1, 2, 3])
#cannot change this set
print(let) 
let = """ 
hello \
wirkd
"""
#THE Backslash makes it one line
print(let)

from collections import Counter, defaultdict, deque, namedtuple
let = 'jelle'
my_counter = Counter(let)
print(my_counter) #prints a dict containing the number of characters for each char
print(my_counter.most_common(1)) #gives the 1st most common type
print(my_counter.most_common(2)) #gives the 2nd most common type
#returns a list with tuples
print(my_counter.most_common(1)) #gets e before l because its first in the string
print(my_counter.most_common(1)[0]) 
print(my_counter.most_common(1)[0][0]) 
print(list(my_counter.elements()))
from collections import namedtuple

Point = namedtuple('Point', 'x,y') #like a class
pt = Point(1, -4)
print(pt)

from collections import defaultdict

d = defaultdict(int)
d['a'] = 1
d['b'] = 2
print(d)
print(d[122])
#prints 0 because that is the default value of int

from collections import deque

d = deque()

d.append(1)
d.append(2)
print(d)
d.appendleft(4)
#adds 4 to the left side of the deque
print(d)
d.pop()
print(d)
d.append(2)
d.popleft()
print(d)
d.extend([3, 4, 5])
print(d) #appends to d
d.extendleft([3, 4, 5])
print(d)
d.rotate(1) #rotates a certain amount to the left
print(d)
d.rotate(-1)
print(d)

from itertools import accumulate, product

a = [1, 2]
n = [3, 4]
prod = product(a, n) #combines 1 and 3, 1 and 4, 2 and 3, and 2 and 4
print(list(prod))

prod2 = product(a, n, repeat=2)
print(list(prod2))
print('__________________________________-')
from itertools import permutations

a = [1, 2, 3]
perm = permutations(a)
print(list(perm))

perm2 = permutations(a, 2)
#length of the permutations
print(list(perm2))

from itertools import combinations, combinations_with_replacement

a = [1, 2, 3, 4] #doesnt include same number pairs like (1, 1) and things like (1, 2) and (2, 1)
comb = combinations(a, 2)
print(list(comb))

comb_wr = combinations_with_replacement(a, 2)
print(list(comb_wr)) #includes (1, 1) and so on

from itertools import accumulate
import operator

a = [1, 2, 3, 4]
acc = accumulate(a)
print(a)
print(list(acc)) #1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10

b = [2, 4, 6, 8]
print(b)
acc = accumulate(b)
print(list(acc))
print(a)
acc = accumulate(a, func=operator.mul)
print(list(acc))
a = [1, 2, 5, 3, 4]
acc = accumulate(a, func=max) #gets the max
print(list(acc))

from itertools import groupby

a = [1, 2, 3, 4]
obj = groupby(a, key=lambda x: x < 3)
for key, value in obj: #key is from the result of the func
    print(key, list(value))

from itertools import count, cycle, repeat

for i in count(10):
    print(i) #infinite loop but stops at 16
    if i == 16:
        break;
a = [1, 2, 3]


#for i in cycle(a):
   # print(i)
   #cycles 1 2 3 infinitely

'''
for i in repeat(1):
    print(i) 

    this will repeat 1 infinitely
'''

let = [(1, 2), (5, 6), (3, 4)]

let_sort = sorted(let)
print(let)
print(let_sort)

a = [1, 2, 3, 4, 5, 6]
b = map(lambda x: x * 2, a) #a is not changed
print(list(b))

c = [x*2 for x in a]
print(c)

from functools import reduce

c = filter(lambda x: x % 2 == 0, a)
print(list(c))
    #declare var, for loop, and if statement
c = [x for x in a if x % 2 == 0]
print(c)

a = [1, 2, 3, 4]
#1 * 2 = 2 then 2 * 3 = 6 then 6 * 4 is 24
b = reduce(lambda x, y: x * y, a)
print(b)

#custom error
'''
x = -2
if x < 0:
    raise Exception('22121221')
    '''

x = -5

#assert (x >= 0), 'x is not positive' |||can be used for debugging with a condition

try:
    a = 5 / 0
except ZeroDivisionError as e: #it is best practice to specify the type of error youre catching
    print(e) #'as e' does not stop the program. it just prints the message
else:
    print('everything is fine')
finally:
    print('done')

class ValueTooHighError(Exception):
    pass

def test_value(x):
    if x > 100:
        raise ValueTooHighError('VALUE is too high')

try:
    test_value(200)
except ValueTooHighError as e:
    print(e)

import logging

logging.debug('This is a debug message')
logging.info('this is an info message')
logging.warning('this is a warning message') #only warning and above is printed
logging.error('this is an error message')
logging.critical('this is a critical message')


import json

person = {"name": "John", "age": 30, 'city': 'New York', 'hasChildren': False, 'titles': 'Programmer'}

personJSON = json.dumps(person, indent=4, sort_keys=True) #turns object into a json string
#sort keys makes the string alphabetically
print(personJSON)

'''
with open('person.json', 'w') as file
    json.dump(person, file, indent=4)
'''
#creates a new file with the json string
#python dict to json object is called encoding
#vise visa is decoding

person = json.loads(personJSON)
print(person)

import random

a = random.random()
print(a) #random float

a = random.randrange(1, 10) #doesnt include 10

print(a)
let = list('fjfaksgggggggggggggggggggggdjflk')
print(let)
a = random.choice(let)

print(a)
a = random.sample(let, 3) #will never pick the same element in that index twice
print(a)

a = random.choices(let, k=3)
print(a)
a = random.shuffle(let)
print(a) #shuffles the list

random.seed(1)
print(random.random())
print(random.randint(1, 10))
random.seed(1)
print(random.random())
print(random.randint(1, 10)) #if you have the same seed it will always print the same numbers

import secrets

a = secrets.randbelow(10) #random int between 1 and 10 and 10 not included
print(a)
let = list('asdsfdsfd')
a = secrets.choice(let) #random element from the list

import statistics

let = [2, 2, 2, 4, 4, 23, 43, 4, 23, 4]
print(statistics.mean(let))
print(statistics.median(let))
#help('math')


import re #regexs

pattern = r"spam"

if re.match(pattern, "eggspamspam"): #looks at the first few letters
    print("Match")
else:
    print("No match")

if re.search(pattern, "eggspagespam"): #searches the entire string
    print("Match")
else:
    print("No match")

print(re.findall(pattern, "eggspgespam")) #finds every occurance of spam

let = 'eggs'

if re.match(let, "eggspamsausagespam"):
    print("Match")
else:
    print("No match")

let = r'dee'

match = re.search(let, 'safjkosdajaljlfjdee') #returns boolean

if match:
    print(match.group()) #prints "dee" because that is what is being matched
    print(match.start()) #prints 16 because 'dee' is at index 16
    print(match.end()) #prints 19 because thats when 'dee' ends
    print(match.span()) # (16, 19)

let = 'Hello world'

patter = r'Hello'

#repleaces 'Hello' with 'uou' in the let string. count replaces the amount of Hellos. 
#Like if there were multiple Hellos, then it would only replace the first one because of the count para
newstr = re.sub(patter, 'uou', let, count=1)
print(newstr)

#metacharacters
#they allow you to match with any char
pattern = r'gr.y' #. matches with a char in that place

if re.match(pattern, 'grey'):
    print('Match')


    


