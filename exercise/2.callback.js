function hello() {
  console.log("Hello World!");
}

function goodbye() {
  console.log("Goodbye Cruel World!");
}

function print(callback) {
  callback();
}

print(hello);
print(goodbye);
