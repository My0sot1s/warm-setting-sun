"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "home",
      size: "30"
    }),
    b: common_vendor.p({
      type: "vip",
      size: "30"
    }),
    c: common_vendor.p({
      type: "person",
      size: "30"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/components/TabBar.vue"]]);
wx.createComponent(Component);
