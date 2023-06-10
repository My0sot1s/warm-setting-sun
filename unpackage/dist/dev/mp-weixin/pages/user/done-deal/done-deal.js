"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _component_TabBar = common_vendor.resolveComponent("TabBar");
  (_easycom_uni_icons2 + _easycom_uni_nav_bar2 + _component_TabBar)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_nav_bar + DealCell)();
}
const DealCell = () => "../../../components/DealCell.js";
const _sfc_main = {
  __name: "done-deal",
  setup(__props) {
    const listData = [
      {
        name: "陪同外出",
        time: "2023年6月5日-3小时",
        payment: "30.00",
        area: "洛江区",
        avatar: "/static/outgo.jpg"
      },
      {
        name: "冰箱清洗",
        time: "2023年6月1日-双开门",
        payment: "200.00",
        area: "鲤城区",
        avatar: "/static/foodDeliver.jpg"
      },
      {
        name: "上门助浴",
        time: "2023年5月21日-半护理",
        payment: "200.00",
        area: "丰泽区",
        avatar: "/static/chat.jpg"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search",
          size: "18",
          color: "#999"
        }),
        b: common_vendor.o((...args) => _ctx.confirm && _ctx.confirm(...args)),
        c: _ctx.right,
        d: common_vendor.p({
          border: false,
          ["left-icon"]: "left",
          fixed: true
        }),
        e: common_vendor.f(listData, (cell, k0, i0) => {
          return {
            a: "60a2e392-2-" + i0,
            b: common_vendor.p({
              cellData: cell
            })
          };
        }),
        f: common_vendor.p({
          centerText: "派单",
          rightText: "管理",
          centerUrl: "/pages/operator/deliver/deliver",
          rightUrl: "/pages/operator/audit/audit"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/user/done-deal/done-deal.vue"]]);
wx.createPage(MiniProgramPage);
