import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Settings from './views/Settings.vue';
import Calculator from './views/Calculator.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator,
    },
  ],
});
