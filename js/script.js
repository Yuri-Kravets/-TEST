/*let i = 1;
while (i <= 100) {
	console.log(i);
	i++;
}
for (let i = 50; i >= 0; i--) {
	console.log(i);
}
*/
/*for (let i = 1; i <= 100; i++) {
  console.log(i);
}
let i = 11;
while (i <=33) {
  console.log(i);
  i++
}
for (let i = 11;i <= 33;i++) {
  console.log(i);
}
let i = 1;
while (i < 100) {
    if (i % 2 === 0) {
      console.log(i); 
    }
  i++; 
} 
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
for (let i = 1; i <= 100; i++) {  
}
*/
/*
let ladder = {
  step: 0,
  up: function() {
    this.step++;
    return this;
  },
  down: function() {
    this.step--;
    return this;
  },
  showStep: function() { 
    alert( this.step );
    return step;
  }
};
console.log(ladder.showStep());
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.down();
ladder.showStep();
ladder.up().up().down().showStep();
*/


// function hello() {
//     console.log('hello',this);
// }

// const person = {
//     name: 'Yuri',
//     age: 35,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function(job,phone) {
//         console.group(`${this.name} info:`)
//         console.log(`name is ${this.name}`);
//         console.log(`age is ${this.age}`);
//         console.log(`job is ${job}`);
//         console.log(`phone is ${phone}`);
//         console.groupEnd()
//     }
// }
// const natko = {
//     name: 'Natko',
//     age: 39
// }
// const kost = {
//     name: 'Kostya',
//     age: 33
// }
// hello();
// person.logInfo('front end developer','8-34-23432423');
// const fnNatkoInfoLog = person.logInfo.bind(natko,'projekt manager','8-234-4355')();
// const fnKostyaInfoLog = person.logInfo.bind(kost,'doctor','8-342343-4323')();
// person.logInfo.call(natko,'projekt manager','8-234-4355');

// const array = [1,2,3,4,5,6];

// function multBy(arr,n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }
// console.log(multBy(array,15));

// Array.prototype.multBy = function(n) {
//     console.log('multBy',this);
//     return this.map(function(i) {
//         return i * n
//     })
// }
// console.log(array.multBy(20));

bind
// const person = {
//     name: 'Yuri'
// }

// function info(phone,email) {
//     console.log(`Имя ${this.name},Тел: ${phone}, Email: ${email}`);
// }
//demo
//info.bind(person)('2-21-4-4','sdf@Medt.com');
//info.bind(person,'2-21-4-4')('sdf@Medt.com');
//info.bind(person,'2-21-4-4','sdf@Medt.com')();

// 1 вариант
/*function bind(fn,context, ...rest) {
    return fn.bind(context, ...rest)
}

bind(info, person)('2-21-4-4','sdf@Medt.com');
bind(info, person,'2-21-4-4')('sdf@Medt.com');
bind(info, person,'2-21-4-4','sdf@Medt.com')();
*/
// 2 вариант
// function bind(fn,context, ...rest) {
//     return function(...args) {
//       const uniqId = Date.now().toString();
      
//       context[uniqId] = fn;

//       const result = context[uniqId](...rest.concat(args));

//       delete context[uniqId]

//       return result;
//     }
// } 

// bind(info, person)('2-21-4-4','sdf@Medt.com');
// bind(info, person,'2-21-4-4')('sdf@Medt.com');
// bind(info, person,'2-21-4-4','sdf@Medt.com')();
// console.log(person); 
//3 вариант
// function bind(fn, context, ...rest) {
//     return function(...args) {
//         return fn.call(context, ...rest.concat(args));
//     }
// }

// bind(info, person)('2-21-4-4','sdf@Medt.com');
// bind(info, person,'2-21-4-4')('sdf@Medt.com');
// bind(info, person,'2-21-4-4','sdf@Medt.com')();

// function call(fn, context, ...args) {
//     const uniqId = Date.now().toString();
      
//       context[uniqId] = fn;

//       const result = context[uniqId](...args);

//       delete context[uniqId]

//       return result;
    
// }
// call(info, person,'2233','call@mail.ru');

// flat
// const selfFlat = function (depth = 1) {
//     let arr = Array.prototype.slice.call(this)
//     if (depth === 0) return arr
//     return arr.reduce((pre, cur) => {
//         if (Array.isArray(cur)) {
//             return [...pre, ...selfFlat.call(cur, depth - 1)]
//         } else {
//             return [...pre, cur]
//         }
//     }, [])
// }

// Array.prototype.selfFlat = selfFlat;