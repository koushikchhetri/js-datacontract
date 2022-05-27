const { testData } = require("../data/testData");
const { addressT } = require("./addessT");
const { friendsT } = require("./friendsT");

const testDataT = {
    id: {
        type: 'number',
        isRequired: true
    },
    name: {
        type: 'string',
        isRequired: true
    },
    address: {
        type: 'object',
        isRequired: true,
        typeT: addressT
    },
    favoriteGames: {
        type: 'array',
        isRequired: true,
        typeT: 'string'
    },
    friends: {
        type: 'array',
        isRequired: true,
        typeT: friendsT
    }
};

module.exports.testDataT = testDataT;
