import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Groupomania - Register',
    }
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("../components/register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../components/login.vue"),
      meta: {
        title: 'Groupomania - Login',
      }
  },
  {
    path: "/menu",
    name: "menu",
    component: () =>
      import("../components/menu.vue"),
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({ name: "login" });
      }
    },
    meta: {
      title: 'Groupomania - Menu',
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import("../components/profile.vue"),
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({ name: "login" });
      }
    },
    meta: {
      title: 'Groupomania - Profil',
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.afterEach((to) => {
  document.title = to.meta.title;
})

export default router
