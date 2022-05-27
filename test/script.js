const jsDataContract = require('js-datacontract');
const { testData } = require('./data/testData');
const { testDataT } = require('./types/testDataT');

console.log(jsDataContract(testData, testDataT));