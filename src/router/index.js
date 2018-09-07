import Vue from 'vue'
import Router from 'vue-router'
import MyCV from '@/components/MyCV'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MYCV',
      component: MyCV
    }
  ]
})
