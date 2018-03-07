function getTriangleArea(a, h) {
  if (a > 0 && h > 0) {
    return a * h / 2;
  } else {
    console.log("Wrong data");
  };
};
console.log(getTriangleArea(10, 15));
alert("The area of triangle with sides 10 and 15 is: " + getTriangleArea(10, 15));
var triangle1Area = getTriangleArea(7, 14);
var triangle2Area = getTriangleArea(6, 12);
var triangle3Area = getTriangleArea(5, 10);
console.log(triangle1Area);
alert("The area of triangle with sides 7 and 14 is: " + getTriangleArea(7, 14));
console.log(triangle2Area);
alert("The area of triangle with sides 6 and 12 is: " + getTriangleArea(6, 12));
console.log(triangle3Area);
alert("The area of triangle with sides 5 and 10 is: " + getTriangleArea(5, 10));
