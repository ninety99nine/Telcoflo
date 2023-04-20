"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4553,9342],{49342:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T});var r=o(58222),n={key:0,class:"text-sm text-gray-500 mb-5"},l={class:"text-blue-500 font-bold"},a={class:"flex items-end justify-between"},i=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),s={key:0,class:"ml-2"},c={key:1,name:"trigger",xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},m=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},null,-1)],d={key:2,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 cursor-pointer hover:text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},u=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)];var f=o(96486),p=o.n(f),h=o(87879),v=o(66222),g=o(75802),y=o(91098),b=o(53233),V=o(55092),_=o(34223),x=o(88458),k=o(39762),w=o(539),C=o(67003);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function B(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function E(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?B(Object(o),!0).forEach((function(t){S(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function S(e,t,o){return(t=function(e){var t=function(e,t){if("object"!==N(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===N(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const O={components:{useForm:h.cI,DefaultInput:v.Z,DefaultModal:g.Z,DefaultSelect:b.Z,PrimaryButton:V.Z,DefaultColorPicker:k.Z,DefaultTextArea:_.Z,SelectActiveState:x.default,TextOrCodeEditor:w.Z,ScreenOrDisplaySelector:C.default},props:{navigations:{type:Array},navigation:{type:Object,default:null},index:{type:Number,default:null},mode:{type:String,default:null,validator:function(e){return["create","clone","update"].includes(e)}}},data:function(){return{form:null,navigationTypes:[{label:"Custom Inputs",value:"custom"},{label:"Regex Match",value:"regex"}],useVersionBuilder:(0,y.P)()}},computed:{modeInCaps:function(){return this.mode.charAt(0).toUpperCase()+this.mode.slice(1)}},methods:{resetForm:function(){"create"==this.mode?this.form=(0,h.cI)((0,y.P)().getBlankNavigation()):"clone"==this.mode?this.form=(0,h.cI)((0,y.P)().getClonedNavigation(this.navigation)):"update"==this.mode&&(this.form=(0,h.cI)(E(E({},(0,y.P)().getBlankNavigation()),p().cloneDeep(this.navigation))))},createNavigation:function(e){this.form.clearErrors();var t=this.useVersionBuilder.searchNavigations(this.navigations,this.form.name,!0).length;if(0==this.form.name.length?this.form.setError("name","The navigation name is required"):this.form.name.length<3?this.form.setError("name","The navigation name is too short"):this.form.name.length>50?this.form.setError("name","The navigation name is too long"):(["create","clone"].includes(this.mode)&&t||"update"==this.mode&&t&&this.navigation.name!==this.form.name)&&this.form.setError("name","This navigation name is already in use"),"custom"==this.form.selected_type?(0==this.form[this.form.selected_type].inputs.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].inputs.text)||1==this.form[this.form.selected_type].inputs.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].inputs.code_editor_text))&&this.form.setError("inputs","The navigation input is required"):"regex"==this.form.selected_type&&(0==this.form[this.form.selected_type].rule.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].rule.text)||1==this.form[this.form.selected_type].rule.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].rule.code_editor_text))&&this.form.setError("rule","The navigation regex rule is required"),(0==this.form[this.form.selected_type].step.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].step.text)||1==this.form[this.form.selected_type].step.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].step.code_editor_text))&&this.form.setError("step","The navigation step is required"),(0==this.form[this.form.selected_type].link.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].link.text)||1==this.form[this.form.selected_type].link.code_editor_mode&&["",null].includes(this.form[this.form.selected_type].link.code_editor_text))&&this.form.setError("link","The navigation link is required"),!1===this.form.hasErrors){var o=this.form.data();"update"==this.mode?this.useVersionBuilder.updateNavigation(this.navigations,o,this.index):this.useVersionBuilder.addNavigation(this.navigations,o);var r=this.mode+"d";this.$message({message:"Navigation "+r+" successfully",type:"success"}),e()}},cancelCreateNavigation:function(){this.form.clearErrors()}}};const T=(0,o(83744).Z)(O,[["render",function(e,t,o,f,p,h){var v=this,g=(0,r.resolveComponent)("SelectActiveState"),y=(0,r.resolveComponent)("DefaultInput"),b=(0,r.resolveComponent)("DefaultSelect"),V=(0,r.resolveComponent)("TextOrCodeEditor"),_=(0,r.resolveComponent)("ScreenOrDisplaySelector"),x=(0,r.resolveComponent)("DefaultTextArea"),k=(0,r.resolveComponent)("DefaultColorPicker"),w=(0,r.resolveComponent)("PrimaryButton"),C=(0,r.resolveComponent)("DefaultModal");return(0,r.openBlock)(),(0,r.createBlock)(C,{defaultText:"Cancel",onOpen:t[9]||(t[9]=function(e){return h.resetForm()}),onClose:t[10]||(t[10]=function(t){return e.$emit("close")}),primaryAction:h.createNavigation,primaryText:h.modeInCaps+" Navigation",defaultAction:h.cancelCreateNavigation},{title:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(h.modeInCaps+" Navigation"),1)]})),trigger:(0,r.withCtx)((function(){return["create"==o.mode?((0,r.openBlock)(),(0,r.createBlock)(w,{key:0,name:"trigger",class:"px-3"},{default:(0,r.withCtx)((function(){return[i,e.$slots.default?((0,r.openBlock)(),(0,r.createElementBlock)("span",s,[(0,r.renderSlot)(e.$slots,"default")])):(0,r.createCommentVNode)("",!0)]})),_:3})):"clone"==o.mode?((0,r.openBlock)(),(0,r.createElementBlock)("svg",c,m)):"update"==o.mode?((0,r.openBlock)(),(0,r.createElementBlock)("svg",d,u)):(0,r.createCommentVNode)("",!0)]})),default:(0,r.withCtx)((function(){return["clone"==o.mode?((0,r.openBlock)(),(0,r.createElementBlock)("p",n,[(0,r.createTextVNode)("Cloning "),(0,r.createElementVNode)("span",l,(0,r.toDisplayString)(o.navigation.name),1),(0,r.createTextVNode)(" navigation")])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(g,{modelValue:p.form.active,"onUpdate:modelValue":t[0]||(t[0]=function(e){return p.form.active=e}),class:"mb-6"},null,8,["modelValue"]),(0,r.createVNode)(y,{modelValue:p.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return p.form.name=e}),label:"Name",error:p.form.errors.name,class:"mb-6"},null,8,["modelValue","error"]),(0,r.createVNode)(b,{modelValue:p.form.selected_type,"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.form.selected_type=e}),options:p.navigationTypes,label:"Navigation Trigger",error:p.form.errors.selected_type,class:"mb-6"},null,8,["modelValue","options","error"]),"custom"==p.form.selected_type?((0,r.openBlock)(),(0,r.createBlock)(V,{key:1,modelValue:p.form[v.form.selected_type].inputs,"onUpdate:modelValue":t[3]||(t[3]=function(e){return p.form[v.form.selected_type].inputs=e}),label:"Input(s)",placeholder:"1, 2, 3",error:p.form.errors.inputs,class:"mb-6"},null,8,["modelValue","error"])):"regex"==p.form.selected_type?((0,r.openBlock)(),(0,r.createBlock)(V,{key:2,modelValue:p.form[v.form.selected_type].rule,"onUpdate:modelValue":t[4]||(t[4]=function(e){return p.form[v.form.selected_type].rule=e}),label:"Regex Rule",placeholder:"/[a-zA-Z]+/",error:p.form.errors.rule,class:"mb-6"},null,8,["modelValue","error"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(V,{modelValue:p.form[v.form.selected_type].step,"onUpdate:modelValue":t[5]||(t[5]=function(e){return p.form[v.form.selected_type].step=e}),label:"Step",placeholder:"1",note:"Loops to navigate",error:p.form.errors.step,class:"mb-6"},null,8,["modelValue","error"]),(0,r.createVNode)(_,{modelValue:p.form[v.form.selected_type].link,"onUpdate:modelValue":t[6]||(t[6]=function(e){return p.form[v.form.selected_type].link=e}),label:"Navigation Target",info:"Screen to trigger navigation",showDisplays:!1,error:p.form.errors.link,class:"mb-6"},null,8,["modelValue","error"]),(0,r.createElementVNode)("div",a,[(0,r.createVNode)(x,{modelValue:p.form.comment,"onUpdate:modelValue":t[7]||(t[7]=function(e){return p.form.comment=e}),label:"Comment",class:"flex-1 mr-4"},null,8,["modelValue"]),(0,r.createVNode)(k,{modelValue:p.form.hexColor,"onUpdate:modelValue":t[8]||(t[8]=function(e){return p.form.hexColor=e})},null,8,["modelValue"])])]})),_:3},8,["primaryAction","primaryText","defaultAction"])}]])},84553:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var r=o(58222),n={class:"flex items-center justify-between bg-white rounded-sm border border-dashed border-gray-400 p-5"},l=(0,r.createStaticVNode)('<div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg><div><p class="text-gray-800 text-md mb-1">No navigations</p><p class="text-gray-600 text-xs">Go ahead and create your first navigation</p></div></div>',1),a={class:"flex justify-end"},i=(0,r.createElementVNode)("span",null,"Create Navigation",-1);const s={props:["navigations"],components:{CreateOrUpdateNavigationModal:o(49342).default}};const c=(0,o(83744).Z)(s,[["render",function(e,t,o,s,c,m){var d=(0,r.resolveComponent)("CreateOrUpdateNavigationModal");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[l,(0,r.createElementVNode)("div",a,[(0,r.createVNode)(d,{navigations:o.navigations,mode:"create"},{default:(0,r.withCtx)((function(){return[i]})),_:1},8,["navigations"])])])}]])}}]);