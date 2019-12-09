import { shallowMount } from "@vue/test-utils"
import Emitter from "@/components/Emitter.vue"

describe("Emitter", () => {
  it("２つの引数があるイベントを発火する", () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.emitEvent()
    
    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"])
  })
})