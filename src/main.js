import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalculator, faEye, faEyeSlash, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import './registerServiceWorker';

library.add(faCalculator, faEye, faEyeSlash, faCog, faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
