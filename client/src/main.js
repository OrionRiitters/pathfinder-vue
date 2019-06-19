import Vue from "vue";
import App from "./App.vue";

import VueRouter from 'vue-router';
import router from './router';

import TrailAPIService from "@/services/TrailService";

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.prototype.$trail_api = TrailAPIService;

import "leaflet/dist/leaflet.css";

new Vue({
    render: h => h(App),
    router
}).$mount("#app");
