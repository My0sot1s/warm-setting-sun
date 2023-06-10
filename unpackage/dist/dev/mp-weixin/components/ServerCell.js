"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _component_SunButton = common_vendor.resolveComponent("SunButton");
  _component_SunButton();
}
const _sfc_main = {
  __name: "ServerCell",
  props: {
    cellData: Object
  },
  setup(__props) {
    const props = __props;
    function notice() {
      common_vendor.index.showToast({
        title: "操作成功！",
        duration: 2e3
      });
    }
    console.log(props);
    return (_ctx, _cache) => {
      return {
        a: props.cellData.avatar,
        b: common_vendor.t(props.cellData.name),
        c: common_vendor.t(props.cellData.ability),
        d: common_vendor.p({
          text: "派单"
        }),
        e: common_vendor.o(notice)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/components/ServerCell.vue"]]);
wx.createComponent(Component);
