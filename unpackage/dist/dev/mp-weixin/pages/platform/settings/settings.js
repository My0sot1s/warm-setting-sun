"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _component_TabBar = common_vendor.resolveComponent("TabBar");
  (_easycom_uni_nav_bar2 + _component_TabBar)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
const _sfc_main = {
  __name: "settings",
  setup(__props) {
    const settingList = common_vendor.ref([
      {
        name: "运营商管理",
        route: ""
      },
      {
        name: "管理员设置",
        route: ""
      },
      {
        name: "服务品类管理",
        route: ""
      },
      {
        name: "退出登录",
        route: "/pages/index/index"
      }
    ]);
    function routeJump(route) {
      if (route === "/pages/index/index") {
        common_vendor.index.reLaunch({
          url: route
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          border: false,
          ["left-text"]: "管理设置"
        }),
        b: common_vendor.f(settingList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => routeJump(item.route))
          };
        }),
        c: common_vendor.p({
          centerText: "审核",
          rightText: "设置",
          centerUrl: "/pages/platform/audit/audit",
          rightUrl: "/pages/platform/settings/settings"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/platform/settings/settings.vue"]]);
wx.createPage(MiniProgramPage);
