const fs=require('fs');
fs.mkdirSync('thapa');
fs.writeFileSync('./thapa/bio.txt',"hii ashihs");
fs.appendFileSync('./thapa/bio.txt','  how are you ?');
let content=fs.readFileSync('./thapa/bio.txt','utf-8');
console.log(content);
fs.renameSync('./thapa/bio.txt','./thapa/mybio.txt');
