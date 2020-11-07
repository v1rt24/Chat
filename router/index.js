import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/ContactList'),
  },
  {
    path: '/contact/:id',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/ContactUserInfo'),
    props: true,
  },
  {
    path: '/chats',
    name: 'Chats',
    component: () => import(/* webpackChunkName: "chats" */ '@/views/UsersList'),
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "chat" */ '@/views/UserChat'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
