// const EventEmitter =require('events');
// const event =new EventEmitter();
// event.on('myname',()=>{
//     console.log("my name is ashish yadav and i am doing btexh ");
// })
// event.emit('myname');

// it can be defined many times 
// const EventEmitter =require('events');
// const event =new EventEmitter();
// event.on('myname',()=>{
//     console.log("my name is ashish yadav and i am 21 ");
// })
// event.on('myname',()=>{
//     console.log("my name is ashish yadav and i am doing btexh ");
// })
// event.emit('myname');


// passing parameters to an event 
const EventEmitter =require('events');
const event =new EventEmitter();
event.on('myname',(fname,lname,age)=>{
    console.log(`my name is ${fname} ${lname} and i am ${age}`);

})
//name of event then parameters 
event.emit('myname',"ashish","yadav",21);