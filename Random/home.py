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
