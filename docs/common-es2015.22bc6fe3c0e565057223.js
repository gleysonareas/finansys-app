(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{DXcP:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var s=r("tyNb"),i=r("3Pt+"),o=r("eIep"),c=(r("PFOJ"),r("fXoL"));let n=(()=>{class e{constructor(e,t,r,o){this.injector=e,this.resourceService=t,this.jsonDataToResourceFn=r,this.resource=o,this.currentAction="",this.resourceForm={},this.pageTitle="",this.serverErrorMessages=[],this.submittingForm=!1,this.route=this.injector.get(s.a),this.router=this.injector.get(s.b),this.formBuilder=this.injector.get(i.c)}ngOnInit(){this.setCurrentAction(),this.buildResourceForm(),this.loadResource()}ngAfterContentChecked(){this.setPageTitle()}submitForm(){this.submittingForm=!0,"new"==this.currentAction?this.createResource():this.updateResource()}setCurrentAction(){this.currentAction="new"==this.route.snapshot.url[0].path?"new":"edit"}loadResource(){"edit"==this.currentAction&&this.route.paramMap.pipe(Object(o.a)(e=>this.resourceService.getById(+e.get("id")))).subscribe(e=>{this.resource=e,this.resourceForm.patchValue(e)},e=>alert("Ocorreu um erro no servidor, Por favor tente mais tarde"))}setPageTitle(){this.pageTitle="new"==this.currentAction?this.creationPageTitle():this.editionPageTitle()}creationPageTitle(){return"Novo"}editionPageTitle(){return"Edi\xe7\xe3o"}createResource(){const e=this.jsonDataToResourceFn(this.resourceForm.value);this.resourceService.create(e).subscribe(e=>this.actionsForSuccess(e),e=>this.actionsForError(e))}updateResource(){const e=this.jsonDataToResourceFn(this.resourceForm.value);this.resourceService.update(e).subscribe(e=>this.actionsForSuccess(e),e=>this.actionsForError(e))}actionsForError(e){this.submittingForm=!1,this.serverErrorMessages=422==e.status?JSON.parse(e._body).errors:["Falha na comunica\xe7\xe3o com o servidor. Por Favor tente mais tarde."]}actionsForSuccess(e){const t=this.route.snapshot.parent.url[0].path;this.router.navigateByUrl(t,{skipLocationChange:!0}).then(()=>this.router.navigate([t,e.id,"edit"]))}}return e.\u0275fac=function(e){c.Yb()},e.\u0275dir=c.Gb({type:e}),e})()},zkNK:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var s=r("PFOJ"),i=r("fXoL");let o=(()=>{class e{constructor(e){this.resourceService=e,this.resources=[]}ngOnInit(){this.resourceService.getAll().subscribe(e=>this.resources=e.sort((e,t)=>t.id-e.id),e=>alert("Erro ao carregar a lista"))}deleteResource(e){confirm("Deseja realmente excluir este item?")&&this.resourceService.delete(e.id).subscribe(()=>this.resources=this.resources.filter(t=>t!==e),()=>alert("Erro ao tentar Excluir"))}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(s.a))},e.\u0275dir=i.Gb({type:e}),e})()}}]);