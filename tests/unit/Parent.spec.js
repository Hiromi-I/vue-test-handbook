import { mount, shallowMount } from "@vue/test-utils"
import Parent from "@/components/Parent.vue"

describe("Parent", () => {
  it("does not render a span", () => {
    const wrapper = shallowMount(Parent)

    expect(wrapper.find("span").isVisible()).toBe(false)
  })

  it("does render a span", () => {
    const wrapper = shallowMount(Parent, {
      data() {
        return { showSpan: true }
      }
    })

    expect(wrapper.find("span").isVisible()).toBe(true)
  })
})