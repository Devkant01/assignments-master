// 1.counter (2-8)
// var counter = 0;
// function incrementCounter() {
//     counter += 1;
//     console.log(counter);
    
// }
// setInterval(incrementCounter, 1000);

// 2.counter without using setInterval(11-21)
// var counter = 0;
// function incrementCounter(func) {
    
//     counter++;
//     console.log((counter));
//     setTimeout(function () {
//         func(incrementCounter)
//     }, 1000);
// }

// incrementCounter(incrementCounter);

// 3.read-from-file(24-32)
// const fs = require("fs");
// fs.readFile("./a.txt", "utf-8", function (err, data) {
//     if (err) {
//         console.log("Something went wrong: ", err);
//     }
//     else {
//         console.log("File content: ",data);
//     }
// })

// 4.write-to-file
const fs = require("fs");
const data = "\nThis content has been added through `fs` module";
fs.appendFile('b.txt', data, (err) => {   //inseted writeFile i'm using appendFile
    if (err) {
        console.log("Something went wrong: ", err);
    }
    else {
        console.log("File updated successfully");
        
    }
})