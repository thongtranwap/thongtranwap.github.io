Object.defineProperty(String.prototype, "filter", {
  value: function filter(array) {
    var output = this;
    array.forEach((item) => {
      output = output.replace(item, "");
    });
    return output;
  },
  writable: true,
  configurable: true,
});

let filteredString = "This house is not nice!".filter(["not"]);
console.log(filteredString);

Array.prototype.bubbleSort = function () {
  let length = this.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = length - i; j > 0; j--) {
      if (this[j] < this[j - 1]) {
        let tmp = this[j];
        this[j] = this[j - 1];
        this[j - 1] = tmp;
      }
    }
  }
  return this;
};
console.log([6, 4, 0, 3, 1].bubbleSort());

let Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.teach = function (subject) {
  return this.name + " is now teaching" + subject;
};

const teacher = new Person();
teacher.name = "Sami Taha";

console.log(teacher.teach(" WAP"));

Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

let Student = function () {};
Student.prototype = new Person();
Student.prototype.learn = function (subject) {
  return this.name + " is taking " + subject;
};
var student = new Student();
student.initialize("Thong", 28);
console.log(student.describe());
console.log(student.learn("WAP"));
