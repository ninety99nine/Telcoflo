"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7839],{37839:(e,o,r)=>{r.r(o),r.d(o,{default:()=>D});var t=r(58222),n={key:0,class:"text-sm text-gray-500 mb-5"},l={class:"text-gray-800 font-bold"},a={key:1,class:"text-sm text-gray-500 mb-5"},s={class:"text-gray-800 font-bold"},c={key:2,class:"text-sm text-gray-500 mb-5"},d={class:"text-gray-800 font-bold"},i={key:0,class:"text-xs text-gray-400 ml-2"},m={key:0,class:"text-sm text-gray-500 border-b pb-5 mb-5"},u={class:"text-gray-800 font-bold"},f={key:3},p={class:"flex items-center justify-between mb-4"},b=(0,t.createElementVNode)("span",{class:"text-sm font-medium text-gray-900"},"Features",-1),h=(0,t.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-1",viewBox:"0 0 20 20",fill:"currentColor"},[(0,t.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),V=(0,t.createElementVNode)("span",null,"Add Feature",-1),g=["onClick"],k=[(0,t.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)],v=(0,t.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mt-3 ml-4 hover:text-blue-500 cursor-grab active:cursor-grabbing draggble-handle",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,t.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1);var x=r(88496),y=r(90770),N=r(66222),B=r(53233),w=r(72864),C=r(71362),E=r(34223);const _={components:{draggable:x.J,PrimaryAlert:y.Z,DefaultInput:N.Z,DefaultSelect:B.Z,DefaultButton:w.Z,DefaultSwitch:C.Z,DefaultTextArea:E.Z},props:{form:Object,mode:String,version:{type:Object,default:null}},methods:{addFeature:function(){this.form.features.push("")},removeFeature:function(e){this.form.features.splice(e,1),this.$message({message:"Feature removed",type:"success"})}},computed:{versionOptions:function(){var e=this.$page.props.versionsPayload;return e.length&&(e=e.map((function(e){return{label:e.number,value:e.id}}))),e.unshift({label:"None",value:"none"}),e}}};const D=(0,r(83744).Z)(_,[["render",function(e,o,r,x,y,N){var B=(0,t.resolveComponent)("DefaultInput"),w=(0,t.resolveComponent)("DefaultTextArea"),C=(0,t.resolveComponent)("DefaultSwitch"),E=(0,t.resolveComponent)("DefaultButton"),_=(0,t.resolveComponent)("draggable"),D=(0,t.resolveComponent)("PrimaryAlert"),T=(0,t.resolveComponent)("DefaultSelect");return(0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,null,["Delete"==r.mode||"Restore"==r.mode?((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:0},["Delete"!=r.mode||r.form.deleted_at?(0,t.createCommentVNode)("",!0):((0,t.openBlock)(),(0,t.createElementBlock)("p",n,[(0,t.createTextVNode)("This version will be trashed for 30 days before it's permanently deleted. Please be certain. Enter the confirmation code "),(0,t.createElementVNode)("span",l,(0,t.toDisplayString)(r.version.confirmation_code),1),(0,t.createTextVNode)(" to confirm this action.")])),"Delete"==r.mode&&r.form.deleted_at?((0,t.openBlock)(),(0,t.createElementBlock)("p",a,[(0,t.createTextVNode)("Once you delete this version, there is no going back. Please be certain. Enter the confirmation code "),(0,t.createElementVNode)("span",s,(0,t.toDisplayString)(r.version.confirmation_code),1),(0,t.createTextVNode)(" to confirm this action.")])):(0,t.createCommentVNode)("",!0),"Restore"==r.mode?((0,t.openBlock)(),(0,t.createElementBlock)("p",c,[(0,t.createTextVNode)("Enter the confirmation code "),(0,t.createElementVNode)("span",d,(0,t.toDisplayString)(r.version.confirmation_code),1),(0,t.createTextVNode)(" to confirm this action.")])):(0,t.createCommentVNode)("",!0),(0,t.createVNode)(B,{modelValue:r.form.confirmation_code,"onUpdate:modelValue":o[0]||(o[0]=function(e){return r.form.confirmation_code=e}),label:"Confirmation code",placeholder:"Enter the confirmation code",disabled:r.form.processing||r.form.processing,error:r.form.errors.confirmation_code,class:"mb-6"},null,8,["modelValue","disabled","error"])],64)):((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:1},[(0,t.createVNode)(B,{modelValue:r.form.number,"onUpdate:modelValue":o[1]||(o[1]=function(e){return r.form.number=e}),label:"Number",placeholder:"1.00",disabled:r.form.processing,error:r.form.errors.number,class:"mb-6"},null,8,["modelValue","disabled","error"]),(0,t.createVNode)(w,{modelValue:r.form.description,"onUpdate:modelValue":o[2]||(o[2]=function(e){return r.form.description=e}),label:"Description",placeholder:"This is the first version",disabled:r.form.processing,error:r.form.errors.description,class:"mb-6"},null,8,["modelValue","disabled","error"])],64)),r.version&&"Update"==r.mode?((0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,{key:2},[(0,t.createVNode)(C,{modelValue:r.form.reset_builder,"onUpdate:modelValue":o[3]||(o[3]=function(e){return r.form.reset_builder=e}),label:"Reset",disabled:r.form.processing,error:r.form.errors.reset_builder,class:"mb-6"},{default:(0,t.withCtx)((function(){return[r.form.reset_builder?((0,t.openBlock)(),(0,t.createElementBlock)("span",i," — This version will be reset")):(0,t.createCommentVNode)("",!0)]})),_:1},8,["modelValue","disabled","error"]),r.form.reset_builder?((0,t.openBlock)(),(0,t.createElementBlock)("p",m,[(0,t.createTextVNode)("Resetting this version will destroy the version screens, displays, events and settings. Once you reset a version, there is no going back. Enter the reset code "),(0,t.createElementVNode)("span",u,(0,t.toDisplayString)(r.version.confirmation_code),1),(0,t.createTextVNode)(" to confirm this action.")])):(0,t.createCommentVNode)("",!0),r.form.reset_builder?((0,t.openBlock)(),(0,t.createBlock)(B,{key:1,modelValue:r.form.confirmation_code,"onUpdate:modelValue":o[4]||(o[4]=function(e){return r.form.confirmation_code=e}),label:"Reset code",placeholder:"Enter the reset code",disabled:r.form.processing||r.form.processing,error:r.form.errors.confirmation_code,class:"mb-6"},null,8,["modelValue","disabled","error"])):(0,t.createCommentVNode)("",!0)],64)):(0,t.createCommentVNode)("",!0),"Create"==r.mode||"Update"==r.mode?((0,t.openBlock)(),(0,t.createElementBlock)("div",f,[(0,t.createElementVNode)("div",p,[b,(0,t.createVNode)(E,{onClick:o[5]||(o[5]=function(e){return N.addFeature()}),class:"px-3"},{default:(0,t.withCtx)((function(){return[h,V]})),_:1})]),(0,t.createVNode)(_,{group:"features",invertSwap:!0,"item-key":"features",modelValue:r.form.features,"onUpdate:modelValue":o[6]||(o[6]=function(e){return r.form.features=e}),handle:".draggble-handle","ghost-class":"bg-yellow-100"},{default:(0,t.withCtx)((function(){return[((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,null,(0,t.renderList)(r.form.features,(function(e,o){return(0,t.openBlock)(),(0,t.createElementBlock)("div",{key:e.id,class:"flex items-center justify-between py-1 px-2 rounded-md -ml-2"},[(0,t.createVNode)(B,{modelValue:r.form.features[o],"onUpdate:modelValue":function(e){return r.form.features[o]=e},placeholder:"Feature #"+(o+1),error:r.form.errors["features."+o],disabled:r.form.processing||r.form.processing,class:"flex-1"},null,8,["modelValue","onUpdate:modelValue","placeholder","error","disabled"]),((0,t.openBlock)(),(0,t.createElementBlock)("svg",{onClick:function(e){return N.removeFeature(o)},xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mt-3 ml-8 hover:text-red-500 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},k,8,g)),v])})),128))]})),_:1},8,["modelValue"]),0==r.form.features.length?((0,t.openBlock)(),(0,t.createBlock)(D,{key:0},{default:(0,t.withCtx)((function(){return[(0,t.createTextVNode)("No features mentioned")]})),_:1})):(0,t.createCommentVNode)("",!0)])):(0,t.createCommentVNode)("",!0),"Create"==r.mode?((0,t.openBlock)(),(0,t.createBlock)(T,{key:4,modelValue:r.form.clone_version_id,"onUpdate:modelValue":o[7]||(o[7]=function(e){return r.form.clone_version_id=e}),options:N.versionOptions,label:"Clone version",placeholder:"Select a version to clone",disabled:r.form.processing,error:r.form.errors.clone_version_id,class:"mt-6"},null,8,["modelValue","options","disabled","error"])):(0,t.createCommentVNode)("",!0)],64)}]])}}]);