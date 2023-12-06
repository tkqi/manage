/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)


const router = new VueRouter({
  routes: routes
})

router.afterEach((to, from)=>{
  document.title = to.meta.title;
})

// 暴露router实例
export default router