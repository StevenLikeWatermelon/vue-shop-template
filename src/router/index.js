import Vue from 'vue'
import VueRouter from 'vue-router'
import Frame from '@/layout/Frame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Frame',
    redirect: '/home',
    component: Frame,
    children: [
      {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/Home.vue')
      },
      {
        path: '/search',
        name: 'Search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/search/index.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
