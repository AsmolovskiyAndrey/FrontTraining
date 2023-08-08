const fs = require("fs")

//синхронное чтение
fs.readFile('./data/data.txt', 'utf8', (error, data) => {
  console.log(data);
})
//создание папки с проверкой
fs.mkdirSync("./data/Success")
//синхронная запись
fs.writeFile('./data/Success/dataWrite.txt',"Текст с синхроонной записи",()=>{})

//асинхронное чтение
const sRead = fs.readFileSync('./data/data.txt', 'utf8')
console.log(sRead);
//асинхронная запись
fs.writeFileSync('./data/Success/dataWriteSync.txt',"Текст с асинхронной записи")


// удаление папки, файла и проверка есть ли файл
setTimeout(() => {
  // проверка есть ли такой файл
  if (fs.existsSync("./data/Success/dataWrite.txt")) {
    //удаление файла
    fs.rmSync("./data/Success/dataWrite.txt")
    console.log("delete file rmSync");
  }
}, 3000);
setTimeout(() => {
    // проверка есть ли такая папка
  if (fs.existsSync("./data/Success")) {
    console.log("такая папка есть");
    //удаление папки
    fs.rmSync("./data/Success", { recursive: true })
    console.log("delete folder rmSync");
  }
}, 6000);