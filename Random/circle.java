public class Circle {
	private double radius;
	
	public Circle() {
		radius = 1.0;
	}
	
	public Circle(double r) {
		radius = r;
	}
	
	public double getRadius() {
		return radius;
	}
	
	public void setRadius(double r) {
		radius = r;
	}
	
	public boolean isEqual(Circle other) {
		return (radius == other.radius);
	}
	
	public String toString() {
		return "The radius of the circle is " + radius;
		
	}
	
	public double circumference() {
		return 2 * 3.14 * radius;
	}
	
	public double area() {
		return (radius * radius) * 3.14;
	}
	
}
