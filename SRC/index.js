// console.log("txt");
// const fs = require("fs");

// fs.readFile("./data.txt", "utf8", (error, data) => {
//   //? ассинхронно
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data); //? test text for my work
//   }
// });

const array = [
  '"asd1","asd2","asd3"',
  '"asdqwe1","asdqwe2","asdqwe3"',
  '"asdzxc1","asdzxc2","asdzxc3"',
  '"asdzxcqw1","asdzxcqw2","asdzxcqw3"',
  '"asdzxc1","asdzxc2","asdzxc3"',

]

let set = new Set()

array.forEach(element => {
  // console.log(element.split(',')[1]);
  set.add(element.split(',')[1])
});

const setToArray = Array.from(set)
setToArray.splice(0,1)

console.log(setToArray);