import { shallowMount } from "@vue/test-utils"
import SubmitButton from "@/components/SubmitButton.vue"

describe("SubmitButton", () => {
  it("権限がない状態のメッセージを表示する", () => {
    const msg = "送信する"
    const wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg: msg
      }
    })

    console.log(wrapper.html())

    expect(wrapper.find("span").text()).toBe("権限がありません")
    expect(wrapper.find("button").text()).toBe("送信する")
  })
})