(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87e6a748"],{1681:function(t,e,s){},"386d":function(t,e,s){"use strict";var a=s("cb7c"),n=s("83a1"),o=s("5f1b");s("214f")("search",1,(function(t,e,s,i){return[function(s){var a=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,a):new RegExp(s)[e](String(a))},function(t){var e=i(s,t,this);if(e.done)return e.value;var r=a(t),c=String(this),l=r.lastIndex;n(l,0)||(r.lastIndex=0);var u=o(r,c);return n(r.lastIndex,l)||(r.lastIndex=l),null===u?-1:u.index}]}))},"6a0e":function(t,e,s){"use strict";s("c92c")},"6f1a":function(t,e,s){"use strict";s("e410")},"816a":function(t,e,s){"use strict";s("990c")},"896d":function(t,e,s){},"990c":function(t,e,s){},a844:function(t,e,s){"use strict";s("8e6e"),s("ac6a"),s("456d");var a=s("bd86"),n=(s("c5f6"),s("1681"),s("8654")),o=s("58df");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var c=Object(o["a"])(n["a"]);e["a"]=c.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return r({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var s;t?e.calculateInputHeight():null===(s=e.$refs.input)||void 0===s||s.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},adc2:function(t,e,s){},c92c:function(t,e,s){},ccc8:function(t,e,s){"use strict";s("adc2")},cd74:function(t,e,s){"use strict";s("896d")},e410:function(t,e,s){},fe6b:function(t,e,s){"use strict";s.r(e);var a=s("7496"),n=s("8336"),o=s("b0af"),i=s("99d9"),r=s("62ad"),c=s("169a"),l=s("8860"),u=s("da13"),d=s("5d23"),m=s("e449"),f=s("0fd9"),p=s("2fa4"),g=s("8654"),h=s("a844"),b=(s("386d"),function(){var t=this,e=t._self._c;return e(a["a"],{staticClass:"p-4"},[e("h2",{staticClass:"page-title mb-0"},[t._v("Categories")]),e("b-row",{staticClass:"mt-4"},[e("b-col",[e("Widget",{attrs:{title:"",customHeader:""}},[e("h5",{staticClass:"d-inline-block"},[t._v("\n          Manage "),e("span",{staticClass:"fw-semi-bold"},[t._v("Categories")])]),e("div",{staticClass:"mt-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row bg-isnfo"},[e("div",{staticClass:"border-right col-md-9 col-12"},[e(f["a"],[e(r["a"],{attrs:{cols:"12",md:"10"}},[e(g["a"],{attrs:{label:"Filter by name",placeholder:"Search by name",outlined:""},on:{keyup:function(e){return t.fetchData()}},model:{value:t.filters.search,callback:function(e){t.$set(t.filters,"search",e)},expression:"filters.search"}})],1)],1),e("div",{staticClass:"table-responsive mt-4"},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"bar-fade-scale",color:"var(--primary)",text:"Loading..",duration:"0.6"}}),t.categories.length?e("table",{staticClass:"table table-hover table-sm mb-0 requests-table"},[e("thead",[e("tr",[e("th",{staticClass:"hidden-sm-down"},[t._v("ID")]),e("th",{staticClass:"hidden-sm-down"},[t._v("NAME")]),e("th",{staticClass:"hidden-sm-down"},[t._v("SLUG")]),e("th",{staticClass:"hidden-sm-down"},[t._v("DESCRIPTION")]),e("th",{staticClass:"hidden-sm-down text-center"},[t._v("Action")])])]),e("tbody",t._l(t.categories,(function(s,a){return e("tr",{key:a},[e("td",[t._v("\n                            "+t._s(a+1)+"\n                          ")]),e("td",[t._v("\n                            "+t._s(s.category_name)+"\n                          ")]),e("td",[t._v("\n                            "+t._s(s.slug)+"\n                          ")]),e("td",[t._v("\n                            "+t._s(s.category_description)+"\n                          ")]),e("td",{staticClass:"text-center",staticStyle:{"font-size":"18px"}},[e(m["a"],{attrs:{bottom:"",origin:"center center",transition:"scale-transition","close-on-content-click":t.closeOnContentClick,left:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,o=s.attrs;return[e(n["a"],t._g(t._b({attrs:{color:"black",icon:""}},"v-btn",o,!1),a),[e("i",{staticClass:"fa fa-list-ul"})])]}}],null,!0)},[e(l["a"],[e(u["a"],[e(d["b"],{staticStyle:{cursor:"pointer"},on:{click:function(e){t.$bvModal.show("attach_image"),t.current=s}}},[e("i",{staticClass:"mdi mdi-square-edit-outline mr-1"}),t._v("\n                                    Manage Images\n                                  ")])],1),e(u["a"],[e(d["b"],{staticStyle:{cursor:"pointer"},on:{click:function(e){t.$bvModal.show("manage"),t.current=s}}},[e("i",{staticClass:"mdi mdi-square-edit-outline mr-1"}),t._v("\n                                    Manage Subcategories\n                                  ")])],1),e(u["a"],[e(d["b"],{staticStyle:{cursor:"pointer"},on:{click:function(e){t.$bvModal.show("edit"),t.current=s}}},[e("i",{staticClass:"mdi mdi-square-edit-outline mr-1"}),t._v("\n                                    Edit\n                                  ")])],1),e(u["a"],[e(d["b"],{staticStyle:{cursor:"pointer"},on:{click:function(e){t.openConfirm2=!0,t.del_id=s.id}}},[e("i",{staticClass:"mdi mdi-square-edit-outline mr-1"}),t._v("\n                                    Delete\n                                  ")])],1)],1)],1)],1)])})),0)]):e("div",{staticClass:"alert alert-info"},[e("h5",[t._v("No records found")])])],1)],1),e("div",{staticClass:"col-md-3 col-12",attrs:{md:"5"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e(r["a"],{staticClass:"bgs-info m-0 p-0",attrs:{cols:"12",sm:"12"}},[e(g["a"],{attrs:{required:"",label:"Name",outlined:"",clearable:""},model:{value:t.form.category_name,callback:function(e){t.$set(t.form,"category_name",e)},expression:"form.category_name"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12",sm:"12"}},[e(g["a"],{attrs:{required:"",label:"Slug",placehold:"Enter category slug",outlined:"",clearable:""},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12",sm:"12"}},[e(h["a"],{attrs:{required:"",outlined:"",name:"input-7-4",label:"Description ",value:"Lorem ipsum dolor sit amt"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e(r["a"],{staticClass:"text-center m-0 p-0",attrs:{cols:"12",sm:"12"}},[e("button",{staticClass:"btn btn-block btn-lg btn-primary",attrs:{type:"submit"}},[t._v("\n                        SAVE\n                      ")])])],1)])])])])]),e("div",{staticClass:"col-md-12"})])],1)],1),e("b-modal",{staticStyle:{background:"white"},attrs:{title:"Edit Category",id:"edit","hide-footer":""}},[e("edit",{attrs:{my_model:t.$bvModal,data:t.current},on:{updated:function(e){return t.fetchData()}}})],1),e("b-modal",{staticStyle:{background:"white"},attrs:{size:"xl",title:"Manage Subcategory for "+t.current.category_name,id:"manage","hide-footer":""}},[e("subCat",{attrs:{my_model:t.$bvModal,data:t.current},on:{updated:function(e){return t.fetchData()}}})],1),e("b-modal",{staticStyle:{background:"white"},attrs:{size:"lg",title:"Attach image to  ".concat(t.current.category_name),id:"attach_image","hide-footer":""}},[e("attachImage",{attrs:{my_model:t.$bvModal,data:t.current},on:{updated:function(e){return t.fetchData()}}})],1),e(c["a"],{attrs:{"max-width":"390"},model:{value:t.openConfirm,callback:function(e){t.openConfirm=e},expression:"openConfirm"}},[e(o["a"],[e(i["c"],{staticClass:"text-h5"},[t._v("\n        Change property status to "+t._s(t.dynamic_status)+"\n      ")]),e(i["b"],[t._v("\n        Are you sure you want to perform this operation ?\n      ")]),e(i["a"],[e(p["a"]),e(n["a"],{attrs:{color:" darken-1",text:""},on:{click:function(e){t.openConfirm=!1}}},[t._v("\n          No, exit\n        ")]),e(n["a"],{attrs:{color:"primary darken-1",text:""},on:{click:function(e){t.toggle_status(t.status_id,t.dynamic_status),t.openConfirm=!1}}},[t._v("\n          Yes, continue\n        ")])],1)],1)],1),e(c["a"],{attrs:{"max-width":"460"},model:{value:t.openConfirm2,callback:function(e){t.openConfirm2=e},expression:"openConfirm2"}},[e(o["a"],[e(i["c"],{staticClass:"text-h5"},[t._v(" Delete Category ")]),e(i["b"],[t._v("\n        Are you sure you want to perform this operation ?\n      ")]),e(i["a"],[e(p["a"]),e(n["a"],{attrs:{color:" darken-1",text:""},on:{click:function(e){t.openConfirm2=!1}}},[t._v("\n          No, exit\n        ")]),e(n["a"],{attrs:{color:"primary darken-1",text:""},on:{click:function(e){t.deleteCategory(t.del_id),t.openConfirm2=!1}}},[t._v("\n          Yes, continue\n        ")])],1)],1)],1)],1)}),v=[],y=s("4506"),C=s("b974"),_=(s("7f7f"),function(){var t=this,e=t._self._c;return e(a["a"],{staticClass:"p-4"},[e("div",{},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row bg-isnfo"},[e("div",{staticClass:"border-right col-md-9 col-12"},[e(f["a"],[e(r["a"],{attrs:{cols:"12",md:"6"}},[e(g["a"],{attrs:{label:"Name",placeholder:"Placeholder",outlined:""},model:{value:t.filters.search,callback:function(e){t.$set(t.filters,"search",e)},expression:"filters.search"}})],1),e(r["a"],{staticClass:"text-center pt-5",attrs:{cols:"12",md:"6"}},[e("button",{staticClass:"btn-lg btn-block btn btn-outline-success",attrs:{type:"button"},on:{click:t.fetchData}},[t._v("Filter")])])],1),e("div",{staticClass:"table-responsive mt-4"},[t.subCategories.length?e("table",{staticClass:"table table-hover table-sm mb-0 requests-table"},[e("thead",[e("tr",[e("th",{staticClass:"hidden-sm-down"},[t._v("ID")]),e("th",{staticClass:"hidden-sm-down"},[t._v("NAME")]),e("th",{staticClass:"hidden-sm-down"},[t._v("SLUG")]),e("th",{staticClass:"hidden-sm-down"},[t._v("DESCRIPTION")]),e("th",{staticClass:"hidden-sm-down"},[t._v("STATUS")]),e("th",{staticClass:"hidden-sm-down text-center"},[t._v("Action")])])]),e("tbody",t._l(t.subCategories,(function(s,a){return e("tr",{key:a},[e("td",[t._v("\n                                            "+t._s(a+1)+"\n                                        ")]),e("td",[t._v("\n                                            "+t._s(s.name)+"\n                                        ")]),e("td",[t._v("\n                                            "+t._s(s.slug)+"\n                                        ")]),e("td",[t._v("\n                                            "+t._s(s.description)+"\n                                        ")]),e("td",[e("span",{staticClass:"badge"},[t._v("\n                                            "+t._s(s.status)+"\n                                            ")])]),e("td",{staticClass:"text-center",staticStyle:{"font-size":"18px"}},[e(m["a"],{attrs:{bottom:"",origin:"center center",transition:"scale-transition","close-on-content-click":t.closeOnContentClick,left:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,o=s.attrs;return[e(n["a"],t._g(t._b({attrs:{color:"black",icon:""}},"v-btn",o,!1),a),[e("i",{staticClass:"fa fa-list-ul"})])]}}],null,!0)},[e(l["a"],[e(u["a"],[e(d["b"],{staticStyle:{cursor:"pointer"},on:{click:function(e){t.$bvModal.show("manage_nested"),t.current=s}}},[e("i",{staticClass:"mdi mdi-square-edit-outline mr-1"}),t._v(" Manage Nested Subcategories\n                                                        ")])],1),e(u["a"],[e(d["b"],{staticStyle:{cursor:"pointer"},on:{click:function(e){t.editing=!0,t.form=s}}},[e("i",{staticClass:"mdi mdi-square-edit-outline mr-1"}),t._v(" Edit\n                                                        ")])],1),e(u["a"],[e(d["b"],{staticStyle:{cursor:"pointer"},on:{click:function(e){t.openConfirm2=!0,t.del_id=s.id}}},[e("i",{staticClass:"mdi mdi-square-edit-outline mr-1"}),t._v(" Delete\n                                                        ")])],1)],1)],1)],1)])})),0)]):e("div",{staticClass:"alert alert-info"},[e("h5",[t._v("No records found")])])])],1),e("div",{staticClass:"col-md-3 col-12",attrs:{md:"5"}},[e("form",{on:{submit:function(e){e.preventDefault(),t.editing?t.update():t.save()}}},[t.editing?e("p",{staticClass:"text-danger",staticStyle:{"text-transform":"capitalize"}},[t._v("Currently Editing "+t._s(t.form.sub_category_name))]):t._e(),e(r["a"],{staticClass:"bgs-info m-0 p-0",attrs:{cols:"12",sm:"12"}},[t.errorMssg.sub_category_name?e("p",{staticClass:"mb-0 text-danger"},[t._v(t._s(t.errorMssg.sub_category_name[0]))]):t._e(),e(g["a"],{attrs:{label:"Name",outlined:"",clearable:""},model:{value:t.form.sub_category_name,callback:function(e){t.$set(t.form,"sub_category_name",e)},expression:"form.sub_category_name"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12",sm:"12"}},[t.errorMssg.slug?e("p",{staticClass:"mb-0 text-danger"},[t._v(t._s(t.errorMssg.slug[0]))]):t._e(),e(g["a"],{attrs:{label:"Slug",placehold:"Enter category slug",outlined:"",clearable:""},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12",sm:"12"}},[t.errorMssg.description?e("p",{staticClass:"mb-0 text-danger"},[t._v(t._s(t.errorMssg.description[0]))]):t._e(),e(h["a"],{attrs:{outlined:"",name:"input-7-4",label:"Description ",value:"Lorem ipsum dolor sit amt"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12"}},[t.errorMssg.status?e("p",{staticClass:"mb-0 text-danger"},[t._v(t._s(t.errorMssg.status[0]))]):t._e(),e(C["a"],{attrs:{items:["active","inactive"],label:"Status",outlined:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),e(r["a"],{staticClass:"text-center m-0 p-0",attrs:{cols:"12",sm:"12"}},[t.editing?e("button",{staticClass:"btn btn-block btn-lg btn-primary",attrs:{type:"submit"}},[t._v("UPDATE")]):e("button",{staticClass:"btn btn-block btn-lg btn-primary",attrs:{type:"submit"}},[t._v("SAVE")])])],1)])])])]),e(c["a"],{attrs:{"max-width":"460"},model:{value:t.openConfirm2,callback:function(e){t.openConfirm2=e},expression:"openConfirm2"}},[e(o["a"],[e(i["c"],{staticClass:"text-h5"},[t._v("\n            Delete Subcategory\n            ")]),e(i["b"],[t._v("\n            Are you sure you want to perform this operation ?\n            ")]),e(i["a"],[e(p["a"]),e(n["a"],{attrs:{color:" darken-1",text:""},on:{click:function(e){t.openConfirm2=!1}}},[t._v("\n                No, exit\n            ")]),e(n["a"],{attrs:{color:"primary darken-1",text:""},on:{click:function(e){t.deleteSubcat(t.del_id),t.openConfirm2=!1}}},[t._v("\n                Yes, continue\n            ")])],1)],1)],1)],1),e("b-modal",{staticStyle:{background:"white"},attrs:{size:"xl",title:"Manage Nested Subcategory for "+t.current.sub_category_name,id:"manage_nested","hide-footer":""}},[e("nestedSub",{attrs:{my_model:t.$bvModal,data:t.current},on:{updated:function(e){return t.fetchData()}}})],1)],1)}),x=[],k=function(){var t=this,e=t._self._c;return e(a["a"],{staticClass:"p-4"},[e("div",{},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row bg-isnfo"},[e("div",{staticClass:"border-right col-md-9 col-12"},[e(f["a"],[e(r["a"],{attrs:{cols:"12",md:"6"}},[e(g["a"],{attrs:{label:"Name",placeholder:"Placeholder",outlined:""},model:{value:t.filters.search,callback:function(e){t.$set(t.filters,"search",e)},expression:"filters.search"}})],1),e(r["a"],{staticClass:"text-center pt-5",attrs:{cols:"12",md:"6"}},[e("button",{staticClass:"btn-lg btn-block btn btn-outline-success",attrs:{type:"button"},on:{click:t.fetchData}},[t._v("Filter")])])],1),e("div",{staticClass:"table-responsive mt-4"},[t.nestedSubCategories.length?e("table",{staticClass:"table table-hover table-sm mb-0 requests-table"},[e("thead",[e("tr",[e("th",{staticClass:"hidden-sm-down"},[t._v("ID")]),e("th",{staticClass:"hidden-sm-down"},[t._v("NAME")]),e("th",{staticClass:"hidden-sm-down"},[t._v("SLUG")]),e("th",{staticClass:"hidden-sm-down"},[t._v("DESCRIPTION")]),e("th",{staticClass:"hidden-sm-down"},[t._v("STATUS")]),e("th",{staticClass:"hidden-sm-down text-center"},[t._v("Action")])])]),e("tbody",t._l(t.nestedSubCategories,(function(s,a){return e("tr",{key:a},[e("td",[t._v("\n                                            "+t._s(a+1)+"\n                                        ")]),e("td",[t._v("\n                                            "+t._s(s.name)+"\n                                        ")]),e("td",[t._v("\n                                            "+t._s(s.slug)+"\n                                        ")]),e("td",[t._v("\n                                            "+t._s(s.description)+"\n                                        ")]),e("td",[e("span",{staticClass:"badge"},[t._v("\n                                            "+t._s(s.status)+"\n                                            ")])]),e("td",{staticClass:"text-center",staticStyle:{"font-size":"18px"}},[e(m["a"],{attrs:{bottom:"",origin:"center center",transition:"scale-transition","close-on-content-click":t.closeOnContentClick,left:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,o=s.attrs;return[e(n["a"],t._g(t._b({attrs:{color:"black",icon:""}},"v-btn",o,!1),a),[e("i",{staticClass:"fa fa-list-ul"})])]}}],null,!0)},[e(l["a"],[e(u["a"],[e(d["b"],{staticStyle:{cursor:"pointer"},on:{click:function(e){t.$bvModal.show("manage"),t.current=s}}},[e("i",{staticClass:"mdi mdi-square-edit-outline mr-1"}),t._v(" Manage nestedSubcategories\n                                                        ")])],1),e(u["a"],[e(d["b"],{staticStyle:{cursor:"pointer"},on:{click:function(e){t.editing=!0,t.form=s}}},[e("i",{staticClass:"mdi mdi-square-edit-outline mr-1"}),t._v(" Edit\n                                                        ")])],1),e(u["a"],[e(d["b"],{staticStyle:{cursor:"pointer"},on:{click:function(e){t.openConfirm2=!0,t.del_id=s.id}}},[e("i",{staticClass:"mdi mdi-square-edit-outline mr-1"}),t._v(" Delete\n                                                        ")])],1)],1)],1)],1)])})),0)]):e("div",{staticClass:"alert alert-info"},[e("h5",[t._v("No records found")])])])],1),e("div",{staticClass:"col-md-3 col-12",attrs:{md:"5"}},[e("form",{on:{submit:function(e){e.preventDefault(),t.editing?t.update():t.save()}}},[t.editing?e("p",{staticClass:"text-danger",staticStyle:{"text-transform":"capitalize"}},[t._v("Currently Editing "+t._s(t.form.sub_category_name))]):t._e(),e(r["a"],{staticClass:"bgs-info m-0 p-0",attrs:{cols:"12",sm:"12"}},[t.errorMssg.name?e("p",{staticClass:"mb-0 text-danger"},[t._v(t._s(t.errorMssg.name[0]))]):t._e(),e(g["a"],{attrs:{label:"Name",outlined:"",clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12",sm:"12"}},[t.errorMssg.slug?e("p",{staticClass:"mb-0 text-danger"},[t._v(t._s(t.errorMssg.slug[0]))]):t._e(),e(g["a"],{attrs:{label:"Slug",placehold:"Enter category slug",outlined:"",clearable:""},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12",sm:"12"}},[t.errorMssg.description?e("p",{staticClass:"mb-0 text-danger"},[t._v(t._s(t.errorMssg.description[0]))]):t._e(),e(h["a"],{attrs:{outlined:"",name:"input-7-4",label:"Description ",value:"Lorem ipsum dolor sit amt"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12"}},[t.errorMssg.status?e("p",{staticClass:"mb-0 text-danger"},[t._v(t._s(t.errorMssg.status[0]))]):t._e(),e(C["a"],{attrs:{items:["active","inactive"],label:"Status",outlined:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),e(r["a"],{staticClass:"text-center m-0 p-0",attrs:{cols:"12",sm:"12"}},[t.editing?e("button",{staticClass:"btn btn-block btn-lg btn-primary",attrs:{type:"submit"}},[t._v("UPDATE")]):e("button",{staticClass:"btn btn-block btn-lg btn-primary",attrs:{type:"submit"}},[t._v("SAVE")])])],1)])])])]),e(c["a"],{attrs:{"max-width":"460"},model:{value:t.openConfirm2,callback:function(e){t.openConfirm2=e},expression:"openConfirm2"}},[e(o["a"],[e(i["c"],{staticClass:"text-h5"},[t._v("\n            Delete Nested Subcategory\n            ")]),e(i["b"],[t._v("\n            Are you sure you want to perform this operation ?\n            ")]),e(i["a"],[e(p["a"]),e(n["a"],{attrs:{color:" darken-1",text:""},on:{click:function(e){t.openConfirm2=!1}}},[t._v("\n                No, exit\n            ")]),e(n["a"],{attrs:{color:"primary darken-1",text:""},on:{click:function(e){t.deleteSubcat(t.del_id),t.openConfirm2=!1}}},[t._v("\n                Yes, continue\n            ")])],1)],1)],1)],1)])},w=[],S={props:["my_model","data"],data:function(){return{del_id:0,dynamic_status:"",openConfirm:!1,openConfirm2:!1,dialog:!1,current:{},nestedSubCategories:[],filters:{},loading:!1,isDialogVisible:!1,closeOnContentClick:!0,form:{},errorMssg:{},editing:!1,editData:{}}},mounted:function(){this.fetchData()},methods:{closeMe:function(){this.$bvModal.hide("manage")},fetchData:function(){var t=this;this.$api.post(this.dynamic_route("/nested-sub-category/sub-category/"+this.data.id),{filters:this.filters}).then((function(e){t.nestedSubCategories=e.data.data})).catch((function(t){401==t.response.status&&t.response.statusText})).finally((function(){NProgress.done()}))},save:function(){var t=this;this.form.sub_category_id=this.data.id,this.$api.post(this.dynamic_route("/nested-sub-category"),this.form).then((function(e){delete t.form.name,delete t.form.status,delete t.form.slug,delete t.form.description,t.errorMssg={},t.$toasted.success("Saved successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}}),t.fetchData()})).catch((function(e){e.response.data.errors&&(t.errorMssg=e.response.data.errors),401==e.response.status&&e.response.statusText;var s="Something went wrong...";"string"==typeof e.response.data.message&&(s=e.response.data.message),t.$toasted.error(s,{action:[{text:"Cancel",onClick:function(t,e){e.el.classList.remove("info"),e.el.classList.add("success")}}]})})).finally((function(){NProgress.done()}))},update:function(){var t=this;this.$api.patch(this.dynamic_route("/nested-sub-category/"+this.form.id),this.form).then((function(e){t.$toasted.success("Edited successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}})})).catch((function(t){401==t.response.status&&t.response.statusText})).finally((function(){NProgress.done()}))},deleteSubcat:function(t){var e=this;this.$api.delete(this.dynamic_route("/nested-sub-category/"+t)).then((function(t){e.$toasted.success("Deleted successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}}),e.fetchData()})).catch((function(t){401==t.response.status&&t.response.statusText,e.$toasted.error("Unable to delete Nested Subcategory!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}})})).finally((function(){NProgress.done()}))}}},$=S,D=(s("816a"),s("2877")),M=Object(D["a"])($,k,w,!1,null,null,null),N=M.exports,O={props:["my_model","data"],components:{nestedSub:N},data:function(){return{del_id:0,dynamic_status:"",openConfirm:!1,openConfirm2:!1,dialog:!1,current:{},subCategories:[],filters:{},loading:!1,isDialogVisible:!1,closeOnContentClick:!0,form:{},errorMssg:{},editing:!1,editData:{}}},mounted:function(){this.fetchData()},methods:{closeMe:function(){this.$bvModal.hide("manage")},fetchData:function(){var t=this;this.$api.post(this.dynamic_route("/sub-category/category/"+this.data.id),{filters:this.filters}).then((function(e){t.subCategories=e.data.data})).catch((function(t){401==t.response.status&&t.response.statusText})).finally((function(){NProgress.done()}))},save:function(){var t=this;this.form.category_id=this.data.id,this.$api.post(this.dynamic_route("/sub-category"),this.form).then((function(e){delete t.form.sub_category_name,delete t.form.status,delete t.form.slug,delete t.form.description,t.errorMssg={},t.$toasted.success("Saved successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}}),t.fetchData()})).catch((function(e){e.response.data.errors&&(t.errorMssg=e.response.data.errors),401==e.response.status&&e.response.statusText;var s="Something went wrong...";"string"==typeof e.response.data.message&&(s=e.response.data.message),t.$toasted.error(s,{action:[{text:"Cancel",onClick:function(t,e){e.el.classList.remove("info"),e.el.classList.add("success")}}]})})).finally((function(){NProgress.done()}))},update:function(){var t=this;this.$api.patch(this.dynamic_route("/sub-category/"+this.form.id),this.form).then((function(e){t.$toasted.success("Edited successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}})})).catch((function(t){401==t.response.status&&t.response.statusText})).finally((function(){NProgress.done()}))},deleteSubcat:function(t){var e=this;this.$api.delete(this.dynamic_route("/sub-category/"+t)).then((function(t){e.$toasted.success("Deleted successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}}),e.fetchData()})).catch((function(t){401==t.response.status&&t.response.statusText,e.$toasted.error("Unable to delete Subcategory!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}})})).finally((function(){NProgress.done()}))}}},E=O,P=(s("6a0e"),Object(D["a"])(E,_,x,!1,null,null,null)),I=P.exports,A=function(){var t=this,e=t._self._c;return e(a["a"],{staticClass:"p-4"},[e("div",{},[e("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.update.apply(null,arguments)}}},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"bar-fade-scale",color:"var(--primary)",text:"Loading..",duration:"0.6"}}),e(i["b"],{},[e(r["a"],{staticClass:"bgs-info m-0 p-0",attrs:{cols:"12",sm:"12"}},[e(g["a"],{attrs:{required:"",label:"Name",outlined:"",clearable:""},model:{value:t.form.category_name,callback:function(e){t.$set(t.form,"category_name",e)},expression:"form.category_name"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12",sm:"12"}},[e(g["a"],{attrs:{required:"",label:"Slug",placehold:"Enter category slug",outlined:"",clearable:""},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12",sm:"12"}},[e(h["a"],{attrs:{required:"",outlined:"",name:"input-7-4",label:"Description ",value:"Lorem ipsum dolor sit amt"},model:{value:t.form.category_description,callback:function(e){t.$set(t.form,"category_description",e)},expression:"form.category_description"}})],1),e(r["a"],{staticClass:"m-0 p-0",attrs:{cols:"12"}},[e(C["a"],{attrs:{items:["active","inactive"],label:"Status",outlined:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),e(r["a"],{staticClass:"text-center m-0 p-0",attrs:{cols:"12",sm:"12"}},[e("button",{staticClass:"btn btn-block btn-lg btn-primary",attrs:{type:"submit"}},[t._v("SAVE")]),e("button",{staticClass:"btn btn-block btn-lg btn-outline-success",attrs:{type:"button"},on:{click:t.closeMe}},[t._v("CANCEL")])])],1)],1)])])},T=[],L=(s("8096"),s("953d")),q=s("bc3a"),j=s.n(q),U=s("6ad0"),H=s.n(U),R={props:["my_model","data"],components:{quillEditor:L["quillEditor"],VueElementLoading:H.a},data:function(){return{form:this.data,nameRules:[function(t){return!!t||"Name is required"}],statusRules:[function(t){return!!t||"Status is required"}],editorOption:{debug:"info",placeholder:"Contents..",readOnly:!0,theme:"snow"},delta:void 0,loading:!1}},methods:{closeMe:function(){this.$bvModal.hide("edit")},update:function(){var t=this;this.loading=!0,this.form.category_description=this.data.category_description,this.$api.patch(this.dynamic_route("/category/"+this.form.id),this.form).then((function(e){t.closeMe(),t.$toasted.success("Edited successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}}),t.$emit("updated")})).catch((function(t){401==t.response.status&&t.response.statusText})).finally((function(){t.loading=!1,NProgress.done()}))}}},z=R,V=(s("cd74"),Object(D["a"])(z,A,T,!1,null,null,null)),F=V.exports,G=s("7211"),B=s.n(G),Y=function(){var t=this,e=t._self._c;return e(a["a"],{staticClass:"p-0"},[e("div",[e("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.update.apply(null,arguments)}}},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"bar-fade-scale",color:"var(--primary)",text:"Loading..",duration:"0.6"}}),e(i["b"],[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("\n                        Uploaded images\n                    ")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-body shadow-sm"},[t.data.picture.length?e("div",{staticClass:"row"},t._l(t.data.picture,(function(s,a){return e("div",{key:a,staticClass:"col-md-4 mb-2 upload_images"},[e("span",{staticClass:"mdi mdi-close",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.removeImg(s,a)}}}),e("img",{staticClass:"border",staticStyle:{width:"100%"},attrs:{src:s.picture}})])})),0):t._e()])]),t.src?e("p",[t._v("New Image")]):t._e(),e("div",{staticClass:"new_img"},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.src}})])]),e("div",{staticClass:"card-footer"},[e("input",{ref:"file",staticStyle:{visibility:"hidden"},attrs:{type:"file"},on:{change:t.handleImage}}),e("button",{staticClass:"btn btn-lg btn-block border btn-outline-success",attrs:{type:"button"},on:{click:t.openFile}},[t._v("Upload image")])])]),e("div",{staticClass:"col-12 p-0 text-right mt-4"},[e("button",{staticClass:"mr-5 btn btn-lg btn-outline-success",attrs:{type:"button"},on:{click:t.closeMe}},[t._v("CANCEL")]),e("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"submit"}},[t._v("UPDATE")])])])],1)])])},J=[],W={props:["my_model","data"],components:{quillEditor:L["quillEditor"],VueElementLoading:H.a},data:function(){return{form:this.data,nameRules:[function(t){return!!t||"Name is required"}],statusRules:[function(t){return!!t||"Status is required"}],editorOption:{debug:"info",placeholder:"Contents..",readOnly:!0,theme:"snow"},delta:void 0,loading:!1,errorMessage:{},src:"",encodedImage:""}},computed:{},watch:{"form.description":function(){this.delta=this.$refs.myQuillEditor.quill.getContents()}},mounted:function(){},methods:{openFile:function(){this.$refs.file.click()},handleImage:function(t){var e=this,s=t.target.files[0];this.src=URL.createObjectURL(s),console.log(s);var a=new FileReader;a.onloadend=function(t){var s=t.target;e.encodedImage=s.result},a.readAsDataURL(s),this.loading=!1},closeMe:function(){this.$bvModal.hide("attach_image")},removeImg:function(t,e){var s=this;this.loading=!0,this.$api.delete(this.dynamic_route("/category/admin/remove-category-pics/"+t.id)).then((function(t){s.data.picture.splice(e,1),s.$toasted.success("Image Removed  successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}}),s.$emit("updated")})).catch((function(t){401==t.response.status&&t.response.statusText})).finally((function(){s.loading=!1,NProgress.done()}))},update:function(){var t=this;this.loading=!0;var e={picture:this.encodedImage};this.$api.post(this.dynamic_route("/category/admin/category-pics/"+this.form.id),e).then((function(e){t.closeMe(),t.$toasted.success("Image Uploaded successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}}),t.$emit("updated")})).catch((function(t){401==t.response.status&&t.response.statusText})).finally((function(){t.loading=!1,NProgress.done()}))}}},K=W,Q=(s("ccc8"),Object(D["a"])(K,Y,J,!1,null,null,null)),X=Q.exports,Z={components:{Widget:y["a"],edit:F,subCat:I,VueElementLoading:H.a,laravelVuePagination:B.a,attachImage:X},data:function(){return{status_id:0,del_id:0,dynamic_status:"",openConfirm:!1,openConfirm2:!1,dialog:!1,current:{},categories:[],filters:{},loading:!1,isDialogVisible:!1,closeOnContentClick:!0,form:{}}},computed:{},mounted:function(){this.fetchData()},methods:{pass_current:function(t){this.current=t},fetchData:function(){var t=this;this.loading=!0,this.$api.post(this.dynamic_route("/category"),{filters:this.filters}).then((function(e){t.categories=e.data.data})).catch((function(t){401==t.response.status&&t.response.statusText})).finally((function(){t.loading=!1,NProgress.done()}))},toggle_status:function(t,e){var s=this;this.loading=!0,j.a.put(this.dynamic_route("/properties/toggle-status/".concat(t)),{id:t,status:e},{headers:{authorization:"Bearer ".concat(this.authToken)}}).then((function(){s.fetchData(),s.$toast.success("Status updated successfully!",{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).catch((function(t){if(s.loading=!1,401==t.response.status&&"Unauthorized"==t.response.statusText)return s.logoutUser();s.$toast.error("An error occurred please try again!",{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).finally((function(){s.loading=!1}))},deleteCategory:function(t){var e=this;this.$api.delete(this.dynamic_route("/category/"+t)).then((function(t){e.$toasted.success("Deleted successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}}),e.fetchData()})).catch((function(t){401==t.response.status&&t.response.statusText})).finally((function(){NProgress.done()}))},linkPage:function(){this.$router.push({name:"CreateProduct"})},save:function(){var t=this;this.$api.post(this.dynamic_route("/category"),this.form).then((function(e){delete t.form.category_name,delete t.form.status,delete t.form.slug,delete t.form.description,t.$toasted.success("Saved successfully!",{action:{text:"Close",onClick:function(t,e){e.goAway(0)}}}),t.fetchData()})).catch((function(e){401==e.response.status&&e.response.statusText,t.$toasted.error("Something went wrong...",{action:[{text:"Cancel",onClick:function(t,e){e.el.classList.remove("info"),e.el.classList.add("success")}}]})})).finally((function(){NProgress.done()}))}}},tt=Z,et=(s("6f1a"),Object(D["a"])(tt,b,v,!1,null,"71dd9040",null));e["default"]=et.exports}}]);