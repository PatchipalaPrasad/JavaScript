x=10;
y=20;

document.write("Initial value of x and y:"+x+","+y);
document.write("<br>");
x=x+y;
y=x-y;
x=x-y;
document.write("After swap values of x and y:"+x+","+y);
document.write("<br>");

// Area of traingle

a=10;
b=20;
document.write("Two sides of Rectangle:"+a +","+b);
document.write("<br>");
document.write("<h1 style='color:red'>Area of Recatngle:"+a*b+"</h1>");

c=23;
document.write("Enter Number Is:"+c);
first=c%10;
document.write("<br>");
c= parseInt(c/10);
sum=first+c;

document.write("<br>");
document.write("Sum of two digits of Number:"+sum );


// temperture conversion
document.write("<br>");
document.write("Celsius is "+ 50);
z=9/5*50;
 f=z+32
document.write("<br>");
document.write("after cnv of *c to *f:"+ f);
