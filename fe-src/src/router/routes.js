import AppLayout from 'layouts/AppLayout/index.vue';
import Auth from 'pages/Auth/index.vue';
import Races from 'pages/Races/index.vue';

const defaultRedirect = '/races';

const routes = [
  {
    path: '',
    name: 'app',
    component: AppLayout,
    redirect: defaultRedirect,
    children: [
      {
        path: '/auth',
        name: 'auth',
        component: Auth
      },
      {
        path: '/races',
        name: 'races',
        component: Races,
        meta: { auth: true }
      },
      {
        path: '/runners',
        name: 'runners',
        component: () => import('pages/Runners/index.vue'),
        meta: { auth: true }
      },
      {
        path: '/runners/:raceId?',
        name: 'runners_list',
        component: () => import('pages/Runners/RunnersList.vue'),
        meta: { auth: true },
        props: true
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
