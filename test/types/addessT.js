const addressT = {
    city: {
        type: 'string',
        isRequired: true
    },
    state: {
        type: 'string',
        isRequired: true
    },
    country: {
        type: 'string',
        isRequired: true
    },
    zip: {
        type: 'number',
        isRequired: true
    }
};

module.exports.addressT = addressT;
