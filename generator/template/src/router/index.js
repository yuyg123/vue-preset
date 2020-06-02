import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../views/Home');

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: '首页',
      component: Home
    }]
});

router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name;
  }
  next();
});

export default router;
