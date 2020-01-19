import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import pocetna from "./components/pocetna.vue";
import login from "./components/login.vue";
import slike from "./components/slike.vue";
import postavke from "./components/postavke.vue";



Vue.use(Buefy)
Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: pocetna
  },
  {
    path: "/login",
    component: login
  },
  {
    path: "/slike",
    component: slike
  },
  {
    path: "/postavke",
    component: postavke
  }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
