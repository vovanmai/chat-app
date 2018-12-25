
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import router from './routes';

import VueRouter from 'vue-router';
Vue.use(VueRouter);


import VueAWN from "vue-awesome-notifications"
let options = {
    position: 'top-right',
    labels: {
        confirm: "Xác nhận yêu cầu"
    },
    modal: {
        okLabel: "Có",
        cancelLabel: "Không",
    },
}
Vue.use(VueAWN, options)

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(record => record.meta.requireAuth);
    const user = localStorage.getItem('user')
    if (requireAuth && user == null) {
        next('/register');
    } else if (to.path == '/register' && user !== null ){
        next('/');
    } else {
        next();
    }
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
