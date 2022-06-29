import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import VerifyPage from "../views/VerifyPage.vue";
import TestLayout from "../views/TestLayout.vue";
import FormView from "../views/FormView.vue";
import { useAuthStore } from "../store/useAuth";
import { storeToRefs, mapActions } from "pinia";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      needsAuth: true,
      needsVerification: true,
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
    meta: {
      needsAuth: true,
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

router.beforeEach((to, from, next) => {
  const main = useAuthStore();
  const { isLoggedIn, isVerified } = storeToRefs(main);
  if (to.meta.needsAuth && isLoggedIn.value === false) {
    next("/login");
  } else if (
    to.meta.needsAuth &&
    to.meta.needsVerification &&
    isLoggedIn.value === true &&
    isVerified.value === false
  ) {
    next("/verify");
  } else {
    next();
  }
});

export default router;
