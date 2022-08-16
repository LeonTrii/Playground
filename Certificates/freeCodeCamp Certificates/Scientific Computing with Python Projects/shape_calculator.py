class Rectangle:
    def __init__(self, width, height):
        self.width = width;
        self.height = height;

    def __str__(self): #Printing the object will print this instead.
        return 'Rectangle(width=' + str(self.width) + ', height=' + str(self.height) + ')';
    
    def set_width(self, width):
        self.width = width;
    
    def set_height(self, height):
        self.height = height;

    def get_area(self):
        return self.width * self.height;

    def get_perimeter(self):
        return 2 * self.width + 2 * self.height;

    def get_diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** .5;

    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return 'Too big for picture.';
        else:
            stars = '';
            shape_list = [];
            for i in range(0, self.height):
                for j in range(0, self.width):
                    stars += '*';
                shape_list.append(stars);
                stars = '';
                if not i - 1 == self.width:
                    shape_list.append('\n');
            return "".join(shape_list);
    
    def get_amount_inside(self, other_shape):
        if self.height >= other_shape.height and self.width >= other_shape.width:
            h = self.height // other_shape.height;
            w = self.width // other_shape.width;
            return h * w;
        else:
            return 0;

class Square(Rectangle):
    def __init__(self, side):
        self.width = side;
        self.height = side;

    def __str__(self): #Printing the object will print this instead.
        return 'Square(side=' + str(self.width) + ')';
               
    def set_side(self, side):
        self.width = side;
        self.height = side;

    def set_width(self, side):
        self.width = side;
        self.height = side;
    
    def set_height(self, side):
        self.width = side;
        self.height = side;


rect = Rectangle(10, 3);
print(rect.get_area());
print(rect.get_picture());

sqr = Square(5);
sqr.set_height(3);
print(sqr.get_area());
sqr.set_side(4);
print(sqr.get_perimeter());

print(rect);
print(sqr);
print(rect.get_amount_inside(sqr));