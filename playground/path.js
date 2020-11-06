const path = require('path');

console.log(path.join('node','project1'));

console.log(path.normalize('../../node/../modules'));

console.log(path.resolve('../../node/../modules'));