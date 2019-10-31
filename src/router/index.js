const config = require("../../config");

import Vue from 'vue';
import VueRouter from 'vue-router';

import layoutHome from "./home";
import layoutHead from "./pagehead";
import layoutFoot from "./pagefoot";


Vue.use(VueRouter)

const routes = [
  layoutHome,
  layoutHead,
  layoutFoot,
]

const router = new VueRouter({
  mode: 'history',
  base: config.publicPath,
  routes
})

export default router