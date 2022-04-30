import Vue from "vue";
import VueRouter from "vue-router";
import FormWizard from "@/components/FormWizard.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "form-wizard",
      component: FormWizard,
    },
  ],
});
