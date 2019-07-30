const moment = require('moment');

const currentTimeStamp = moment().add(5, 'days');
console.log(currentTimeStamp.format('ddd MMM Do YYYY'));
console.log(Date.now());

dateOfBirth = '11112019';

console.log(new Date(Number(dateOfBirth)));
