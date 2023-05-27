"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_SunButton = common_vendor.resolveComponent("SunButton");
  _component_SunButton();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          text: "登录"
        }),
        b: common_vendor.p({
          text: "注册"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
