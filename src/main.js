// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Router from 'vue-router'
import MyCV from '@/components/MyCV'
import Contact from '@/components/Contact'
Vue.use(Router)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const Foo = { template : '<div>foo</div>'}
const Bar = { template : '<div>bar</div>'}

const routes = [
  { path: '/foo', component : Foo },
  { path: '/bar', component: Bar }
]  

/*const router = new VueRouter ({
  routes //routes: routes //== routes
})*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  routes,
  components: { App },
  template: '<App/>'
})

