import math;
#a
def mass_of_sphere(radius, density):
    return (4 * math.pi / 3) * density * radius ** 3;

#b
print(mass_of_sphere(1, 1));
print(mass_of_sphere(10, 1));
print(mass_of_sphere(100, 1));