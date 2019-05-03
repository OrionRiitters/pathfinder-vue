import Vue from 'vue';
import App from './App.vue';

import PathfinderAPI from '@/services/PathfinderAPI';

Vue.config.productionTip = false;

Vue.prototype.$pathfinder_api = PathfinderAPI;

new Vue({
    render: h => h(App)
}).$mount('#app');
