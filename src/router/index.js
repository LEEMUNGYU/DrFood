// @/router/index.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
{
path: "/",
name: 'FoodyLogin',
component: () => import('../components/FoodyLogin.vue'),
},
{
path : "/SignInUser",
name: 'SignInUser',
component: () => import('../components/SignInUser.vue'),
},
{
path: "/checkda",
name: 'checkDA',
component: () => import('../components/SignInDAcheck.vue'),
},
{
path : "/SignLast",
name: 'SignInLast',
component: () => import('../components/SignInLast.vue'),
},
{
path : "/scPW",
name: 'scPW',
component: () => import('../components/ScPW.vue'),
},
{
path: "/board",
name: 'DashBoard',
component: () => import('../components/DashBoard.vue'),
},
{
path: "/dietlist",
name: 'DietList',
component: () => import('../components/DietList.vue'),
},
{
path: "/quit",
name: 'FoodyQuit',
component: () => import('../components/FoodyQuit.vue'),
},
{
path: "/QuitComp",
name: 'QuitComp',
component: () => import('../components/QuitComp.vue'),
},
{
path: "/SignInComp",
name: 'SignInComp',
component: () => import('../components/SignInComp.vue'),
},
{
path: "/request",
name: 'FoodyRequest',
component: () => import('../components/FoodyRequest.vue'),
},
{
path: "/RequestComp",
name: 'RequestComp',
component: () => import('../components/RequestComp.vue'),
},
{
path: "/rule",
name: 'UserRule',
component: () => import('../components/UserRule.vue'),
},
{
path: "/change",
name: 'ChangeInfo',
component: () => import('../components/ChangeInfo.vue'),
},
{
path: "/changePW",
name: 'changePW',
component: () => import('../components/ChangePW.vue'),
},
{
path: "/UserInfo",
name: 'UserInfo',
component: () => import('../components/UserInfo.vue'),
},
{
path: "/changeDis",
name: 'ChangeDiseases',
component: () => import('../components/ChangeDiseases.vue'),
},
{
path: "/changeAle",
name: 'ChangeAllergy',
component: () => import('../components/ChangeAllergy.vue'),
},
{
path: "/manage",
name: 'DietManage',
component: () => import('../components/DietManage.vue'),
},
{
path: "/manage2",
name: 'DietManage2',
component: () => import('../components/DietManage2.vue'),
},
];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes,
});

export default router;