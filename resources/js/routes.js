import VueRouter from 'vue-router';
import NotFound from '../js/components/NotFound'
import Home from '../js/components/Home'
import Register from '../js/components/Register'

let routes = [
    {
        path:'/',
        component: Home,
        meta: {
            requireAuth: true,
        }
    },
    {
        path:'/register',
        component: Register,
    },
    {
        path: '*',
        component: NotFound,
    }
];

export default new VueRouter({
    routes: routes,
    mode: 'history',
    redirect: {
        '*' : '/'
    }
})
