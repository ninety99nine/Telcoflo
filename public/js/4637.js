"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4637],{24637:(e,r,o)=>{o.r(r),o.d(r,{default:()=>i});var s=o(58222),n=(0,s.createElementVNode)("span",null,"Change your account password",-1),a={class:"flex justify-end"};var t=o(87879),d=o(66222),l=o(90770),u=o(55092);const c={components:{DefaultInput:d.Z,PrimaryAlert:l.Z,PrimaryButton:u.Z},data:function(){return{form:(0,t.cI)({new_password:"",curr_password:"",new_password_confirmation:""})}},methods:{changePassword:function(){var e=this;this.form.clearErrors(),this.form.post(route("settings.account.update"),{preserveState:!0,preserveScroll:!0,onSuccess:function(){e.$message({message:"Password changed successfully",type:"success"}),e.form.reset()},onError:function(r){e.$message({message:"Sorry, we found some mistakes",type:"error"})}})}}};const i=(0,o(83744).Z)(c,[["render",function(e,r,o,t,d,l){var u=(0,s.resolveComponent)("PrimaryAlert"),c=(0,s.resolveComponent)("DefaultInput"),i=(0,s.resolveComponent)("PrimaryButton");return(0,s.openBlock)(),(0,s.createElementBlock)("div",null,[(0,s.createVNode)(u,{class:"mb-6"},{default:(0,s.withCtx)((function(){return[n]})),_:1}),(0,s.createVNode)(c,{modelValue:d.form.curr_password,"onUpdate:modelValue":r[0]||(r[0]=function(e){return d.form.curr_password=e}),type:"password",label:"Current Password",disabled:d.form.processing,error:d.form.errors.curr_password,onKeyup:r[1]||(r[1]=(0,s.withKeys)((function(e){return l.changePassword()}),["enter"])),class:"mb-4"},null,8,["modelValue","disabled","error"]),(0,s.createVNode)(c,{modelValue:d.form.new_password,"onUpdate:modelValue":r[2]||(r[2]=function(e){return d.form.new_password=e}),type:"password",label:"New Password",disabled:d.form.processing,error:d.form.errors.new_password,onKeyup:r[3]||(r[3]=(0,s.withKeys)((function(e){return l.changePassword()}),["enter"])),class:"mb-4"},null,8,["modelValue","disabled","error"]),(0,s.createVNode)(c,{modelValue:d.form.new_password_confirmation,"onUpdate:modelValue":r[4]||(r[4]=function(e){return d.form.new_password_confirmation=e}),type:"password",label:"Confirm New Password",disabled:d.form.processing,error:d.form.errors.new_password_confirmation,onKeyup:r[5]||(r[5]=(0,s.withKeys)((function(e){return l.changePassword()}),["enter"])),class:"mb-6"},null,8,["modelValue","disabled","error"]),(0,s.createElementVNode)("div",a,[(0,s.createVNode)(i,{onClick:r[6]||(r[6]=(0,s.withModifiers)((function(e){return l.changePassword()}),["stop"])),disabled:d.form.processing},{default:(0,s.withCtx)((function(){return[(0,s.createTextVNode)("Change Password")]})),_:1},8,["disabled"])])])}]])}}]);