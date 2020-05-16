// Les énumérations
enum Color {
    red,
    blue,
    green
}
console.log(Color.red);
console.log(Color.blue);
console.log(Color.green);
console.log(Color[0]);

enum Color2 {
    red = 10,
    blue,
    green
}
console.log(Color2.red);
console.log(Color2.blue);
console.log(Color2.green);
console.log(Color2[11]);

enum Color3 {
    red,
    blue = 10,
    green
}
console.log(Color3.red);
console.log(Color3.blue);
console.log(Color3.green);
console.log(Color3[0]);
