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

    //console.log("Entrei router.js")
    var cookie = VueCookies.get(cookie_name)
    if (cookie == null) {
        VueCookies.set(cookie_name,{
            "authenticated": false
        })
        cookie = VueCookies.get(cookie_name)
        console.log ("Cookie é null")
    } 

    //console.log(to.name)
    //console.log (cookie)

    if (cookie.authenticated == false & to.path != '/login' ) {
        router.push({ path: '/login' })
    }
    //else {
    //    console.log("Entrei router.js2")
    //    console.log("Usarname é na router.js " + cookie.username)
    //}
   /*
    console.log(to)
    console.log(from)
    console.log(next)

    console.log("fim router.js")
    */

    next()
  })

export default router;
