import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: () => import('./App'),
      children: (r => {
        return r.keys().map(key => r(key).default);
      })(require.context('./views', true, /\/route\.js$/))
    }
  ]
})
