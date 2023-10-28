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

// class Student {
//   static schoolName = "MMS IT";

//   #majors = [
//     {
//       id: 1,
//       title: "Web",
//       subjects: ["Frontend", "Backend"],
//     },
//     {
//       id: 2,
//       title: "App",
//       subjects: ["Design", "Api"],
//     },
//   ];

//   constructor(name, age, gender, township, major) {
//     // data  initialization
//     this.name = name;
//     this.age = age;
//     this.township = township;
//     this.major = major;
//     this.gender = gender;
//     this.fullName = (this.gender === "male" ? "Mg" : "Ma") + " " + this.name;
//     this.birthYear = 2023 - this.age;
//   }

//   subjects() {
//     return (
//       this.name +
//       " will learn " +
//       this.#majors.find((m) => m.title === this.major).subjects
//     );
//   }

//   learn() {
//     return this.name + " can learn";
//   }

//   study() {
//     return this.name + " can study";
//   }

//   static smile() {
//     return "student will smile";
//   }
// }

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

// class A {
//   a = "aaa";
//   b = "bbb";
//   #c = "ccc";
// }

// class B extends A {
//   x = "xxx";
//   y = "yyy";
//   z = "zzz";
//   run(){
//     return this.#c;
//   }
// }

// class C extends B {}

// const a = new A();
// console.log(a);
// const b = new B();
// console.log(b);
// console.log(b.run());
// const c = new C();
// console.log(c);

// class Person {
//   constructor(name, gender, birthYear) {
//     this.name = name;
//     this.gender = gender;
//     this.birthYear = birthYear;
//     this.namePrefix = this.gender === "male" ? "Mg" : "Ma";

//   }
//   intro(){
//     return `My name is ${this.name} and ${2023 - this.birthYear} years old`
//   }
// }

// const p1 = new Person("Kyaw Kyaw", "male", 1998);
// const p2 = new Person("Su Su", "female", 1995);

// console.log(p1);
// console.log(p2);

// class Student extends Person {
//   //schoolName,major
//   constructor(name, gender, birthYear, schoolName, major) {
//     super(name, gender, birthYear);
//     this.schoolName = schoolName;
//     this.major = major;
//   }
// }

// const s1 = new Student("Zaw Zaw", "male", 2002, "MMS IT", "SWD");
// console.log(s1);

// class Monitor extends Student {
//   constructor(name, gender, birthYear, schoolName, major, roomNo) {
//     super(name, gender, birthYear, schoolName, major);
//     this.roomNo = roomNo;
//   }
// }

// const m1 = new Monitor("Kuang Kaung", "male", 2000, "MMS IT", "SWD", "weekday");
// console.log(m1);

// class Doctor extends Person {
//   constructor(name, gender, birthYear, hospitalName) {
//     super(name, gender, birthYear);
//     this.hospitalName = hospitalName;
//   }
// }

// const d1 = new Doctor("Tun Tun", "male", 1990, "SSC");

// console.log(d1);

// const obj = {
//   a : "aaa"
// }

// console.log(obj);

// obj.a = "bb"

// console.log(obj.a);

class BankAccount {
  // balance
  #balance = 0;
  #history = [];

  // get
  checkBalance() {
    return this.#balance;
  }

  checkHistory(){
    return this.#history
  }

  

  // set

  #transition(message){
    this.#history.push(message)
  }

  deposit(amount) {
    this.#balance += amount;
    this.#transition(amount+" added")
  }

  transfer(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      this.#transition(amount+" transfer success")

      return amount + " transfer success";

    }
    return "transfer fail";
  }

  receive(amount) {
    this.#balance += amount;
    this.#transition(amount+" receive success")

    return amount + "receive successful";
  }
}

const ac1 = new BankAccount();
// ac1.#balance = 1000
// console.log(ac1);

ac1.deposit(500);
ac1.deposit(1500);
ac1.deposit(2500);

console.log(ac1.transfer(200))
console.log(ac1.transfer(200))
console.log(ac1.transfer(200))

console.log(ac1.receive(500));

console.log(ac1.checkBalance());
console.table(ac1.checkHistory());
