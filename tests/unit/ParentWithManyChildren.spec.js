import { shallowMount } from "@vue/test-utils"
import ParentWithManyChildren from "@/components/ParentWithManyChildren.vue"
import Child from "@/components/Child.vue"

describe("ParentWithManyChildren", () => {
  it("renders many children", () => {
    const wrapper = shallowMount(ParentWithManyChildren)
  
    expect(wrapper.findAll(Child).length).toBe(3)
  })
})