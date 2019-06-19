const axios = require('axios')

module.exports = function(city, state) {
  const url = 'https://nominatim.openstreetmap.org/search'

  try {
    return axios
      .get(url, {
        params: {
          city: city,
          state: state,
          format: 'json',
        },
      })
      .then(res => {
        // Response's "data" key contains an array of trails
        return res.data
      })
      .catch(err => {
        console.error(err.stack)
        throw err
      })
  } catch (err) {
    console.log(err)
    throw err
  }
}
