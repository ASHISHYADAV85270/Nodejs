const fs=require('fs');
const palak={
    name:"palak yadav",
    age:22,
    sub:"LLB",
}
const jsonData=JSON.stringify(palak);
// console.log(jsonData);

// const objData=JSON.parse(jsonData);
// console.log(objData);
fs.writeFile('json1.json',jsonData,()=>{
    console.log("done");
})

fs.readFile('json1.json','utf-8',(err,data)=>{
    console.log(data);
    const objdatapalak=JSON.parse(data);
    console.log(objdatapalak);
})