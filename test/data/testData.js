const testData = {
    id: 1,
    name: 'Koushik',
    address: {
        city: 'Bangalore',
        state: 'KA',
        country: 'IN',
        zip: 123456
    },
    favoriteGames: ['Cricket', 'TT'],
    friends: [
        {
            id: 1,
            name: 'A',
            favoriteNumbers: [1, 9],
            isVaccinated: true,
            vaccinationInfo: {
                location: {
                    city: 'Bangalore',
                    state: 'KA',
                    country: 'IN',
                    zip: 123456
                }
            }
        },
        {
            id: 2,
            name: 'B',
            favoriteNumbers: [2, 6],
            isVaccinated: false,
            vaccinationInfo: {
                location: {
                    city: 'Chennai',
                    state: 'TN',
                    country: 'IN',
                    zip: 123457
                }
            }
        }
    ]
}

module.exports.testData = testData;
