import AppLayout from 'layouts/AppLayout/index.vue';
import Races from 'pages/Races/index.vue';
import Runners from 'pages/Runners/index.vue';

const defaultRedirect = '/races';

const routes = [
  {
    path: '',
    name: 'app',
    component: AppLayout,
    redirect: defaultRedirect,
    children: [
      {
        path: '/races',
        name: 'races',
        component: Races
      },
      {
        path: '/runners',
        name: 'runners',
        component: Runners
      },
      {
        path: '/runners/:id?',
        name: 'runners_list',
        props: true,
        component: () => import('pages/Runners/RunnersList.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: defaultRedirect
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
