"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _component_TabBar = common_vendor.resolveComponent("TabBar");
  _component_TabBar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      centerText: "服务",
      rightText: "我的",
      centerUrl: "/pages/user/choose-service/choose-service",
      rightUrl: "/pages/user/my/my"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6f139b72"], ["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/user/my/my.vue"]]);
wx.createPage(MiniProgramPage);
