<template>
  <div class="text-center pt-12">
    <div>
      <component
        :is="steps[currentStep].component"
        :info="info"
        :ref="steps[currentStep].label"
        @infoChange="updateInfo"
        @start="next"
        @init="init"
      />
      <div class="text-center" v-if="currentStep === 1 || currentStep === 2">
        <button
          @click="previous"
          class="text-center bg-white border border-gray-800 w-20 py-1 mt-5 mb-5 rounded mr-5 btn-back"
        >
          Back
        </button>
        <button
          v-on:click="next"
          class="text-center bg-gray-800 border border-gray-800 text-white w-20 py-1 mt-5 mb-5 rounded ml-5 btn-next"
        >
          {{ currentStep !== 2 ? "Next" : "Buy" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from "@/components/steps/Welcome.vue";
import Info from "@/components/steps/Info.vue";
import SummaryBuy from "@/components/steps/SummaryBuy.vue";
import Error from "@/components/steps/Error.vue";

export default {
  name: "form-wizard",
  data() {
    return {
      currentStep: 0,
      info: {
        name: "",
        age: null,
        country: 0,
        package: 0,
      },
      steps: [
        {
          component: Welcome,
          label: "welcome",
        },
        {
          component: Info,
          label: "info",
        },
        {
          component: SummaryBuy,
          label: "summary-buy",
        },
        {
          component: Error,
          label: "error",
        },
      ],
    };
  },
  methods: {
    init() {
      this.currentStep = 0;
      this.info = {
        name: "",
        age: null,
        country: 0,
        package: 0,
      };
    },
    next() {
      if (this.info.age > 100) {
        this.currentStep = 3;
        return;
      }

      if (this.currentStep === 1 && !this.$refs["info"].validate()) {
        return;
      }

      if (this.currentStep === 2) {
        this.init();
      } else {
        this.currentStep += 1;
      }
    },
    previous() {
      this.currentStep -= 1;
    },
    updateInfo(payload) {
      this.info = {
        ...this.info,
        ...payload.data,
      };
    },
    buy() {
      this.init();
    },
  },
  components: {
    Welcome,
    Info,
    SummaryBuy,
    Error,
  },
};
</script>
