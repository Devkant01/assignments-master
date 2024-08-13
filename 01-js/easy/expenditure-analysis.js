/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   var ansObj = [];
//   var updated = false;
//   for (let i = 0; i < transactions.length; i++){
//     let spent = transactions[i]['price'];
//     let category = transactions[i]['category'];
//     updated = false;
//     for (let j = 0; j < ansObj.length; j++){
//       if (ansObj[j].category == category) {
//         ansObj[j].totalSpent += spent; 
//         updated = true;
//         break;
//       }
//     }    
//     if (!updated) {
//       ansObj.push({ category: category, totalSpent: spent });
//     }

//   }
//   return ansObj;
// }

function calculateTotalSpentByCategory(transactions) {
  const totalsByCategory = transactions.reduce((acc, { category, price }) => {
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});

  return Object.entries(totalsByCategory).map(([category, totalSpent]) => ({
    category,
    totalSpent
  }));
}

// console.log(
//  calculateTotalSpentByCategory([{
//   id: 1,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza',
//  }]));

module.exports = calculateTotalSpentByCategory;
