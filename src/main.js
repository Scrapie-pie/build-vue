import Vue from 'vue';
import App from './App.vue';
import Index from './Index.vue';
import UI from './UI.vue';
import VueRouter from "vue-router";
import vueBem from '@verstaerker/vue-bem';

Vue.use(VueRouter);
Vue.use(vueBem);

const routes = [

  {
    path: "",
    component: Index,
  },
  {
    path: "/ui",
    component: UI,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
