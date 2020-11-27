import Vue from 'vue'
import VueRouter from 'vue-router'
import Frame from '@/layout/Frame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'frame',
    redirect: '/home',
    component: Frame,
    children: [
      {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/Home.vue')
      },
      {
        path: '/search',
        name: 'search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/search/index.vue')
      },
      {
        path: '/detail',
        name: 'detail',
        meta: {
          noTop: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/detail/index.vue')
      },
      {
        path: '/myOrder',
        name: 'myOrder',
        meta: {
          noTop: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/myOrder/index.vue')
      },
      {
        path: '/orderSuccess',
        name: 'orderSuccess',
        meta: {
          noTop: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/orderSuccess/index.vue')
      },
      {
        path: '/pay',
        name: 'pay',
        meta: {
          noTop: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/pay/index.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
