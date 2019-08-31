import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "bootstrap"
import "animate.css/animate.css"
import "bootstrap/dist/css/bootstrap.css"


Vue.use(VueRouter);
import Artikels from "./components/Artikels";
import Checkout from "./components/Checkout";

const router = new VueRouter({
  routes:[{
    path:"*",
    component: Artikels
  },
  {
    path:"/checkout",
    component: Checkout
  }
]
})
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
