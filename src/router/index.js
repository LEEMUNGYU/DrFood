// @/router/index.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
{
path: "/",
name: 'FoodyLogin',
component: () => import('../components/FoodyLogin.vue'),
props:true,
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
path: "/RequestComp",
name: 'RequestComp',
component: () => import('../components/RequestComp.vue'),
},
];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes,
});

export default router;