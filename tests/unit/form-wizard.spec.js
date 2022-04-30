import { shallowMount } from "@vue/test-utils";
import FormWizard from "@/components/FormWizard.vue";
import Welcome from "@/components/steps/Welcome.vue";
import Error from "@/components/steps/Error.vue";

describe("FormWizard Component", () => {

  it("renders back & next buttons", async () => {
    const wrapper = shallowMount(FormWizard);

    await wrapper.setData({ currentStep: 0 });
    let back = wrapper.find(".btn-back");
    let next = wrapper.find(".btn-next");
    expect(back.exists()).toBe(false);
    expect(next.exists()).toBe(false);

    await wrapper.setData({ currentStep: 1 });
    back = wrapper.find(".btn-back");
    next = wrapper.find(".btn-next");
    expect(back.exists()).toBe(true);
    expect(next.exists()).toBe(true);

    await wrapper.setData({ currentStep: 2 });
    back = wrapper.find(".btn-back");
    next = wrapper.find(".btn-next");
    expect(back.exists()).toBe(true);
    expect(next.exists()).toBe(true);
    expect(next.text().includes("Buy")).toBe(true);
  });

  it("click start button", () => {
    const wrapper = shallowMount(FormWizard, {
      data: function () {
        return {
          currentStep: 0,
        }
      }
    });

    wrapper.findComponent(Welcome).vm.$emit("start");
    expect(wrapper.vm.$data.currentStep).toBe(1);
  })

  it("click ok button", () => {
    const wrapper = shallowMount(FormWizard, {
      data: function () {
        return {
          currentStep: 3,
        }
      }
    });

    wrapper.findComponent(Error).vm.$emit("init");
    expect(wrapper.vm.$data.currentStep).toBe(0);
  })

  it("click next button", async () => {
    const wrapper = shallowMount(FormWizard, {
      data: function () {
        return {
          currentStep: 1,
        }
      }
    });

    await wrapper.find(".btn-next").trigger("click");
    expect(wrapper.vm.$data.currentStep).toBe(2);
  })

  it("click back button", async () => {
    const wrapper = shallowMount(FormWizard, {
      data: function () {
        return {
          currentStep: 1,
        }
      }
    });

    await wrapper.find(".btn-back").trigger("click");
    expect(wrapper.vm.$data.currentStep).toBe(0);
  })

});
