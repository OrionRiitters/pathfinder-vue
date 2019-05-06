import axios from "axios";

const base_url = "/api/trails";
export default {
  getAllTrails() {
    return axios.get(base_url).then(res => {
      return res.data;
    });
  },

  addTrail(trail) {
    return axios.post(base_url, trail).then(res => {
      return res.data;
    });
  }
};
