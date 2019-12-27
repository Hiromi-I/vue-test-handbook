import flushPromises from "flush-promises";
import { shallowMount } from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter.vue";

describe.skip("FormSubmitter", () => {
  it("フォームを更新するとお知らせを表示", () => {
    const wrapper = shallowMount(FormSubmitter);

    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.find(".message").text()).toBe(
      "aliceさん、お問い合わせ、ありがとうございます。"
    );
  });
});

describe("FormSubmitter", () => {
  it("フォームを更新するとお知らせを表示", () => {});
});
