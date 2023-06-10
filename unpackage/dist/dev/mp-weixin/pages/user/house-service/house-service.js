"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _component_TabBar = common_vendor.resolveComponent("TabBar");
  (_easycom_uni_nav_bar2 + _component_TabBar)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  (_easycom_uni_nav_bar + TagCell)();
}
const TagCell = () => "../../../components/TagCell.js";
const _sfc_main = {
  __name: "house-service",
  setup(__props) {
    const listData = [
      {
        name: "打扫居室",
        company: "厦门智宇信息技术有限公司",
        area: "丰泽区",
        avatar: "/static/cleanRoom.jpg"
      },
      {
        name: "打扫卫生",
        company: "泉州市洛江区和康智慧养老产业有限公司",
        area: "洛江区",
        avatar: "/static/cleanUp.jpg"
      },
      {
        name: "冰箱清洗",
        company: "厦门智宇信息技术有限公司",
        area: "鲤城区",
        avatar: "/static/refrigerator.jpg"
      },
      {
        name: "家务整理",
        company: "厦门智宇信息技术有限公司",
        area: "鲤城区",
        avatar: "/static/houseKeeping.jpg"
      },
      {
        name: "玻璃清洗",
        company: "厦门智宇信息技术有限公司",
        area: "晋江市",
        avatar: "/static/glass.jpg"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          border: false,
          ["left-text"]: "家政服务",
          fixed: true
        }),
        b: common_vendor.f(listData, (cell, k0, i0) => {
          return {
            a: "7f776c4e-1-" + i0,
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/user/house-service/house-service.vue"]]);
wx.createPage(MiniProgramPage);
