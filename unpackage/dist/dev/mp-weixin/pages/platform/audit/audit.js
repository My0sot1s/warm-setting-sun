"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _component_TabBar = common_vendor.resolveComponent("TabBar");
  (_easycom_uni_nav_bar2 + _component_TabBar)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  (_easycom_uni_nav_bar + ApplyCell)();
}
const ApplyCell = () => "../../../components/ApplyCell.js";
const _sfc_main = {
  __name: "audit",
  setup(__props) {
    const listData = [
      {
        task: "起居照料",
        time: "2023-5-1",
        avatar: "/static/qiju.png"
      },
      {
        task: "聊天",
        time: "2023-5-1",
        avatar: "/static/liaotian.png"
      },
      {
        task: "理发",
        time: "2023-5-3",
        avatar: "/static/lifa.png"
      },
      {
        task: "助浴",
        time: "2023-5-5",
        avatar: "/static/zhuyu.png"
      },
      {
        task: "健康检查",
        time: "2023-5-6",
        avatar: "/static/jiankang.png"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          border: false,
          ["left-text"]: "申请列表",
          fixed: true
        }),
        b: common_vendor.f(listData, (cell, k0, i0) => {
          return {
            a: "52e4f432-1-" + i0,
            b: common_vendor.p({
              cellData: cell
            })
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/platform/audit/audit.vue"]]);
wx.createPage(MiniProgramPage);
