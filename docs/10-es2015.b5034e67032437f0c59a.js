(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{U5Jw:function(e,t,r){"use strict";r.r(t),r.d(t,"CategoriesModule",function(){return A});var o=r("tyNb"),n=r("kpqz"),c=r("zkNK"),i=r("fXoL"),s=r("l/y2"),b=r("fll7"),a=r("ofXK");const u=function(e){return[e,"edit"]};function l(e,t){if(1&e){const e=i.Sb();i.Rb(0,"tr"),i.Rb(1,"td"),i.Rb(2,"strong"),i.rc(3),i.Qb(),i.Mb(4,"br"),i.Rb(5,"small"),i.rc(6),i.Qb(),i.Qb(),i.Rb(7,"td"),i.Rb(8,"a",5),i.rc(9,"Editar"),i.Qb(),i.Rb(10,"a",6),i.Zb("click",function(){i.mc(e);const r=t.$implicit;return i.bc().deleteResource(r)}),i.rc(11,"Excluir"),i.Qb(),i.Qb(),i.Qb()}if(2&e){const e=t.$implicit;i.Ab(3),i.sc(e.name),i.Ab(3),i.sc(e.description),i.Ab(2),i.ec("routerLink",i.gc(3,u,e.id))}}const m=function(){return{text:"Categoria"}},d=function(e){return[e]};let f=(()=>{class e extends c.a{constructor(e){super(e),this.categoryService=e}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(n.a))},e.\u0275cmp=i.Fb({type:e,selectors:[["fs-category-list"]],features:[i.xb],decls:11,vars:5,consts:[[3,"items"],["page-title","Categorias","button-text","+ Nova Categoria","button-link","new","button-class","btn-success"],[1,"table","table-hover"],[1,"bg-primary","text-light"],[4,"ngFor","ngForOf"],[1,"btn","btn-outline-info","btn-sm","mr-2",3,"routerLink"],[1,"btn","btn-outline-danger","btn-sm",3,"click"]],template:function(e,t){1&e&&(i.Mb(0,"fs-bread-crumb",0),i.Mb(1,"fs-page-header",1),i.Rb(2,"table",2),i.Rb(3,"thead"),i.Rb(4,"tr",3),i.Rb(5,"th"),i.rc(6,"Categoria"),i.Qb(),i.Rb(7,"th"),i.rc(8,"A\xe7\xf5es"),i.Qb(),i.Qb(),i.Qb(),i.Rb(9,"tbody"),i.qc(10,l,12,5,"tr",4),i.Qb(),i.Qb()),2&e&&(i.ec("items",i.gc(3,d,i.fc(2,m))),i.Ab(10),i.ec("ngForOf",t.resources))},directives:[s.a,b.a,a.i,o.d],styles:[""]}),e})();var p=r("3Pt+"),g=r("wBsq"),h=r("DXcP"),R=r("SLeN"),v=r("qK1z");const Q=function(){return{text:"Categoria",link:"/categories"}},y=function(e){return{text:e}},w=function(e,t){return[e,t]};let x=(()=>{class e extends h.a{constructor(e,t){super(t,e,g.a.fromJson,new g.a),this.categoryService=e,this.injector=t}buildResourceForm(){this.resourceForm=this.formBuilder.group({id:[null],name:[null,[p.l.required,p.l.minLength(2)]],description:[null]})}creatingPageTitle(){return"Cadastro de nova categoria"}editionPageTitle(){return"Editando categoria: "+(this.resource.name||"")}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(n.a),i.Lb(i.s))},e.\u0275cmp=i.Fb({type:e,selectors:[["fs-category-form"]],features:[i.xb],decls:20,vars:12,consts:[[3,"items"],["button-text","<< Voltar","button-link","/categories","button-class","btn-light",3,"page-title"],[3,"formGroup","submit"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"form-row"],[1,"form-group","col-md-4"],["for","name"],["type","text","id","name","formControlName","name","placeholder","Nome",1,"form-control"],[3,"form-control"],[1,"form-group","col-md-8"],["for","description"],["type","text","id","description","formControlName","description","placeholder","Descri\xe7\xe3o",1,"form-control"],[3,"server-error-messages"],["type","submit",1,"btn","btn-primary","btn-lg","float-right","mt-3",3,"disabled"]],template:function(e,t){1&e&&(i.Mb(0,"fs-bread-crumb",0),i.Mb(1,"fs-page-header",1),i.Rb(2,"form",2),i.Zb("submit",function(){return t.submitForm()}),i.Rb(3,"div",3),i.Rb(4,"div",4),i.rc(5," Informa\xe7\xf5es sobre a categoria "),i.Qb(),i.Rb(6,"div",5),i.Rb(7,"div",6),i.Rb(8,"div",7),i.Rb(9,"label",8),i.rc(10,"Nome"),i.Qb(),i.Mb(11,"input",9),i.Mb(12,"fs-form-field-error",10),i.Qb(),i.Rb(13,"div",11),i.Rb(14,"label",12),i.rc(15,"Descri\xe7\xe3o"),i.Qb(),i.Mb(16,"input",13),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Mb(17,"fs-server-error-message",14),i.Rb(18,"button",15),i.rc(19," Salvar "),i.Qb(),i.Qb()),2&e&&(i.ec("items",i.hc(9,w,i.fc(6,Q),i.gc(7,y,t.pageTitle))),i.Ab(1),i.ec("page-title",t.pageTitle),i.Ab(1),i.ec("formGroup",t.resourceForm),i.Ab(10),i.ec("form-control",t.resourceForm.get("name")),i.Ab(5),i.ec("server-error-messages",t.serverErrorMessages),i.Ab(1),i.ec("disabled",t.submittingForm||t.resourceForm.invalid))},directives:[s.a,b.a,p.n,p.h,p.e,p.b,p.g,p.d,R.a,v.a],styles:[""]}),e})();const F=[{path:"",component:f},{path:"new",component:x},{path:":id/edit",component:x}];let k=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[o.e.forChild(F)],o.e]}),e})();var M=r("KZX/");let A=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[M.a,k]]}),e})()}}]);