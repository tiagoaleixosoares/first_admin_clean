import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import VueCookies from 'vue-cookies'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/LoginPage.vue')
    },
    {
        path: '/accessdenied',
        name: 'accessdenied',
        component: () => import('./pages/AccessDenied.vue')
    },
    {
        path: '/',
        name: 'app',
        meta: {
            requiresAuth: true
          },
        component: App,
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: () => import('./components/DashboardPage.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    
    const cookie_name = "pint-user"

    var cookie = VueCookies.get(cookie_name)
    if (cookie == null) {
        VueCookies.set(cookie_name,{
            "authenticated": false
        })
        cookie = VueCookies.get(cookie_name)
        console.log ("Cookie é null")
    } 

    if (cookie.authenticated == false & to.path != '/login' & to.path != '/accessdenied') {
        router.push({ path: '/login' })
    }

    next()
  })



export default router;
