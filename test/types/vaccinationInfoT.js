const { addressT } = require("./addessT");

const vaccinationInfoT = {
    location: {
        type: 'object',
        isRequired: true,
        typeT: addressT
    }
}

module.exports.vaccinationInfoT = vaccinationInfoT;
