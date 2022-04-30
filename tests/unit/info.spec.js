import { shallowMount } from "@vue/test-utils";
import Info from "@/components/steps/Info.vue";

describe("Info Component", () => {

  it("renders input elements", () => {
    const wrapper = shallowMount(Info, {
      propsData: {
        info: {
          name: "",
          age: null,
          country: 0,
          package: 0,
        },
      },
    });

    const name = wrapper.find("#name");
    expect(name.exists()).toBe(true);

    const age = wrapper.find("#age");
    expect(age.exists()).toBe(true);

    const country = wrapper.find("#country");
    expect(country.exists()).toBe(true);

    const pack = wrapper.find("#package");
    expect(pack.exists()).toBe(true);
  });

  it("calculate premium", () => {
    const wrapper = shallowMount(Info, {
      propsData: {
        info: {
          name: "Wang",
          age: 30,
          country: 0,
          package: 1,
        },
      },
    });

    expect(wrapper.html().includes("450HKD")).toBe(true);
  });

  it("calculate package value", () => {
    const wrapper = shallowMount(Info, {
      propsData: {
        info: {
          name: "Wang",
          age: 30,
          country: 0,
          package: 1,
        },
      },
    });

    expect(wrapper.html().includes("(+150HKD 50%)")).toBe(true);
  });
  
});
