import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Find from '@/components/Find'
import Create from '@/components/Create'
import Message from '@/components/Message'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
