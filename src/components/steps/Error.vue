<template>
  <div>
    <p class="text-3xl font-bold mb-9">Ooops</p>
    <p class="mb-5">
      Your age is over our accepted limit.
      <br />
      We are sorry but we cannot insure you now
    </p>
    <button
      class="text-center bg-gray-800 border border-gray-800 text-white w-20 py-1 mt-5 mb-5 rounded btn-ok"
      v-on:click="init"
    >
      OK :(
    </button>
  </div>
</template>

<script>
export default {
  name: "error",
  methods: {
    init() {
      this.$emit("init");
    },
  },
};
</script>
