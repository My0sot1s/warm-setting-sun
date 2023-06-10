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
  __name: "accompany-service",
  setup(__props) {
    const listData = [
      {
        name: "陪医就诊",
        company: "泉州微尚生活服务有限公司",
        area: "泉州市",
        avatar: "/static/accompany.jpg"
      },
      {
        name: "康复训练",
        company: "泉州市洛江区和康智慧养老产业有限公司",
        area: "洛江区",
        avatar: "/static/recovery.jpg"
      },
      {
        name: "护士上门",
        company: "厦门智宇信息技术有限公司",
        area: "丰泽区",
        avatar: "/static/nurse.jpg"
      },
      {
        name: "上门照护",
        company: "厦门智宇信息技术有限公司",
        area: "鲤城区",
        avatar: "/static/dropin.jpg"
      },
      {
        name: "上门助浴",
        company: "厦门智宇信息技术有限公司",
        area: "丰泽区",
        avatar: "/static/bath.jpg"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          border: false,
          ["left-text"]: "陪诊服务",
          fixed: true
        }),
        b: common_vendor.f(listData, (cell, k0, i0) => {
          return {
            a: "482e8ce2-1-" + i0,
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/user/accompany-service/accompany-service.vue"]]);
wx.createPage(MiniProgramPage);
