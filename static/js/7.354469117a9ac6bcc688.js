webpackJsonp([7],{Diiw:function(e,r,t){"use strict";function i(e){return/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(e)}Object.defineProperty(r,"__esModule",{value:!0});var n={name:"ipManager",components:{},data:function(){var e=this;return{ruleForm:{serverIP:"",terminalIP:""},rules:{serverIP:[{trigger:"blur",validator:function(r,t,n){""===t?n(new Error(e.$t("ipManager.notNull"))):i(t)?n():n(new Error(e.$t("ipManager.formatInvalid")))}}],terminalIP:[{trigger:"blur",validator:function(r,t,n){""===t?n(new Error(e.$t("ipManager.notNull"))):i(t)?n():n(new Error(e.$t("ipManager.formatInvalid")))}}]},isEdit:!1}},computed:{},watch:{},created:function(){this.ruleForm.serverIP="192.168.0.1",this.ruleForm.terminalIP="192.168.0.1"},mounted:function(){},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields(),this.isEdit=!1}}},o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"ipManager-wrapper"},[t("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"150px","inline-message":"","label-position":"left"}},[t("el-form-item",{attrs:{label:e.$t("ipManager.serverIP"),prop:"serverIP"}},[e.isEdit?t("el-input",{staticStyle:{width:"300px"},attrs:{"auto-complete":"on"},model:{value:e.ruleForm.serverIP,callback:function(r){e.$set(e.ruleForm,"serverIP",r)},expression:"ruleForm.serverIP"}}):t("span",[e._v(e._s(e.ruleForm.serverIP))])],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("ipManager.terminalIP"),prop:"terminalIP"}},[e.isEdit?t("el-input",{staticStyle:{width:"300px"},attrs:{"auto-complete":"on"},model:{value:e.ruleForm.terminalIP,callback:function(r){e.$set(e.ruleForm,"terminalIP",r)},expression:"ruleForm.terminalIP"}}):t("span",[e._v(e._s(e.ruleForm.terminalIP))])],1),e._v(" "),t("el-form-item",[e.isEdit?[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v(e._s(e.$t("ipManager.confirm")))]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v(e._s(e.$t("ipManager.cancel")))])]:t("el-button",{attrs:{type:"text"},on:{click:function(r){e.isEdit=!0}}},[e._v(e._s(e.$t("ipManager.modify")))])],2)],1)],1)},staticRenderFns:[]};var l=t("VU/8")(n,o,!1,function(e){t("m+jR")},"data-v-89f92624",null);r.default=l.exports},"m+jR":function(e,r,t){var i=t("yplC");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("2ece8b62",i,!0)},yplC:function(e,r,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])}});