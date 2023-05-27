"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _component_SunButton = common_vendor.resolveComponent("SunButton");
  const _component_TabBar = common_vendor.resolveComponent("TabBar");
  (_easycom_uni_nav_bar2 + _component_SunButton + _component_TabBar)();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      ["left-icon"]: "person",
      shadow: true,
      border: false,
      fixed: true,
      ["right-text"]: "帮助"
    }),
    b: common_vendor.p({
      text: "家政服务 >"
    }),
    c: common_vendor.p({
      text: "陪诊服务 >"
    }),
    d: common_vendor.p({
      text: "心理关怀 >"
    }),
    e: common_vendor.p({
      text: "健康数据 >"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/choose-service/choose-service.vue"]]);
wx.createPage(MiniProgramPage);
