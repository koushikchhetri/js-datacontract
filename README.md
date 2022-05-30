# js-datacontract
Data validation based on the given types.
```
const jsDataContract = require('js-datacontract');
const { testData } = require('./data/testData'); //testData actual data that has to be validated
const { testDataT } = require('./types/testDataT'); // Javascript Type of the actual data that

const validationInfo = jsDataContract(testData, testDataT);

if (validationInfo.valid) {
    //{ valid: true, errors: {} }
    //process buinsess logic
} else {
    console.log(validationInfo.errors.missingAttributes); // prints if attributes[] that are missing
    console.log(validationInfo.errors.mismatchedAttributeTypes) // prints mismatchedAttributeTypes if type mismatched

    //Example of errors
    * { valid: false, errors: { missingAttributes: [ 'id' ] } }
    *   {
        valid: false,
        errors: {
            mismatchedAttributeTypes: [ '{"name":"id","expected":"number","received":"string"}' ]
            }
        }
    *   {
        valid: false,
        errors: {
            mismatchedAttributeTypes: [ '{"name":"address","expected":"object","received":"array"}' ]
            }
        }
    *   {
        valid: false,
        errors: {
            mismatchedAttributeTypes: [
            '{"name":"favoriteNumbers","expected":"number","received":"string","arrayIndex":1}'
            ]
        }
        }
}

}
```
## Installation
npm install --save js-datacontract