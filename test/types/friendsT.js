const { vaccinationInfoT } = require("./vaccinationInfoT");

const friendsT = {
    id: {
        type: 'number',
        isRequired: true
    },
    name: {
        type: 'string',
        isRequired: true
    },
    favoriteNumbers: {
        type: 'array',
        isRequired: true,
        typeT: 'number'
    },
    isVaccinated: {
        type: 'boolean',
        isRequired: true
    },
    vaccinationInfo: {
        type: 'object',
        isRequired: true,
        typeT: vaccinationInfoT
    }
};

module.exports.friendsT = friendsT;
