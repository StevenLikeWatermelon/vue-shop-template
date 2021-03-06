import Vue from 'vue'
import VueRouter from 'vue-router'
import Frame from '@/layout/Frame.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'frame',
    redirect: '/guide',
    component: Frame,
    children: [
      {
        path: '/guide',
        name: 'guide',
        hiddden: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/guide/index.vue')
      },
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/Home.vue')
      },
      {
        path: '/search',
        name: 'search',
        meta: {
          title: '搜索'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/search/index.vue')
      },
      {
        path: '/detail',
        name: 'detail',
        meta: {
          noTop: true,
          title: '商品详情'
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
          noTop: true,
          title: '订单详情'
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
          noTop: true,
          title: '订单提交成功'
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
          noTop: true,
          title: '结算单'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/pay/index.vue')
      },
      {
        path: '/myOwnOrder',
        name: 'myOwnOrder',
        meta: {
          noTop: true,
          title: '我的订单'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/myOwnOrder/index.vue')
      },
      {
        path: '/invoiceInfo',
        name: 'invoiceInfo',
        meta: {
          noTop: true,
          title: '发票信息'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/invoiceInfo/index.vue')
      },
      {
        path: '/invoiceOperate',
        name: 'invoiceOperate',
        meta: {
          noTop: true,
          title: '开票操作'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/invoiceOperate/index.vue')
      },
      {
        path: '/invoiceApply',
        name: 'invoiceApply',
        meta: {
          noTop: true,
          title: '开票申请'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/invoiceApply/index.vue')
      },
      {
        path: '/myCar',
        name: 'myCar',
        meta: {
          noTop: true,
          title: '我的购物车'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/myCar/index.vue')
      },
      {
        path: '/sendAdress',
        name: 'sendAdress',
        meta: {
          noTop: true,
          title: '收货地址'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/sendAdress/index.vue')
      },
      {
        path: '/componeyInfo',
        name: 'componeyInfo',
        meta: {
          noTop: true,
          title: '公司信息'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/componeyInfo/index.vue')
      },
      {
        path: '/myCoupon',
        name: 'myCoupon',
        meta: {
          noTop: true,
          title: '我的优惠券'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/myCoupon/index.vue')
      },
      {
        path: '/myZGB',
        name: 'myZGB',
        meta: {
          noTop: true,
          title: '我的中光币'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/myZGB/index.vue')
      },
      {
        path: '/settings',
        name: 'settings',
        meta: {
          noTop: true,
          title: '系统设置'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/settings/index.vue')
      },
      {
        path: '/modal',
        name: 'modal',
        meta: {
          noTop: true,
          title: '弹框'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/modal/index.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
