"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4225],{34225:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var o=r(58222),n={class:"grid grid-cols-3 gap-4"},s=["onClick"],l={key:0,class:"absolute top-2 right-2"},c=[(0,o.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-green-500 ml-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)],i=(0,o.createElementVNode)("li",{class:"block px-4 py-2 hover:bg-gray-100 cursor-pointer",name:"trigger"},[(0,o.createElementVNode)("span",null,"Copy Properties")],-1);var a=r(75802),p=r(91098),d=r(55092);const u={components:{DefaultModal:a.Z,PrimaryButton:d.Z},data:function(){return{properties:[{name:"Displays",value:"displays",selected:!1},{name:"Events",value:"events",selected:!1},{name:"Markers",value:"markers",selected:!1},{name:"Repeat",value:"repeat",selected:!1}],screen:(0,p.P)().selectedScreen}},methods:{toggleSelection:function(e){this.properties[e].selected=!this.properties[e].selected},copyProperties:function(e){for(var t={},r=0;r<this.properties.length;r++){var o=this.properties[r].value;this.properties[r].selected&&(t[o]=this.screen[o])}this.properties.forEach((function(e){e.selected=!1})),window.localStorage.setItem("screen_properties",JSON.stringify(t)),this.$message({message:"Screen properties copied",type:"success"}),e()}}};const m=(0,r(83744).Z)(u,[["render",function(e,t,r,a,p,d){var u=(0,o.resolveComponent)("DefaultModal");return(0,o.openBlock)(),(0,o.createBlock)(u,{defaultText:"Cancel",primaryText:"Copy Properties",primaryAction:d.copyProperties},{title:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Copy Properties")]})),trigger:(0,o.withCtx)((function(){return[i]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",n,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(p.properties,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t,onClick:function(e){return d.toggleSelection(t)},class:"col-span-1 relative flex items-center justify-center bg-gray-50 border hover:bg-blue-50 hover:border-blue-200 active:bg-blue-100 active:border-blue-400 hover:shadow-md rounded-md py-10 text-xs text-gray-800 cursor-pointer"},[p.properties[t].selected?((0,o.openBlock)(),(0,o.createElementBlock)("span",l,c)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(e.name),1)])],8,s)})),128))])]})),_:1},8,["primaryAction"])}]])}}]);