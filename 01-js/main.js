function logCheck(str) {
    // let regex = /(\d{4}-\d{2}-\d{2})\s(\d{2}:\d{2}:\d{2})\s(ERROR)\s([a-zA-z\s]+)/g;
    let regex = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) ERROR (.+)/g;
    return str == str.match(regex);
}

let logData = ['2023-01-01 12:00:00 INFO Application started',
'2023-01-01 12:01:00 ERROR Unable to connect to database',
'2023-01-01 12:02:00 WARNING Low disk space',
    '2023-01-01 12:03:00 ERROR Failed to save file'];

for (let i in logData) {
    console.log(logCheck(logData[i]));
    
}

// function emailCheck(str) {
//     let regex = /([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z.]{2,24})/g;
//     return str == str.match(regex);
// }

// let list = ["example@domain.com", "john_doe@example.co.uk", "jane.doe@subdomain.domain.com", "@no-starting-name.com", "invalid@domain", "invalid@.com"];
// for (let i in list) {
//     console.log(emailCheck(list[i]));
    
// }
// console.log(emailCheck("asdfgh@dfg.df"));

// function returnDate(str) {
//     // let regex = /[0-9-/.]+/g;  //'+' did magic
//     let regex = /(\d{2})[-/.](\d{2})[-/.](\d{4})/g;
//     let matches = str.match(regex);
//     if (!matches) return [];

//     return matches.map(date => date.replace(regex, '$1-$2-$3'));

// }

// console.log(returnDate("John's birthday is on 15-04-1992, and Jane's birthday is on 08/12/1995. They met on 02.10.1994."));