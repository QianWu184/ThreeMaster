import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import threejsmap from '@/components/page/threejsmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'threejsmap',
          component: threejsmap
        }
      ]
    },
    {
      path: '/maps',
      component: threejsmap,
      children: [
        {
          path: 'threejsmap',
          component: threejsmap
        }
      ]
    }
  ]
})
