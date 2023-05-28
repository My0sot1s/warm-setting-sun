"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _component_SunButton = common_vendor.resolveComponent("SunButton");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  (_easycom_uni_nav_bar2 + _component_SunButton + _easycom_uni_easyinput2 + _easycom_uni_data_checkbox2 + _easycom_uni_datetime_picker2 + _easycom_uni_file_picker2)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_checkbox = () => "../../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_datetime_picker = () => "../../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_file_picker = () => "../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_easyinput + _easycom_uni_data_checkbox + _easycom_uni_datetime_picker + _easycom_uni_file_picker)();
}
const _sfc_main = {
  __name: "register",
  setup(__props) {
    const choices = common_vendor.ref([false, true]);
    function choose(index) {
      if (index === 0) {
        choices.value[1] = true;
        choices.value[0] = false;
      } else {
        choices.value[0] = true;
        choices.value[1] = false;
      }
    }
    const ratioSex = common_vendor.ref(0);
    const sex = common_vendor.ref([
      {
        text: "男",
        value: 0
      },
      {
        text: "女",
        value: 1
      }
    ]);
    const protocol = common_vendor.ref([{ text: "本人承认以上信息均为真实信息", value: 0 }]);
    function back() {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    }
    function submit() {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(back),
        b: common_vendor.p({
          shadow: true,
          border: false,
          title: "您的身份: 服务人员",
          ["left-icon"]: "left"
        }),
        c: choices.value[0] ? 1 : "",
        d: common_vendor.p({
          text: "家政人员"
        }),
        e: common_vendor.o(($event) => choose(0)),
        f: choices.value[1] ? 1 : "",
        g: common_vendor.p({
          text: "陪诊人员"
        }),
        h: common_vendor.o(($event) => choose(1)),
        i: common_vendor.o(_ctx.input),
        j: common_vendor.o(($event) => _ctx.value = $event),
        k: common_vendor.p({
          inputBorder: false,
          placeholder: "请输入姓名",
          modelValue: _ctx.value
        }),
        l: common_vendor.o(($event) => ratioSex.value = $event),
        m: common_vendor.p({
          localdata: sex.value,
          modelValue: ratioSex.value
        }),
        n: common_vendor.o(_ctx.maskClick),
        o: common_vendor.o(($event) => _ctx.single = $event),
        p: common_vendor.p({
          type: "date",
          ["clear-icon"]: false,
          border: false,
          modelValue: _ctx.single
        }),
        q: common_vendor.o(_ctx.input),
        r: common_vendor.o(($event) => _ctx.value = $event),
        s: common_vendor.p({
          inputBorder: false,
          placeholder: "请输手机号",
          modelValue: _ctx.value
        }),
        t: common_vendor.o(_ctx.input),
        v: common_vendor.o(($event) => _ctx.value = $event),
        w: common_vendor.p({
          inputBorder: false,
          focus: true,
          placeholder: "请输入验证码",
          ["suffix-icon"]: "paperplane",
          modelValue: _ctx.value
        }),
        x: common_vendor.o(($event) => _ctx.password = $event),
        y: common_vendor.p({
          inputBorder: false,
          type: "password",
          placeholder: "请输入密码",
          modelValue: _ctx.password
        }),
        z: common_vendor.o(($event) => _ctx.password = $event),
        A: common_vendor.p({
          inputBorder: false,
          type: "password",
          placeholder: "请确认密码",
          modelValue: _ctx.password
        }),
        B: common_vendor.p({
          limit: "3",
          title: "认证证书图片"
        }),
        C: common_vendor.o(($event) => _ctx.useless = $event),
        D: common_vendor.p({
          localdata: protocol.value,
          modelValue: _ctx.useless
        }),
        E: common_vendor.p({
          text: "提交"
        }),
        F: common_vendor.o(submit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/server/register/register.vue"]]);
wx.createPage(MiniProgramPage);
