import VueTestUtils from "@vue/test-utils"
import translations from "./src/translations.js"

const locale = "ja"

VueTestUtils.config.mocks["$t"] = (msg) => translations[locale][msg]