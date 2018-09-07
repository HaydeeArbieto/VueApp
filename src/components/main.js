// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

/*import Router from 'vue-router'
import ContactPage from '@/components/Contact'

vue.use(Router);*/




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

/*export default new Router ({
  routes: 
    {
        path: "/contact",
        name: "ContactPage",
        component: ContactPage
    }
  
})*/