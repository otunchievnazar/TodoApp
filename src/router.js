import { createRouter } from 'vue-router'
//import Router from 'vue-router'
import Home from '@/views/Home'

//Vue.use(createRouter)
const app = createApp(App)

app.mount('#app')

const router = createRouter ({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        }
    ]
})

export default router

// export default new Router({
//    mode: 'history',
//    routes: [
//        {
//            path: '/',
//            component: Home
//        },
//        {
//            path: '/todos',
//            component: () => import('./views/Todos.vue')
//        }
//    ]
// })