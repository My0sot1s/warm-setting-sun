"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "SunButton",
  props: ["text"],
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.text)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-053a4d5b"], ["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/components/SunButton.vue"]]);
wx.createComponent(Component);
