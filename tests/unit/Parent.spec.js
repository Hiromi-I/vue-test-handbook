import { mount, shallowMount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";

describe("Parent", () => {
  it("does not render a span", () => {
    const wrapper = shallowMount(Parent);

    expect(wrapper.find("span").isVisible()).toBe(false);
  });

  it("does render a span", () => {});

  it("does not render a Child component", () => {});

  it("renders a Child component", () => {});
});
