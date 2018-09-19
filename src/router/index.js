import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyCV from '@/components/MyCV'
import Contact from '@/components/Contact'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mycv',
      name: 'MyCV',
      component: MyCV
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
