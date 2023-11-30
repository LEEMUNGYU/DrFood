import {createRouter, createWebHashHistory} from 'vue-router';
import Home from'~/pages/Home';

export default createRouter({
  //새로고침 했을 때, '페이지를 찾을 수 없음.' 방지.
  history: createWebHashHistory(),

    //페이지구분을 위한 배열
routes :[
  {
    //페이지 경로
    path:'/',
    name:'Home',
    component: Home, 
  },
],
});
