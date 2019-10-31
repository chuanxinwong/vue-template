import layout from "@/views/pagefoot/index.vue";

const routes = {
    path: '/foot',
    name: 'pagefoot',
    component: layout,
    children: [{
        path: '/',
        component: () => import( /* webpackChunkName: "pagefoot.index" */ '@/views/pagefoot/index/index.vue')
    }, {
        path: 'page1',
        component: () => import( /* webpackChunkName: "pagefoot.page1" */ '@/views/pagefoot/page1/index.vue')
    }, {
        path: 'page2',
        component: () => import( /* webpackChunkName: "pagefoot.page2" */ '@/views/pagefoot/page2/index.vue')
    }]

}

export default routes