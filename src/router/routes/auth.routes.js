export const authRoutes = [
  {
    path: "signin",
    name: "SignIn",
    component: () => import("@/modules/auth/views/SignInView.vue"),
  },
  {
    path: "signup",
    name: "SignUp",
    component: () => import("@/modules/auth/views/SignUpView.vue"),
  },
];
