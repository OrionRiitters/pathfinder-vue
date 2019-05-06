const geocode = require('./geocode-api');

asdf = geocode('Little falls', 'MN')
    .then(
        res => {
            console.log(res);
        });
