const axios = require('axios');

module.exports = function(lat, lon) {
    const url = "https://www.hikingproject.com/data/get-trails";

   const key = "200463900-514c8646ea713aa2db3278cd653b566f";

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
