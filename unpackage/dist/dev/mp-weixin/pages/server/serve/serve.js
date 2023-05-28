"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _component_SunButton = common_vendor.resolveComponent("SunButton");
  const _component_TabBar = common_vendor.resolveComponent("TabBar");
  (_easycom_uni_nav_bar2 + _component_SunButton + _component_TabBar)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
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
      text: "服务地点导航"
    }),
    c: common_vendor.p({
      text: "服务过程监管"
    }),
    d: common_vendor.p({
      text: "医疗明细上传"
    }),
    e: common_vendor.p({
      text: "申诉窗口"
    }),
    f: common_vendor.p({
      centerText: "服务",
      rightText: "我的",
      centerUrl: "",
      rightUrl: "/pages/server/my/my"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/server/serve/serve.vue"]]);
wx.createPage(MiniProgramPage);
