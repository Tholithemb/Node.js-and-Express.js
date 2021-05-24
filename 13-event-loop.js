
// Node.js Event Loop
console.log('first task');

console.time();

for(let i =0; i<10;i++){
    console.log(i);
}

console.timeEnd();
console.log('Task Ended');