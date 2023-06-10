"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _component_SunButton = common_vendor.resolveComponent("SunButton");
  (_easycom_uni_tag2 + _component_SunButton)();
}
const _easycom_uni_tag = () => "../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
if (!Math) {
  _easycom_uni_tag();
}
const _sfc_main = {
  __name: "DealCell",
  props: {
    cellData: Object
  },
  setup(__props) {
    const props = __props;
    function notice() {
    }
    console.log(props);
    return (_ctx, _cache) => {
      return {
        a: props.cellData.avatar,
        b: common_vendor.t(props.cellData.name),
        c: common_vendor.p({
          text: props.cellData.area,
          type: "warning"
        }),
        d: common_vendor.t(props.cellData.time),
        e: common_vendor.t(props.cellData.payment),
        f: common_vendor.p({
          text: "评价"
        }),
        g: common_vendor.o(notice)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/components/DealCell.vue"]]);
wx.createComponent(Component);
