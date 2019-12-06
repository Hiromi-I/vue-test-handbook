import { mount, shallowMount } from "@vue/test-utils"
import Vue from "vue"

const Child = Vue.component("Child", {
  name: "Child",
  template: "<div>Child component</div>"
})

const Parent = Vue.component("Parent", {
  name: "Parent",
  template: "<div><child /></div>"
})


describe("Child", () => {
  it("console child", () => {
    const shallowWrapper = shallowMount(Child)
    const mountWrapper = mount(Child)

    console.log(shallowWrapper.html())
    console.log(mountWrapper.html())
  })

  it("console parent", () => {
    const shallowWrapper = shallowMount(Parent)
    const mountWrapper = mount(Parent)

    console.log(shallowWrapper.html())
    console.log(mountWrapper.html())
  })
})
