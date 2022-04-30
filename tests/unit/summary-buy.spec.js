import { shallowMount } from "@vue/test-utils";
import SummaryBuy from "@/components/steps/SummaryBuy.vue";

describe("SummaryBuy Component", () => {

  it("correct summary", () => {
    const wrapper = shallowMount(SummaryBuy, {
      propsData: {
        info: {
          name: "Wang",
          age: 30,
          country: 0,
          package: 1,
        },
      },
    });

    expect(wrapper.html().includes("Wang")).toBe(true);
    expect(wrapper.html().includes("30")).toBe(true);
    expect(wrapper.html().includes("Hong Kong")).toBe(true);
    expect(wrapper.html().includes("Safe")).toBe(true);
    expect(wrapper.html().includes("450HKD")).toBe(true);
  });
  
});
