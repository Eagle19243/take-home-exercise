import { shallowMount } from "@vue/test-utils";
import Welcome from "@/components/steps/Welcome.vue";

describe("Welcome Component", () => {

  it("renders start button", () => {
    const wrapper = shallowMount(Welcome);
    const start = wrapper.find(".btn-start");
    expect(start.exists()).toBe(true);
  });

});
