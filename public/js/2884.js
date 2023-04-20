"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2884],{72884:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var o=n(58222),l={class:"text-sm font-semibold tracking-tight text-gray-600 mb-4"},r={class:"flex items-center justify-between mt-2"},s={class:"text-xs"},a={class:"text-xs text-gray-400 mr-2"},i={class:"relative space-y-4 text-xs"},c={key:0,class:"relative z-10 bg-sky-50",style:{width:"20px",height:"20px",margin:"0 0 -3px -5px"}},d={key:1,class:"flex relative right-4 z-10 rounded-r-md border border-l-0 border-blue-400 bg-blue-100 py-1 pl-3 pr-2 mb-4"},u=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"flex-none text-blue-500 h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})],-1),p={class:"text-blue-500 font-semibold"},m={key:2,class:"flex relative z-10 rounded-r-md border border-emerald-400 bg-emerald-100 py-1 px-2 mb-4 ml-1"},g=(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"flex-none text-emerald-500 h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})],-1),f={class:"text-emerald-500 font-semibold"},y={class:"flex relative z-10 items-center"},h=["innerHTML"],k=["innerHTML"],b=["innerHTML"],v=(0,o.createElementVNode)("div",{class:"absolute z-0 top-0 bottom-0 border-l border-blue-400",style:{left:"4px"}},null,-1),x={key:0,class:"p-4 rounded-md border border-dashed border-gray-300"},B={key:1},N={key:0,class:"text-justify"},L={key:1,class:"text-justify"},w={key:2},E=(0,o.createElementVNode)("span",{class:"text-justify"}," Logs are currently disabled ",-1);var V=n(51795),C=n(90770),S=n(91098);const I={props:{logs:{type:Array,default:function(){return[]}},origin:{type:String,default:"session",validator:function(e){return["simulator","session"].includes(e)}},showLogs:{type:Boolean,default:!0}},components:{NumberBadge:V.Z,PrimaryAlert:C.Z},data:function(){return{renderkey:1,screenNames:[],displayNames:[],useVersionBuilder:(0,S.P)(),selectedLogs:["info","warning","error"]}},screenInfoListed:[],displayInfoListed:[],watch:{logs:function(e,t){var n=this;this.$nextTick((function(){n.$options.screenInfoListed=[],n.$options.displayInfoListed=[],n.screenNames=n.getScreenNames(),n.displayNames=n.getDisplayNames()})),++this.renderkey}},computed:{totalLogs:function(){return this.logs.length},filteredLogs:function(){var e=this;return this.totalLogs?this.logs.filter((function(t){return e.selectedLogs.includes(t.type)||e.selectedLogs.includes("screen-"+t.screen)||e.selectedLogs.includes("display-"+t.display)})):[]},totalFilteredLogs:function(){return this.filteredLogs.length},availableLogs:function(){var e=this;return[{label:"Status",options:[{label:"Info",value:"info",count:this.logs.filter((function(e){return"info"==e.type})).length},{label:"Warnings",value:"warning",count:this.logs.filter((function(e){return"warning"==e.type})).length},{label:"Errors",value:"error",count:this.logs.filter((function(e){return"error"==e.type})).length}]},{label:"Screens",options:this.screenNames.map((function(t){return{label:t,value:"screen-"+t,count:e.logs.filter((function(e){return e.screen==t})).length}}))},{label:"Displays",options:this.displayNames.map((function(t){return{label:t,value:"display-"+t,count:e.logs.filter((function(e){return e.display==t})).length}}))}]}},methods:{getScreenNames:function(){if(this.logs){var e=this.logs.filter((function(e){return null!==e.screen})).map((function(e){return e.screen}));return _.uniqBy(e)}return[]},getDisplayNames:function(){if(this.logs){var e=this.logs.filter((function(e){return null!==e.display})).map((function(e){return e.display}));return _.uniqBy(e)}return[]},canShowScreenInfo:function(e){return null!==e.screen&&!this.$options.screenInfoListed.includes(e.screen)&&(this.$options.screenInfoListed.push(e.screen),!0)},canShowDisplayInfo:function(e){return null!==e.display&&!this.$options.displayInfoListed.includes(e.display)&&(this.$options.displayInfoListed.push(e.display),!0)},getLogClasses:function(e){return"info"===e.type?"bg-blue-100 border-blue-400":"warning"===e.type?"bg-yellow-100 border-yellow-500":"error"===e.type?"animate-bounce bg-red-100 border-red-500":void 0}},created:function(){this.screenNames=this.getScreenNames(),this.displayNames=this.getDisplayNames()}};const D=(0,n(83744).Z)(I,[["render",function(e,t,n,V,C,S){var I=(0,o.resolveComponent)("NumberBadge"),D=(0,o.resolveComponent)("el-option"),z=(0,o.resolveComponent)("el-option-group"),M=(0,o.resolveComponent)("el-select"),T=(0,o.resolveComponent)("PrimaryAlert");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("h5",l,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)("simulator"==n.origin?"Simulator Logs":"Session Logs"),1),S.totalLogs?((0,o.openBlock)(),(0,o.createBlock)(I,{key:0,count:S.totalFilteredLogs,active:!1,class:"ml-2"},null,8,["count"])):(0,o.createCommentVNode)("",!0)]),1==n.showLogs&&S.totalLogs?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[(0,o.createVNode)(M,{modelValue:C.selectedLogs,"onUpdate:modelValue":t[0]||(t[0]=function(e){return C.selectedLogs=e}),multiple:"",placeholder:"Select log types",class:"w-full border rounded mb-4"},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(S.availableLogs,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(z,{key:e.label,label:e.label},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.options,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(D,{key:e.value,label:e.label+" ("+e.count+")",value:e.value},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("span",s,(0,o.toDisplayString)(e.label),1),(0,o.createElementVNode)("span",a,(0,o.toDisplayString)(0==e.count?"":"("+e.count+")"),1)])]})),_:2},1032,["label","value"])})),128))]})),_:2},1032,["label"])})),128))]})),_:1},8,["modelValue"]),(0,o.createVNode)(o.Transition,{name:"fade",mode:"out-in",appear:""},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:C.renderkey,class:"bg-sky-50 rounded-md p-4 overflow-y-auto border",style:{height:"30em"}},[(0,o.createElementVNode)("div",i,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(S.filteredLogs,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t},[0==t?((0,o.openBlock)(),(0,o.createElementBlock)("div",c)):(0,o.createCommentVNode)("",!0),S.canShowScreenInfo(e)?((0,o.openBlock)(),(0,o.createElementBlock)("div",d,[u,(0,o.createElementVNode)("span",p,(0,o.toDisplayString)(e.screen),1)])):(0,o.createCommentVNode)("",!0),S.canShowDisplayInfo(e)?((0,o.openBlock)(),(0,o.createElementBlock)("div",m,[g,(0,o.createElementVNode)("span",f,(0,o.toDisplayString)(e.display),1)])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",y,[(0,o.createElementVNode)("span",{class:(0,o.normalizeClass)(["rounded-full mr-2 border flex-none",S.getLogClasses(e)]),style:{width:"10px",height:"10px"}},null,2),"info"==e.type?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:0,innerHTML:e.description,class:"text-xs text-gray-500"},null,8,h)):"error"==e.type?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:1,innerHTML:e.description,class:"text-xs text-red-400"},null,8,k)):"warning"==e.type?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:2,innerHTML:e.description,class:"text-xs text-yellow-400"},null,8,b)):(0,o.createCommentVNode)("",!0)]),v])})),128)),0==S.filteredLogs.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",x,"No Logs Found")):(0,o.createCommentVNode)("",!0)])]))]})),_:1})],64)):(0,o.createCommentVNode)("",!0),1==n.showLogs&&0==S.totalLogs?((0,o.openBlock)(),(0,o.createElementBlock)("div",B,[(0,o.createVNode)(T,null,{default:(0,o.withCtx)((function(){return["simulator"==n.origin?((0,o.openBlock)(),(0,o.createElementBlock)("span",N," Launch the Simulator to see the applicaiton logs in realtime ")):(0,o.createCommentVNode)("",!0),"session"==n.origin?((0,o.openBlock)(),(0,o.createElementBlock)("span",L," This session does not have logs to show ")):(0,o.createCommentVNode)("",!0)]})),_:1})])):(0,o.createCommentVNode)("",!0),"simulator"==n.origin&&0==n.showLogs?((0,o.openBlock)(),(0,o.createElementBlock)("div",w,[(0,o.createVNode)(T,null,{default:(0,o.withCtx)((function(){return[E]})),_:1})])):(0,o.createCommentVNode)("",!0)])}]])}}]);