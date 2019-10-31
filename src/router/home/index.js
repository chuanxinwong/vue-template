import layout from "@/views/home/index.vue";

const routes = {
    path: '/',
    name: 'home',
    component: layout,
    children: [{
        path: '/',
        component: () => import( /* webpackChunkName: "home.index" */ '@/views/home/index/index.vue')
    }, {
        path: 'page1',
        component: () => import( /* webpackChunkName: "home.page1" */ '@/views/home/page1/index.vue')
    }, {
        path: 'page2',
        component: () => import( /* webpackChunkName: "home.page2" */ '@/views/home/page2/index.vue')
    }]

}

export default routes