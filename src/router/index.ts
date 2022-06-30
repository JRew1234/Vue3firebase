import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import VerifyPage from "../views/VerifyPage.vue";
import TestLayout from "../views/TestLayout.vue";
import FormView from "../views/FormView.vue";
import { useAuthStore } from "@/store/useAuth";
import { storeToRefs } from "pinia";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      const main = useAuthStore();
      const { isLoggedIn, isVerified } = storeToRefs(main);
      if (!isLoggedIn.value) {
        next("/login");
      } else if (isLoggedIn.value && !isVerified) {
        next("/verify");
      } else next();
    },
  },

  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/verify",
    name: "verify",
    component: VerifyPage,
    beforeEnter: (to, from, next) => {
      const main = useAuthStore();
      const { isLoggedIn, isVerified } = storeToRefs(main);
      if (!isLoggedIn.value) {
        next("/login");
      } else next();
    },
  },
  {
    path: "/layout",
    name: "layout",
    component: TestLayout,
  },
  {
    path: "/form",
    name: "form",
    component: FormView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
