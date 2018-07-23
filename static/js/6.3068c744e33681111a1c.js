webpackJsonp([6],{"//zQ":function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},"r4R/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"accountManager-createAccount",components:{},data:function(){return{accountForm:{username:"",name:"",password:"",mark:"",role:"",office:""},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"},{min:6,max:12,message:"账号长度不超过12个字符/少于6个字符",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"},{max:12,message:"名称长度不超过12个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:12,message:"密码长度不超过12个字符/少于6个字符",trigger:"blur"}],mark:[{max:48,message:"长度不超过48个字符",trigger:"blur"}],role:[{required:!0,message:"请选择一个账号角色",trigger:"change"}],office:[{required:!0,message:"请选择一个分配组织",trigger:"change"}]},filterText:"",treeData:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}],defaultProps:{children:"children",label:"label"}}},computed:{},watch:{filterText:function(e){this.$refs.officeTree.filter(e)}},mounted:function(){},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},checkedOfficeHandle:function(e,t,r){this.$refs.officeTree.setCheckedKeys([e.id]),console.log(e,t,r),this.accountForm.office=e.id},cancelHandle:function(){var e=this;this.$confirm("已录入的信息将不保留，是否离开该页面 ？","注意",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.push({path:"/system/accountManager"})}).catch(function(){})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"accountManager-createAccount-wrapper"},[r("el-form",{ref:"accountForm",attrs:{model:e.accountForm,rules:e.rules,"label-width":"100px","inline-message":"","status-icon":"","label-position":"left"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username",required:""}},[r("el-input",{staticStyle:{width:"300px"},model:{value:e.accountForm.username,callback:function(t){e.$set(e.accountForm,"username",t)},expression:"accountForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"名称",prop:"name",required:""}},[r("el-input",{staticStyle:{width:"300px"},model:{value:e.accountForm.name,callback:function(t){e.$set(e.accountForm,"name",t)},expression:"accountForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password",required:""}},[r("el-input",{staticStyle:{width:"300px"},attrs:{type:"password"},model:{value:e.accountForm.password,callback:function(t){e.$set(e.accountForm,"password",t)},expression:"accountForm.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"mark"}},[r("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:e.accountForm.mark,callback:function(t){e.$set(e.accountForm,"mark",t)},expression:"accountForm.mark"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"账号角色",prop:"role",required:""}},[r("el-radio-group",{model:{value:e.accountForm.role,callback:function(t){e.$set(e.accountForm,"role",t)},expression:"accountForm.role"}},[r("el-radio",{attrs:{label:"系统管理员"}}),e._v(" "),r("el-radio",{attrs:{label:"普通管理员"}})],1),e._v(" "),r("el-popover",{attrs:{placement:"bottom-start",title:"",width:"200",trigger:"hover",content:"普通管理员无法操作系统设置功能模块"}},[r("i",{staticClass:"el-icon-warning",staticStyle:{color:"#909399",cursor:"pointer","margin-left":"10px"},attrs:{slot:"reference"},slot:"reference"})])],1),e._v(" "),r("el-form-item",{attrs:{label:"分配组织",prop:"office",required:""}},[r("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),r("el-tree",{ref:"officeTree",staticClass:"filter-tree",staticStyle:{width:"500px"},attrs:{data:e.treeData,props:e.defaultProps,"default-expand-all":"","filter-node-method":e.filterNode,"show-checkbox":"","highlight-current":"","node-key":"id","check-on-click-node":"","expand-on-click-node":!1},on:{"node-click":e.checkedOfficeHandle}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("accountForm")}}},[e._v("确定")]),e._v(" "),r("el-button",{on:{click:e.cancelHandle}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")(a,o,!1,function(e){r("xkc8")},"data-v-e2088f72",null);t.default=l.exports},xkc8:function(e,t,r){var a=r("//zQ");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("7f7986c0",a,!0)}});