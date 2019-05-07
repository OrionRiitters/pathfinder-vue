const axios = require('axios');

module.exports = function(lat, lon) {
    const url = "https://www.hikingproject.com/data/get-trails";

   const key = process.env.HIKING_PROJECT_KEY;

    try {
        return axios.get(url, {
            params: {
                lat: lat,
                lon: lon,
                maxDistance: 10,
                maxResults: 25,
                key: key
            }
        }).then(res => {
            returnable = {
                coordinates: {lat: lat, lon: lon},
                trails: res.data.trails
            };
            console.log(returnable);
            return returnable;
        }).catch(err => {
            console.error(err.stack);
            throw err;
        });
    } catch (err) {
        console.log(err);
    }
};
