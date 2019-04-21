import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Threejsmap from '@/components/page/threejsmap'
import Openlayers from '@/components/page/openlayers'
import ReportQuery from '@/components/page/reportQuery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/threejsmap',
      component: Threejsmap
    }, {
      path: '/openlayers',
      component: Openlayers
    }, {
      path: '/reportquery',
      component: ReportQuery
    }
  ]
})
