const fs = require("fs")

//синхронное чтение
fs.readFile('./data/data.txt', 'utf8', (error, data) => {
  console.log(data);
})
//синхронная запись
fs.writeFile('./data/dataWrite.txt',"Текст с синхроонной записи",()=>{})

//асинхронное чтение
const sRead = fs.readFileSync('./data/data.txt', 'utf8')
console.log(sRead);


console.log("Текст в конце кода");