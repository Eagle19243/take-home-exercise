<template>
  <form-wizard />
</template>

<script>
import FormWizard from "@/components/FormWizard.vue";

export default {
  name: "app",
  components: {
    FormWizard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
