import Vue from 'vue'
import Router from 'vue-router'
import outpatientMain from '../components/outpatientMain.vue'
import userFiling from '../components/userFiling.vue'
import appointDoc from '../components/appointDoc.vue'
import outpatientMainToday from '../components/outpatientMainToday.vue'
import appointChoice from '../components/appointChoice.vue'


Vue.use(Router);

export default new Router({
  routes: [
   {
      path: '/',
      name: 'appointChoice',
      component: appointChoice
   },
  	{
      path: '/outpatientMain',
      name: 'outpatientMain',
      component: outpatientMain
   },
   {
      path: '/userFiling',
      name: 'userFiling',
      component: userFiling
   },
   {
      path: '/appointDoc',
      name: 'appointDoc',
      component: appointDoc
   },
   {
      path: '/outpatientMainToday',
      name: 'outpatientMainToday',
      component: outpatientMainToday
   }
  ]
})
