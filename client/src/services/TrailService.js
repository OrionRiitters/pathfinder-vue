import axios from "axios";

const db_url = "/api/db/trails";
const ext_trails_url = "api/external";

export default {
  getAllTrails() {
      return axios.get(db_url)
          .then(res => { return res.data; });
  },

  addTrail(trail) {
      return axios.post(db_url, trail)
          .then(res => { return res.data; });
  },
    findTrails(city, state) {
        return axios.get(ext_trails_url, {
            params: {
                city: city,
                state: state
            }})
            .then(res => {
                return res['data'];
            })
            .catch(err => {
                console.log(err);
               throw err;
            });
    },
    updateTrailHiked(trailUpdate) {
        return axios.patch(
            db_url,
            trailUpdate
        ).then(res => {
            return res['data'];
        })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }
};
