const required = require("./maths.js")
const { sum, sub, mul, div,dev } = require("./maths");
console.log("My Value Is ", sum(10, 22));
console.log("My Value Is ", sub(10, 22));
console.log("My Value Is ", mul(1, 2));
console.log("My Value Is ", div(11, 22));
console.log("My Name Is", dev(1, 3));
const fs = require("fs");
const { error, time } = require("console");
const { isDataView } = require("util/types");
console.log(required)
// Synch Write File Function 
fs.writeFileSync("./file.txt", "Hello WorldHi How Are You");

// Async Write File Function In Which We Have Call Back Function like Error Message
fs.writeFile("./file.txt", "Happy Independece Day", (err) => { })

// How to read a file via SYNC System ( in which we can store output in a variable )
// const result = fs.readFileSync("./file.txt", "utf-8")
// console.log(result)
// const result1 = fs.readFileSync("./contacts.txt","utf-8") 
// console.log(result1)

//  How to ready a file Via ASYNC in which it doesn't return output 
// in a variable and we need to add call back function in which two parameters pass (err,result)
//  so the result will be store in result and if the error comes so it will store in err 
//  see Example 
fs.readFile("./contacts.txt", "utf-8", (err, result3) => {
    if (err) {
        console.log("Error", err)
    } else {
        console.log(result3)
    }
});


//  How to Append Need to See Again This Topic 
fs.appendFileSync("./contacts.txt \n", new Date().getDate().toLocaleString());


//  How to Copy Any File To Another File And it will create a new file
fs.cpSync("./contacts.txt", "./copy.txt");


//  how to delete a file 
fs.unlinkSync("./copy.txt");


//  How To Check Stats Of Any File 
console.log(fs.statSync("./contacts.txt").isDirectory());
console.log(fs.statSync("./contacts.txt").isFile());

// How To create a folder 
fs.mkdirSync("My Docs/a/b",{recursive: true});