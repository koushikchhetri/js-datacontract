function getType (value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if(value === null) {
        return 'null';
    } else {
        return typeof value;
    }
}

function exractData (data, missingAttributes, mismatchedAttributeTypes) {
    if(data.valid === false) {
        const errors = data.errors;
        if (errors && errors.missingAttributes) {
            missingAttributes.push(...errors.missingAttributes);
        }
        if (errors && errors.mismatchedAttributeTypes) {
            mismatchedAttributeTypes.push(...errors.mismatchedAttributeTypes);
        }
    }
}

function isValidData (_receivedData, _exptectedData, objectKey, arrayIndex = 1) {
    const missingAttributes = [];
    const mismatchedAttributeTypes = [];
    
    if (typeof _exptectedData !== 'object') {
        switch (_exptectedData) {
            case 'string':
            case 'number':
            case 'boolean': {
                const eType = _exptectedData;
                const rType = typeof _receivedData;
                if (eType !== rType) {
                    mismatchedAttributeTypes.push(JSON.stringify({ name: objectKey, expected: eType, received: rType, arrayIndex }));
                }
            }
                break;
            default:
                break;
        }
    } else if(typeof _receivedData !== 'object') {
        const rType = typeof _receivedData;
        switch (rType) {
            case 'string':
            case 'number':
            case 'boolean': {
                const eType = typeof _exptectedData;
                if (eType !== rType) {
                    mismatchedAttributeTypes.push(JSON.stringify({ name: objectKey, expected: eType, received: rType }));
                }
            }
                break;
            default:
                break;
        }
    } else {
        for (const i in _exptectedData) {
            if (_exptectedData[i]) {
                const isRequired = _exptectedData[i].isRequired;
                if (isRequired) {
                    if (!(i in _receivedData)) {
                        missingAttributes.push(i);
                    } else {
                        const eType = _exptectedData[i].type;
                        const rType = getType(_receivedData[i]);
                        switch (eType) {
                            case 'string':
                            case 'number':
                            case 'boolean': {
                                if (eType !== rType) {
                                    mismatchedAttributeTypes.push(JSON.stringify({ name: i, expected: eType, received: rType }));
                                }
                            }
                                break;

                            case 'array': {
                                if (rType === 'array') {
                                    if (_exptectedData[i].typeT) {
                                        if(_receivedData[i].length > 0) {
                                            _receivedData[i].forEach((rValue, rIndex) => {
                                                const data = isValidData(rValue, _exptectedData[i].typeT, i, rIndex)
                                                exractData(data, missingAttributes, mismatchedAttributeTypes);
                                            });
                                        } else {
                                            missingAttributes.push(JSON.stringify({ name: i, expected: _exptectedData[i].typeT, received: rType}));
                                        }
                                    }
                                } else {
                                    mismatchedAttributeTypes.push(JSON.stringify({ name: i, expected: eType, received: rType}));
                                }
                            }
                                break;

                            case 'object': {
                                if (rType === eType) {
                                    const data = isValidData(_receivedData[i], _exptectedData[i].typeT, i)
                                    exractData(data, missingAttributes, mismatchedAttributeTypes);
                                } else {
                                    mismatchedAttributeTypes.push(JSON.stringify({ name: i, expected: eType, received: rType }));
                                }
                            }
                                break;
                            
                            default:
                                break;
                        }
                    }
                }
            }
        }
    }

    const errors = {};
    if (missingAttributes.length > 0) {
        errors.missingAttributes = missingAttributes;
    }
    if (mismatchedAttributeTypes.length > 0) {
        errors.mismatchedAttributeTypes = mismatchedAttributeTypes;
    }

    return ({
        valid: Object.keys(errors).length === 0,
        errors
    })
}

module.exports.isValidData = isValidData;
