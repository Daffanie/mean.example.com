(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{iA4i:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=(u("JQBr"),u("U0XV")),t=function(){function l(l,n,u,e){this.usersService=l,this.activatedRoute=n,this.router=u,this.cookieService=e}return l.prototype.ngOnInit=function(){var l=this;0==this.cookieService.check("sugar")?window.location.href="/ionicUsers/#/login":this.activatedRoute.params.subscribe(function(n){l.getUser(n.id)})},l.prototype.deleteUser=function(l){var n=this;this.usersService.delete(l).subscribe(function(l){1==l.success&&n.router.navigate(["/users"])})},l.prototype.getUser=function(l){var n=this;this.usersService.user(l).subscribe(function(l){n.user=l.user})},l}(),r=function(){return function(){}}(),i=u("pMnS"),b=u("oBZk"),c=u("ZZ/e"),s=u("ZYCi"),a=u("jmvC"),p=e.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,b.J,b.l)),e.ob(1,49152,null,0,c.y,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,b.V,b.x)),e.ob(3,49152,null,0,c.yb,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.A,b.c)),e.ob(5,49152,null,0,c.i,[e.h,e.k],null,null),(l()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,b.P,b.s)),e.ob(7,49152,null,0,c.O,[e.h,e.k],null,null),(l()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,b.U,b.w)),e.ob(9,49152,null,0,c.wb,[e.h,e.k],null,null),(l()(),e.Db(-1,0,["User-Delete"])),(l()(),e.pb(11,0,null,null,13,"ion-content",[["padding",""]],null,null,null,b.F,b.h)),e.ob(12,49152,null,0,c.r,[e.h,e.k],null,null),(l()(),e.pb(13,0,null,0,11,"ion-card",[],null,null,null,b.E,b.d)),e.ob(14,49152,null,0,c.j,[e.h,e.k],null,null),(l()(),e.pb(15,0,null,0,4,"ion-card-header",[],null,null,null,b.C,b.f)),e.ob(16,49152,null,0,c.l,[e.h,e.k],null,null),(l()(),e.pb(17,0,null,0,2,"ion-card-title",[["color","danger"]],null,null,null,b.D,b.g)),e.ob(18,49152,null,0,c.n,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Db(19,0,["Are you sure you want to delete ","?"])),(l()(),e.pb(20,0,null,0,4,"ion-card-content",[],null,null,null,b.B,b.e)),e.ob(21,49152,null,0,c.k,[e.h,e.k],null,null),(l()(),e.pb(22,0,null,0,2,"ion-button",[["color","danger"],["expand","full"]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.deleteUser(o.user._id)&&e),e},b.z,b.b)),e.ob(23,49152,null,0,c.h,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Db(24,0,[" Delete ",""]))],function(l,n){l(n,18,0,"danger"),l(n,23,0,"danger","full")},function(l,n){var u=n.component;l(n,19,0,u.user.username),l(n,24,0,u.user.username)})}function h(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,1,"app-user-delete",[],null,null,null,d,p)),e.ob(1,114688,null,0,t,[o.a,s.a,s.m,a.a],null,null)],function(l,n){l(n,1,0)},null)}var f=e.lb("app-user-delete",t,h,{},{},[]),w=u("Ip0R"),k=u("gIcY");u.d(n,"UserDeletePageModuleNgFactory",function(){return g});var g=e.mb(r,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[i.a,f]],[3,e.j],e.x]),e.wb(4608,w.k,w.j,[e.u,[2,w.r]]),e.wb(4608,k.g,k.g,[]),e.wb(4608,c.a,c.a,[e.z,e.g]),e.wb(4608,c.Cb,c.Cb,[c.a,e.j,e.q]),e.wb(4608,c.Fb,c.Fb,[c.a,e.j,e.q]),e.wb(1073742336,w.b,w.b,[]),e.wb(1073742336,k.f,k.f,[]),e.wb(1073742336,k.a,k.a,[]),e.wb(1073742336,c.Ab,c.Ab,[]),e.wb(1073742336,s.o,s.o,[[2,s.u],[2,s.m]]),e.wb(1073742336,r,r,[]),e.wb(1024,s.k,function(){return[[{path:"",component:t}]]},[])])})}}]);