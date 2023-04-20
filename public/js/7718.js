"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7718],{7718:(e,n,o)=>{o.r(n),o.d(n,{default:()=>p});var t=o(58222),s=(0,t.createElementVNode)("span",null,"Run server commands",-1),a={class:"flex justify-between mb-6"};var r=o(6154),l=o(90770),d=o(66434),i=o(53233),m=o(55092),u=o(71985);const c={components:{CodeEditor:d.Z,PrimaryAlert:l.Z,DefaultSelect:i.Z,PrimaryButton:m.Z,LoaderOverlay:u.Z},data:function(){return{commands:this.$page.props.commands.map((function(e){return{label:e}})),command:this.$page.props.commands[0],response:null,isLoading:!1}},methods:{runCommand:function(){var e=this,n=this;this.isLoading=!0;var o={command:this.command},t=route("settings.server.commands.run");r.Z.post(t,o).then((function(o){e.response=o.data,n.$message({message:"Command executed successfully",type:"success"})})).catch((function(o){var t,s=null!==(t=(o||{}).message)&&void 0!==t?t:"Sorry, something went wrong";419===o.response.status?(s="Please login",e.$inertia.get(route("login.show"))):e.response=(((o||{}).response||{}).data||{}).message,n.$message({message:s,type:"warning"})})).finally((function(){e.isLoading=!1}))}}};const p=(0,o(83744).Z)(c,[["render",function(e,n,o,r,l,d){var i=(0,t.resolveComponent)("PrimaryAlert"),m=(0,t.resolveComponent)("DefaultSelect"),u=(0,t.resolveComponent)("PrimaryButton"),c=(0,t.resolveComponent)("LoaderOverlay"),p=(0,t.resolveComponent)("CodeEditor");return(0,t.openBlock)(),(0,t.createElementBlock)("div",null,[(0,t.createVNode)(i,{class:"mb-6"},{default:(0,t.withCtx)((function(){return[s]})),_:1}),(0,t.createElementVNode)("div",a,[(0,t.createVNode)(m,{modelValue:l.command,"onUpdate:modelValue":n[0]||(n[0]=function(e){return l.command=e}),options:l.commands,class:"w-40"},null,8,["modelValue","options"]),(0,t.createVNode)(u,{onClick:n[1]||(n[1]=(0,t.withModifiers)((function(e){return d.runCommand()}),["stop"])),disabled:l.isLoading},{default:(0,t.withCtx)((function(){return[(0,t.createTextVNode)("Run Command")]})),_:1},8,["disabled"])]),(0,t.createElementVNode)("div",{class:(0,t.normalizeClass)(["relative",{"py-8":!l.response&&l.isLoading}])},[(0,t.createVNode)(c,{show:l.isLoading},null,8,["show"]),l.response?((0,t.openBlock)(),(0,t.createBlock)(p,{key:0,modelValue:l.response,"onUpdate:modelValue":n[2]||(n[2]=function(e){return l.response=e}),display_language:!1,read_only:!0,show_read_only:!1,height:"auto"},null,8,["modelValue"])):(0,t.createCommentVNode)("",!0)],2)])}]])}}]);