<template>
  <div class="w-1/2 m-auto text-left">
    <p class="text-3xl font-bold mb-9 text-center">Tell us about yourself</p>
    <div v-if="error.length > 0">
      <p class="mb-5 font-bold text-center">
        Please correct the following error:
      </p>
      <p class="mb-5 text-red-600 text-center">{{ error }}</p>
    </div>
    <div class="grid">
      <label for="name">Name</label>
      <input
        :value="info.name"
        type="text"
        name="name"
        id="name"
        class="outline outline-1 outline-gray-500 outline-none p-1 rounded mt-4 mb-4"
        @input="onChange"
      />
    </div>
    <div class="grid">
      <label for="age">Age</label>
      <input
        :value="info.age"
        type="text"
        name="age"
        id="age"
        class="outline outline-1 outline-gray-500 outline-none p-1 rounded mt-4 mb-4"
        @input="onChange"
      />
    </div>
    <div class="grid">
      <label for="name">Where do you live</label>
      <select
        v-model="selectedCountry"
        name="country"
        id="country"
        class="outline outline-1 outline-gray-500 border-r-8 border-transparent p-2 rounded mt-4 mb-4"
        @change="onChange"
      >
        <option
          v-for="country in countries"
          :value="country.id"
          :key="country.id"
        >
          {{ country.name }}
        </option>
      </select>
    </div>
    <div v-for="(p, index) in packages" :key="p.label">
      <input
        :value="index"
        :checked="info.package === index"
        type="radio"
        name="package"
        id="package"
        class="p-2 rounded mt-3 mb-3"
        @change="onChange"
      />
      <label class="ml-2">{{ pack(p) }}</label>
    </div>
    <p class="text-2xl font-bold mt-9 mb-9 text-center">
      Your premium is: {{ premium }}
    </p>
  </div>
</template>

<script>
import { countries, packages, premium, pack } from "@/utils";

export default {
  name: "info",
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
      packages: packages,
      selectedCountry: 0,
      error: "",
    };
  },
  methods: {
    onChange(e) {
      this.$emit("infoChange", {
        label: "info",
        data: {
          ...this.info,
          [e.target.name]:
            e.target.type === "radio" ? Number(e.target.value) : e.target.value,
        },
      });
    },
    pack: function (p) {
      return pack(this.selectedCountry, this.info, p);
    },
    validate: function () {
      if (this.info.name.length === 0) {
        this.error = "Invalid name";
        return false;
      }

      if ((Number(this.info.age) || 0) <= 0) {
        this.error = "Invalid age";
        return false;
      }

      return true;
    },
  },
  computed: {
    premium: function () {
      return premium(this.selectedCountry, this.info);
    },
  },
};
</script>
