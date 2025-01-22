
// class QueryBuilder {
//     constructor() {
//       this.query = {};
//       this.sortOrder = {};
//       this.limitValue = null;
//     }
  
//     find(filter = {}) {
//       this.query = filter;
//       return this;  // Returning the current object for chaining
//     }
  
//     sort(order) {
//       this.sortOrder = order;
//       return this;  // Return the current object for chaining
//     }
  
//     limit(n) {
//       this.limitValue = n;
//       return this;  // Return the current object for chaining
//     }
  
//     execute() {
//       // Simulate executing the query (this would normally query a database)
//     //   console.log("Query:", this.query);
//     //   console.log("Sort Order:", this.sortOrder);
//     //   console.log("Limit:", this.limitValue);
//       // Return a mocked result
//       return Promise.resolve([{ _id: 1, content: "Example review" }]);
//     }
//   }

// //   const queryBuilder = new QueryBuilder()
// //   console.log(queryBuilder.execute())
//     // .then(result => {
//     //   console.log(result);
//     // })
//     // .catch(err => {
//     //   console.error(err);
//     // });



  
//   // Example Usage
// //   const queryBuilder = new QueryBuilder();
// //   queryBuilder.find()
// //     .sort({ _id: -1 })
// //     .limit(10)
// //     .execute()
// //     .then(result => {
// //       console.log(result);
// //     })
// //     .catch(err => {
// //       console.error(err);
// //     });




class QueryBuilder {
    constructor() {
      this.query = {};
      this.sortOrder = {};
      this.limitValue = null;
    }
  
    find(filter = {}) {
      this.query = filter;
      return this.execute();  // Automatically call execute after setting the filter
    }
  
    sort(order) {
      this.sortOrder = order;
      return this;  // Return the current object for chaining
    }
  
    limit(n) {
      this.limitValue = n;
      return this;  // Return the current object for chaining
    }
  
    execute() {
      // Simulate executing the query (this would normally query a database)
      const result = [];
  
      // Simulate some results based on the limit (if any)
      const numResults = this.limitValue || 5;  // Default to 5 if no limit set
      for (let i = 1; i <= numResults; i++) {
        result.push({ _id: i, content: `Example review ${i}` });
      }
  
      return Promise.resolve(result);  // Resolving with the result array
    }
  }
  
  // Example Usage
//   const queryBuilder = new QueryBuilder();
//   queryBuilder.find({ content: "Example review" })  // Calls execute automatically after setting filter
//     .then(result => {
//       console.log(result);  // Logs the result, which is an array of objects
//     })
//     .catch(err => {
//       console.error(err);
//     });


//     const queryBuilder = new QueryBuilder();
//     console.log(queryBuilder)


//     class Person {
//         constructor(name, age){
//             this.name = name;
//             this.age= age
//         }
//     }

//    const Shakib = new Person();
//    console.log(Shakib)

// const methods = {
//     eat() {console.log(`${this.name} is plying`)},
//     play() { console.log(`${this.name} is plying`)}
// }


// function Person(name, age){
//     const people = Object.create(methods);
//     people.name = name;
//     people.age = age;

//     return people;
// }
// const shakib =  Person('shakib', 23);
// const tamim =   Person('tamim', 23);

// console.log(tamim)



// const methods = {
//     eat(){'i am eating'}
// }


// function funck(){
//     const newObj = Object.create(methods);

//     newObj.name = "mustafizur"

//     return newObj;
// }


// const virtu = {
//     goodPlayer(){
//         console.log('he is a good player')
//     }
// }

// const shakib = Object.create(virtu);

// shakib.name = "shakib";
// shakib.age = 23;



// const methods = {
//     eat(){
//         console.log('masrafi is eating')
//     },
//     isActive: true
// }

// const person = {
//     name: 'masrafi',
//     age: 43,
// }

// Object.setPrototypeOf(person, methods)

// console.log(person.isActive)

// console.log(Object())


// console.log(Object.getPrototypeOf(o))



//  Object.prototype.mustafizur = {
//     name: 'mustafizur',
//     age: '23'
//  }

//  const Tamim = {}


// // Access its prototype and extend it
// Object.getPrototypeOf(Tamim).greet = function() {
//     console.log("Hello, I am Tamim!");
//   };
//   Object.getPrototypeOf(Tamim).age = 30;
  
//   // Now Tamim has access to the methods and properties
//   Tamim.greet(); // Outputs: Hello, I am Tamim!
//   console.log(Tamim.age); // Outputs: 30





// function Person (fname, lname){
//     this.name = fname;
//     this.lastName = lname
// }

// const taskin = new Person("taskin", "hasan")
// console.log(taskin)

// function person(){}

// console.dir(person)

// const grand = {
//     grandName: 'grand'
// }

// const parent = Object.create(grand)
// parent.parentName = 'parentName'


// const child1 = Object.create(parent)
// console.log(child1.parentName)



// inharitance

// function Person (name, age){
//   this.name = name;
//   this.age = age;
// }


// function Cricketer (name, age, type, country) {
//   Person.call(this)

//   this.name = name;
//   this.age = age;
//   this.type = type;
//   this.country = country;
// }

// Person.prototype = {
//   eat: () => {
//     console.log(`${this.name} is eating`)
//   }
// }

// Person.prototype = {
//   eat: () => {
//     console.log(`he is eating`)
//   }
// }

// Cricketer.prototype = Object.create(Person.prototype)
// Cricketer.prototype.constructor = Cricketer;

// const shakib = new Cricketer('shakib', 23, 'all-rounder', 'bangladesh')
// console.log(shakib.eat())


// const playerMethods = {
//   isplaying : () => {
//     console.log('fiz is playing')
//   },
//   isEating: () => {
//     console.log('fiz is eating')
//   },
//   isSleeping: () => {
//     console.log('fiz is sleeping')
//   }
// }



// const Player = Object.create(playerMethods)

//  Player.name = 'md Mustafizur Rahman',
//  Player.age = 23


// console.log(Player)


// function Player(name, age){
//   this.name = name;
//   this.age = age;
// }


// Player.prototype = {
//   eat: () => {
//     return `he is eating`
//   },
//   play: () => {
//     return `he is playing`
//   }
// }


// const shakib = new Player("shakib", 23);
// console.log(shakib.eat())





// function Todo() {
//   this.Todos = [];  // Initialize an empty array to store todos
// }

// Todo.prototype = {
//   create: function(nT) {  // Use a regular function instead of an arrow function
//     this.Todos.push({plan: nT});  // Add the new todo to the array
//   },

//   find: function(){
//     return this.Todos
//   },
//   removeTask(task) {
//     const index = this.Todos.indexOf(task);
//     console.log(index)
//     // if (index !== -1) {
//     //     this.Todos.splice(index, 1);
//     //     console.log(`Task "${task}" removed.`);
//     // } else {
//     //     console.log(`Task "${task}" not found.`);
//     // }
// }
// };

// const myTodo = new Todo();
// myTodo.create("eating"); 
// myTodo.create("playing"); 

// const AllTodos = myTodo.find();
// // console.log(AllTodos)

// const editTodo = myTodo.removeTask('eating');



