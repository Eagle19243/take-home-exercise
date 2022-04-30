<template>
  <div>
    <p class="text-3xl font-bold mb-9">Hello There!</p>
    <p class="mb-5">
      Let's buy some insurance. It is going to take only a few steps
    </p>
    <button
      @click="start"
      class="text-center bg-gray-800 border border-gray-800 text-white px-8 py-1 mt-5 mb-5 rounded m-3 btn-start"
    >
      Start
    </button>
  </div>
</template>

<script>
export default {
  name: "welcome",
  methods: {
    start() {
      this.$emit("start");
    },
  },
};
</script>
