import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Find from '@/components/Find';
import Create from '@/components/Create';
import Message from '@/components/Message';
import Me from '@/components/Me';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: Index
    }, {
        path: '/find',
        component: Find
    }, {
        path: '/create',
        component: Create
    }, {
        path: '/message',
        component: Message
    }, {
        path: '/me',
        component: Me
    }]
});
