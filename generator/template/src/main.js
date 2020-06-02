import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
import store from './store';

import JsonExcel from 'vue-json-excel';

Vue.use(ElementUI, { size: 'mini' });
Vue.prototype.$axios = axios;
Vue.component('downloadExcel', JsonExcel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
