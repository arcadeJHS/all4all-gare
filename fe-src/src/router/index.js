import Vue from 'vue';
import VueRouter from 'vue-router';
import store from 'src/store';
import routes from './routes';

Vue.use(VueRouter);

const Router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,

  // Leave these as is and change from quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
});

Router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.auth)) {
    const authorized = store.getters['auth/authorized'];
    if (!authorized) {
      next({ path: '/auth' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default Router;
