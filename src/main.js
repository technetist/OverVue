import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App';
import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import { firebaseApp } from './firebaseApp';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/dashboard', component: Dashboard},
    {path: '/signin', component: Signin}
  ]
});

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    router.push('/dashboard')
  } else {
    router.replace('/signin');
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
