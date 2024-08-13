const fs = require("fs");
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("something went wrong: ", err);
    } else {
        console.log('data: ', data.replace(/\s+/g, ' ')); 
        fs.writeFile('file.txt', data.replace(/\s+/g, ' '), (err) => {
            if (err) {
                console.log("something went wrong: ", err);
            }
            else {
                console.log("Done: file content updated");
                
            }
        })
    }
})
// console.log('str: ', str)
// str = str.split(' ').join('');
// fs.writeFile('file.txt', str, (err) => {
//     if (err) {
//         console.log("something went wrong: ", err);
//     }
//     else {
//         console.log("Done: updated the file");
//         console.log(str);
        
        
//     }
// })