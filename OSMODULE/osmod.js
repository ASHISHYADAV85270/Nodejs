const os=require("os");
console.log(os.arch());
// console.log(os.freemem());
const freMemo=os.freemem();
console.log(`${freMemo /1024 /1024 / 1024} `);
const TOMemo=os.totalmem();
console.log(`${TOMemo/ 1024 / 1024/ 1024} `);
console.log(os.hostname());
console.log(os.platform());
console.log(os.version());
console.log(os.uptime());