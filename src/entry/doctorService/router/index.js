import Vue from "vue";
import Router from "vue-router";
import doctorLoginPage from "../components/doctorLoginPage.vue";
import doctorMenu from "../components/doctorMenu.vue";
import myRepairList from '../components/myRepairList.vue';
import repairOnline from '../components/repairOnline.vue';
import repairDetail from '../components/repairDetail.vue';
import repairSatisfaction from '../components/repairSatisfaction.vue';
import repairSatisfactionList from '../components/repairSatisfactionList.vue';
import personCenter from '../components/personCenter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "doctorLoginPage",
      component: doctorLoginPage
    },
    {
      path: "/doctorMenu",
      name: "doctorMenu",
      component: doctorMenu
    },
    {
      path: '/myRepairList',
      name: 'myRepairList',
      component: myRepairList,
      meta: {
        keepAlive: true, //此组件需要被缓存
        isBack: false 
      },
   },
   {
     path:'/repairOnline',
     name: 'repairOnline',
     component:repairOnline
   },
   {
     path:'/repairDetail',
     name:'repairDetail',
     component:repairDetail,
     meta: {
        keepAlive: false
      },
   },
   {
     path:'/repairSatisfaction',
     name:'repairSatisfaction',
     component:repairSatisfaction
   },
   {
     path:'/repairSatisfactionList',
     name:'repairSatisfactionList',
     component:repairSatisfactionList
   },
   {
     path:'/personCenter',
     name:'personCenter',
     component:personCenter
   }
  ]
});
