import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import AdminPanel from "../views/AdminPanel.vue";
import TaskCreate from "../views/TaskCreate.vue";
import TaskList from "../views/TaskList.vue";
import UserList from "../views/UserList.vue";
import Materials from "../views/Materials.vue";
import MaterialsDayOne from "../views/MaterialsDayOne.vue";
import MaterialsDayTwo from "../views/MaterialsDayTwo.vue";
import MaterialsDayThree from "../views/MaterialsDayThree.vue";
import MaterialsDayFour from "../views/MaterialsDayFour.vue";
import MaterialsDayFive from "../views/MaterialsDayFive.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin-panel",
    name: "AdminPanel",
    component: AdminPanel,
    children: [
      {
        path: 'create-task',
        component: TaskCreate,
      },
      {
        path: 'list-task',
        component: TaskList,
      },
      {
        path: 'list-user',
        component: UserList,
      }
    ],
  },
  {
    path: "/materials",
    component: Materials,
    children: [
      {
        path: 'day-1',
        component: MaterialsDayOne,
      },
      {
        path: 'day-2',
        component: MaterialsDayTwo,
      },
      {
        path: 'day-3',
        component: MaterialsDayThree,
      },
      {
        path: 'day-4',
        component: MaterialsDayFour,
      },
      {
        path: 'day-5',
        component: MaterialsDayFive,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
