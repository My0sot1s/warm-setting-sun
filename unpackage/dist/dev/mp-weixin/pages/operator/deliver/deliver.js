"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _component_TabBar = common_vendor.resolveComponent("TabBar");
  (_easycom_uni_nav_bar2 + _component_TabBar)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  (_easycom_uni_nav_bar + ServerCell)();
}
const ServerCell = () => "../../../components/ServerCell.js";
const _sfc_main = {
  __name: "deliver",
  setup(__props) {
    const listData = [
      {
        name: "王XX",
        ability: "家政",
        avatar: "/static/qiju.png"
      },
      {
        name: "吴XX",
        ability: "聊天",
        avatar: "/static/liaotian.png"
      },
      {
        name: "陈XX",
        ability: "家政",
        avatar: "/static/lifa.png"
      },
      {
        name: "赵XX",
        ability: "助浴",
        avatar: "/static/zhuyu.png"
      },
      {
        name: "李XX",
        ability: "陪诊",
        avatar: "/static/jiankang.png"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          border: false,
          ["left-text"]: "服务者列表",
          fixed: true
        }),
        b: common_vendor.f(listData, (cell, k0, i0) => {
          return {
            a: "69b9f32c-1-" + i0,
            b: common_vendor.p({
              cellData: cell
            })
          };
        }),
        c: common_vendor.p({
          centerText: "派单",
          rightText: "管理",
          centerUrl: "/pages/operator/deliver/deliver",
          rightUrl: "/pages/operator/audit/audit"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/operator/deliver/deliver.vue"]]);
wx.createPage(MiniProgramPage);
