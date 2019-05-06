import Vue from "vue";
import App from "./App.vue";

import TrailAPIService from "@/services/TrailService";

Vue.config.productionTip = false;

Vue.prototype.$trail_api = TrailAPIService;

new Vue({
  render: h => h(App)
}).$mount("#app");
