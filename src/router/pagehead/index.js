import layout from "@/views/pagehead/index.vue";

const routes = {
    path: '/head',
    name: 'pagehead',
    component: layout,
    children: [{
        path: '/',
        component: () => import( /* webpackChunkName: "pagehead.index" */ '@/views/pagehead/index/index.vue')
    }, {
        path: 'page1',
        component: () => import( /* webpackChunkName: "pagehead.page1" */ '@/views/pagehead/page1/index.vue')
    }, {
        path: 'page2',
        component: () => import( /* webpackChunkName: "pagehead.page2" */ '@/views/pagehead/page2/index.vue')
    }]

}

export default routes