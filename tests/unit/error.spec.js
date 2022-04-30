import { shallowMount } from "@vue/test-utils";
import Error from "@/components/steps/Error.vue";

describe("Error Component", () => {

  it("renders ok button", () => {
    const wrapper = shallowMount(Error);
    const ok = wrapper.find(".btn-ok");
    expect(ok.exists()).toBe(true);
  });
  
});
