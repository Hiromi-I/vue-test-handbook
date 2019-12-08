import flushPromises from "flush-promises"
import { shallowMount } from "@vue/test-utils"
import FormSubmitter from "@/components/FormSubmitter.vue"

let url = ""
let data = ""

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url
      data = _data
      resolve()
    })
  }
}

describe.skip("FormSubmitter", () => {
  it("フォームを更新するとお知らせを表示", () => {
    const wrapper = shallowMount(FormSubmitter)

    wrapper.find("[data-username]").setValue("alice")
    wrapper.find("form").trigger("submit.prevent")

    expect(wrapper.find(".message").text()).toBe("aliceさん、お問い合わせ、ありがとうございます。")
  })
})

describe("FormSubmitter", () => {
  it("フォームを更新するとお知らせを表示", async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp
      }
    })

    wrapper.find("[data-username]").setValue("alice")
    wrapper.find("form").trigger("submit.prevent")

    await flushPromises()

    expect(wrapper.find(".message").text()).toBe("aliceさん、お問い合わせ、ありがとうございます。")
    expect(url).toBe("/api/v1/register")
    expect(data).toEqual({ username: "alice" })
  })
})