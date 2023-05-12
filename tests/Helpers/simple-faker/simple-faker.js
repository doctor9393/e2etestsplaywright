const firstNamesSample = require('./source-data/first-name');
const lastNamesSample = require('./source-data/last-name');


const getRandomArrayValue = arr => arr[getRandomNumber(arr.length)];
const getRandomEmail = () => {
    const fullName = getRandomFullName(firstNamesSample, lastNamesSample);
    const escapedName = fullName.toLowerCase().replace(/\s/g, '.');
    return `${formatString(escapedName)}_${getRandomNumber(50000)}@test.com`;
  };

  const getRandomFullName = function (array1, array2) {
    return `${formatString(getRandomArrayValue(array1))} ${formatString(
      getRandomArrayValue(array2),
    )}`;
  };

  const formatString = str => str.replace("'", '');

  const getRandomNumber = max => Math.floor(Math.random() * max * 10) % max;

  const phone = () => {
    let numbers = '1';
    do {
      numbers += getRandomNumber(9);
    } while (numbers.length <= 9);
    return numbers;
  };

const firstName = () => formatString(getRandomArrayValue(firstNamesSample));

const lastName = () => formatString(getRandomArrayValue(lastNamesSample));

  module.exports = {
    getRandomNumber,
    getRandomFullName,
    getRandomEmail,
    phone,
    firstName,
    lastName,
    
  };