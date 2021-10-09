import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import AsyncAwait from '../views/AsyncAwait.vue'
import bus from '../utils/bus'
import { store } from '../store/index'
// import createListView from '../views/CreateListView'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: (to, from, next) => {
        // console.log('to', to);
        console.log('from ', from);
        console.log('next', next);
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner')
          next()
         })
        .catch((error) => {
          console.log(error);
         })
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        // console.log('to', to);
        console.log('from ', from);
        console.log('next', next);
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log('fetched');
          next()
         })
        .catch((error) => {
          console.log(error);
         })
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        // console.log('to', to);
        console.log('from ', from);
        console.log('next', next);
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner')
          next()
         })
        .catch((error) => {
          console.log(error);
         })
      }
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView
    },
    {
      path: '/test',
      component: AsyncAwait
    },
  ]
}) 