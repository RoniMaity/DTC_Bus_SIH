import { createWebHistory,createRouter } from "vue-router";
import Schedular from "./components/schedular.vue";
import crewManager from "./components/crewManager.vue";
import busManager from "./components/busManager.vue";
import AssignCrew from "./components/AssignCrew.vue";
import RoutesBus_Details from "./components/Routes-Bus_Details.vue";
import Crewdetails from "./components/Crewdetails.vue";
import help from "./components/help.vue";
import manageCrew from "./components/manageCrew.vue";
import availablecrew from "./components/availablecrew.vue";
import AssignVehicle from "./components/AssignVehicle.vue";

const routes=[
    {
        name:'help',
        path:'/help.vue',
        component:help,
    },
    {
        name:'Schedular',
        path:'/',
        component:Schedular,
    },
    {
        name:"Crewdetails",
        path:'/Crewdetails.vue',
        component:Crewdetails,
    },
    {
        name:'crewManager',
        path:'/crewManager.vue',
        component:crewManager,
    },
    {
        name:'AssignCrew',
        path:"/AssignCrew.vue",
        component:AssignCrew,
    },
    {
        name:'busManager',
        path:'/busManager.vue',
        component:busManager,
    },
    {
        name:'RoutesBus_Details',
        path:'/Routes-Bus_Details.vue',
        component:RoutesBus_Details,
    },
    {
        name:'manageCrew',
        path:'/manageCrew.vue',
        component:manageCrew,
        
    },
    {
        name:'availablecrew',
        path:'/availablecrew.vue',
        component:availablecrew,
    },
    {
        name:'Assignvehicle',
        path:'/AssignVehicle.vue',
        component:AssignVehicle,
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;