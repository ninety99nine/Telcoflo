(self.webpackChunk=self.webpackChunk||[]).push([[9723],{46700:(e,s,t)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function n(e){var s=o(e);return t(s)}function o(e){if(!t.o(r,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=46700},20621:(e,s,t)=>{"use strict";t.d(s,{Z:()=>m});var r=t(58222),n=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})],-1),o=(0,r.createElementVNode)("span",null,"Edit JSON",-1);var a=t(87879),l=t(75802),j=t(66434),u=t(72864);const d={components:{useForm:a.cI,DefaultModal:l.Z,CodeEditor:j.Z,DefaultButton:u.Z},props:["modelValue"],data:function(){return{form:null}},methods:{resetForm:function(){var e;this.form=(0,a.cI)({json:JSON.stringify(null!==(e=this.modelValue)&&void 0!==e?e:{},null,2)})},updateJson:function(e){console.log(),this.form.clearErrors();try{var s=JSON.parse(this.form.json);s&&(this.$emit("update:modelValue",s),this.$message({message:"JSON updated successfully",type:"success"}),e())}catch(e){this.form.setError("json","The JSON syntax provided is not valid")}},cancelUpdateJson:function(){this.form.clearErrors()}}};const m=(0,t(83744).Z)(d,[["render",function(e,s,t,a,l,j){var u=(0,r.resolveComponent)("CodeEditor"),d=(0,r.resolveComponent)("DefaultButton"),m=(0,r.resolveComponent)("DefaultModal");return(0,r.openBlock)(),(0,r.createBlock)(m,{onOpen:s[1]||(s[1]=function(e){return j.resetForm()}),defaultText:"Cancel",onClose:s[2]||(s[2]=function(s){return e.$emit("close")}),primaryText:"Update JSON",primaryAction:j.updateJson,defaultAction:j.cancelUpdateJson},{title:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Update JSON")]})),trigger:(0,r.withCtx)((function(){return[(0,r.createVNode)(d,{name:"trigger",class:"px-3"},{default:(0,r.withCtx)((function(){return[n,o]})),_:1})]})),default:(0,r.withCtx)((function(){return[(0,r.createVNode)(u,{modelValue:l.form.json,"onUpdate:modelValue":s[0]||(s[0]=function(e){return l.form.json=e}),error:l.form.errors.json,languages:[["JSON","json"]],height:"300px"},null,8,["modelValue","error"])]})),_:1},8,["primaryAction","defaultAction"])}]])},86357:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var r=t(58222),n={class:"bg-white rounded-md shadow-md hover:shadow-lg"},o={class:"flex justify-end border-t p-4"};var a=t(30381),l=t.n(a),j=t(87879),u=t(55092),d=t(20621);const m={components:{PrimaryButton:u.Z,JsonEditorModal:d.Z},data:function(){return{moment:l(),form:this.getForm()}},methods:{getForm:function(){return(0,j.cI)({metadata:this.$page.props.databaseEntryPayload.metadata})},saveChanges:function(){var e=this;this.form.clearErrors(),this.form.put(route("database.entry.update",{project:this.route().params.project,app:this.route().params.app,version:this.route().params.version,database_entry:this.route().params.database_entry}),{preserveState:!0,preserveScroll:!0,onSuccess:function(){e.$message({message:"Database entry updated successfully",type:"success"})},onError:function(s){e.$message({message:"Sorry, we found some mistakes",type:"error"})}})}}};const c=(0,t(83744).Z)(m,[["render",function(e,s,t,a,l,j){var u=(0,r.resolveComponent)("KeyValueInput"),d=(0,r.resolveComponent)("JsonEditorModal"),m=(0,r.resolveComponent)("PrimaryButton");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createVNode)(u,{modelValue:l.form.metadata,"onUpdate:modelValue":s[0]||(s[0]=function(e){return l.form.metadata=e})},null,8,["modelValue"]),(0,r.createElementVNode)("div",o,[(0,r.createVNode)(d,{modelValue:l.form.metadata,"onUpdate:modelValue":s[1]||(s[1]=function(e){return l.form.metadata=e}),class:"mr-4"},null,8,["modelValue"]),(0,r.createVNode)(m,{onClick:s[2]||(s[2]=function(e){return j.saveChanges()}),disabled:l.form.processing},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Save Changes")]})),_:1},8,["disabled"])])])}]])}}]);