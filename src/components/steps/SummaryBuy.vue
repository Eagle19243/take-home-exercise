<template>
  <div>
    <p class="text-3xl font-bold mb-9">Summary</p>
    <p class="mb-5">Name: {{ info.name }}</p>
    <p class="mb-5">Age: {{ info.age }}</p>
    <p class="mb-5">Where do you live: {{ countries[info.country].name }}</p>
    <p class="mb-5">Package: {{ packageLabel }}</p>
    <p class="mb-5">Premium: {{ premium }}</p>
  </div>
</template>

<script>
import { countries, premium, packages } from "@/utils";

export default {
  name: "summary-buy",
  props: {
    info: {
      name: String,
      age: Number,
      country: Number,
      package: Number,
    },
  },
  data() {
    return {
      countries: countries,
      packageLabel: packages[this.info.package].label,
    };
  },
  computed: {
    premium: function () {
      return premium(this.info.country, this.info, packages[this.info.package]);
    },
  },
};
</script>
