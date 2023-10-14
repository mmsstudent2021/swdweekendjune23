// const student1 = {
//   name: "Kyaw Kyaw",
//   age: 15,
//   township : "bahan",
//   major: "web",
//   learn() {
//     return this.name + " can learn";
//   },
//   study() {
//     return this.name + " can study";
//   },
// };

// const student2 = {
//     name: "Zaw Zaw",
//     age: 15,
//     township: "hlaing" ,
//     major: "web",
//     learn() {
//       return this.name + " can learn";
//     },
//     study() {
//       return this.name + " can study";
//     },
//   };

// console.log(student1);
// console.log(student2);

class Student {
  static schoolName = "MMS IT";

  #majors = [
    {
      id: 1,
      title: "Web",
      subjects: ["Frontend", "Backend"],
    },
    {
      id: 2,
      title: "App",
      subjects: ["Design", "Api"],
    },
  ];

  constructor(name, age, gender, township, major) {
    // data  initialization
    this.name = name;
    this.age = age;
    this.township = township;
    this.major = major;
    this.gender = gender;
    this.fullName = (this.gender === "male" ? "Mg" : "Ma") + " " + this.name;
    this.birthYear = 2023 - this.age;
  }

  subjects() {
    return (
      this.name +
      " will learn " +
      this.#majors.find((m) => m.title === this.major).subjects
    );
  }

  learn() {
    return this.name + " can learn";
  }

  study() {
    return this.name + " can study";
  }

  static smile() {
    return "student will smile";
  }
}

// class => obj (instance ဆောက် | instantiate)

// console.log(Student.schoolName);
// console.log(Student.smile());

// const st1 = new Student("Kyaw Kyaw", 15, "male", "Bahan", "Web");
// const st2 = new Student("Su Su", 14, "female", "Hlaing", "App");
// const st3 = new Student("Zaw Zaw", 13, "male", "tamwe", "App");

// console.log(st1);
// console.log(st2);
// console.log(st3);

// console.log(st1.schoolName);
// // console.log(st1.#majors);
// console.log(st1.subjects());

// console.log(st2.subjects());
// console.log(st1.learn());
// console.log(st1.study());

// console.log(x);
// let x = 5;

class A {
  a = "aaa";
  b = "bbb";
  #c = "ccc";
}

class B extends A {
  x = "xxx";
  y = "yyy";
  z = "zzz";
  run(){
    return this.#c;
  }
}

class C extends B {}

const a = new A();
console.log(a);
const b = new B();
console.log(b);
console.log(b.run());
const c = new C();
console.log(c);
