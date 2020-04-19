import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import SR from './views/SR'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/index' },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                { path: '/SR', name: 'SR', component: SR },
            ]
        },
    ]
})

export default router;