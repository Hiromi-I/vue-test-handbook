import { shallowMount } from "@vue/test-utils";
import Bilingual from "@/components/Bilingual.vue";

describe("Bilingual", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(Bilingual);

    expect(wrapper.text()).toBe("こんにちは、世界！");
  });
});
