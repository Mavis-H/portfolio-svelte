import{i as me,t as ne}from"../chunks/projects.2a4e28ef.js";import{s as de,a as S,f as j,c as M,g as y,h as V,d,j as E,i as T,O as H,K as $,I as te,n as R,l as F,m as G,p as X,M as ee,L as K,u as he}from"../chunks/scheduler.740bcf2d.js";import{S as $e,i as ge,b as z,d as B,m as N,t as C,c as J,a as w,e as A,g as Q}from"../chunks/index.1c372b4b.js";import{g as W,U as Y,e as q}from"../chunks/UIcon.2944da0d.js";import{b as se}from"../chunks/paths.a7266c9a.js";import{C as ve}from"../chunks/CardLogo.2347b249.js";import{M as be}from"../chunks/app.3bbddc37.js";import{B as ke,M as we}from"../chunks/Banner.6394d53b.js";import{T as je}from"../chunks/TabTitle.1cdccd6e.js";import{C as pe}from"../chunks/Chip.8ec52db5.js";import{C as _e}from"../chunks/CardDivider.3a0deb7c.js";import{S as ye}from"../chunks/Screenshot.95190580.js";function Ee({params:a}){if(a.slug)return{project:me.find(r=>r.slug===a.slug)}}const We=Object.freeze(Object.defineProperty({__proto__:null,load:Ee},Symbol.toStringTag,{value:"Module"}));function oe(a,e,r){const t=a.slice();return t[11]=e[r],t[13]=r,t}function ae(a,e,r){const t=a.slice();return t[11]=e[r],t}function ce(a,e,r){const t=a.slice();return t[11]=e[r],t}function Ie(a){let e,r,t,l,o,s,n,c,u,_,I,f,h,P;r=new ke({props:{img:W(a[0].project.logo),$$slots:{default:[Pe]},$$scope:{ctx:a}}});const b=[Me,Se],x=[];function g(k,i){return k[0].project.description?0:1}s=g(a),n=x[s]=b[s](a),_=new _e({});const Z=[ze,Te],L=[];function v(k,i){return k[4].length>0?0:1}return f=v(a),h=L[f]=Z[f](a),{c(){e=j("div"),z(r.$$.fragment),t=S(),l=j("div"),o=j("div"),n.c(),c=S(),u=j("div"),z(_.$$.fragment),I=S(),h.c(),this.h()},l(k){e=y(k,"DIV",{class:!0});var i=V(e);B(r.$$.fragment,i),t=M(i),l=y(i,"DIV",{class:!0});var p=V(l);o=y(p,"DIV",{class:!0});var D=V(o);n.l(D),D.forEach(d),c=M(p),u=y(p,"DIV",{class:!0});var m=V(u);B(_.$$.fragment,m),m.forEach(d),I=M(p),h.l(p),p.forEach(d),i.forEach(d),this.h()},h(){E(o,"class","px-10px m-y-5"),E(u,"class","w-100% m-t-8"),E(l,"class","pt-3 pb-1 overflow-x-hidden w-full"),E(e,"class","flex flex-col items-center overflow-x-hidden")},m(k,i){T(k,e,i),N(r,e,null),$(e,t),$(e,l),$(l,o),x[s].m(o,null),$(l,c),$(l,u),N(_,u,null),$(l,I),L[f].m(l,null),P=!0},p(k,i){const p={};i&1&&(p.img=W(k[0].project.logo)),i&262145&&(p.$$scope={dirty:i,ctx:k}),r.$set(p);let D=s;s=g(k),s===D?x[s].p(k,i):(Q(),C(x[D],1,1,()=>{x[D]=null}),J(),n=x[s],n?n.p(k,i):(n=x[s]=b[s](k),n.c()),w(n,1),n.m(o,null)),h.p(k,i)},i(k){P||(w(r.$$.fragment,k),w(n),w(_.$$.fragment,k),w(h),P=!0)},o(k){C(r.$$.fragment,k),C(n),C(_.$$.fragment,k),C(h),P=!1},d(k){k&&d(e),A(r),x[s].d(),A(_),L[f].d()}}}function Ce(a){let e,r,t,l,o="Could not load project data...",s;return r=new Y({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=j("div"),z(r.$$.fragment),t=S(),l=j("p"),l.textContent=o,this.h()},l(n){e=y(n,"DIV",{class:!0});var c=V(e);B(r.$$.fragment,c),t=M(c),l=y(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-18mwztv"&&(l.textContent=o),c.forEach(d),this.h()},h(){E(l,"class","font-300"),E(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(n,c){T(n,e,c),N(r,e,null),$(e,t),$(e,l),s=!0},p:R,i(n){s||(w(r.$$.fragment,n),s=!0)},o(n){C(r.$$.fragment,n),s=!1},d(n){n&&d(e),A(r)}}}function De(a){let e=a[0].project.name+"",r;return{c(){r=F(e)},l(t){r=G(t,e)},m(t,l){T(t,r,l)},p(t,l){l&1&&e!==(e=t[0].project.name+"")&&X(r,e)},d(t){t&&d(r)}}}function Ve(a){let e,r,t,l,o=a[11].label+"",s,n,c;return r=new Y({props:{icon:"i-carbon-link"}}),{c(){e=j("div"),z(r.$$.fragment),t=S(),l=j("span"),s=F(o),n=S(),this.h()},l(u){e=y(u,"DIV",{class:!0});var _=V(e);B(r.$$.fragment,_),t=M(_),l=y(_,"SPAN",{});var I=V(l);s=G(I,o),I.forEach(d),_.forEach(d),n=M(u),this.h()},h(){E(e,"class","row-center gap-2")},m(u,_){T(u,e,_),N(r,e,null),$(e,t),$(e,l),$(l,s),T(u,n,_),c=!0},p(u,_){(!c||_&1)&&o!==(o=u[11].label+"")&&X(s,o)},i(u){c||(w(r.$$.fragment,u),c=!0)},o(u){C(r.$$.fragment,u),c=!1},d(u){u&&(d(e),d(n)),A(r)}}}function ie(a){let e,r;return e=new pe({props:{href:a[11].to,$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const o={};l&1&&(o.href=t[11].to),l&262145&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function xe(a){let e,r,t,l=a[11].name+"",o,s,n;return e=new ve({props:{src:W(a[11].logo),alt:a[11].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){z(e.$$.fragment),r=S(),t=j("span"),o=F(l),s=S(),this.h()},l(c){B(e.$$.fragment,c),r=M(c),t=y(c,"SPAN",{class:!0});var u=V(t);o=G(u,l),u.forEach(d),s=M(c),this.h()},h(){E(t,"class","text-[0.9em]")},m(c,u){N(e,c,u),T(c,r,u),T(c,t,u),$(t,o),T(c,s,u),n=!0},p(c,u){const _={};u&1&&(_.src=W(c[11].logo)),u&1&&(_.alt=c[11].name),e.$set(_),(!n||u&1)&&l!==(l=c[11].name+"")&&X(o,l)},i(c){n||(w(e.$$.fragment,c),n=!0)},o(c){C(e.$$.fragment,c),n=!1},d(c){c&&(d(r),d(t),d(s)),A(e,c)}}}function fe(a){let e,r;return e=new pe({props:{classes:"inline-flex flex-row items-center justify-center",href:`${se}/skills/${a[11].slug}`,$$slots:{default:[xe]},$$scope:{ctx:a}}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const o={};l&1&&(o.href=`${se}/skills/${t[11].slug}`),l&262145&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Pe(a){let e,r,t,l,o,s=a[0].project.type+"",n,c,u,_,I,f,h,P,b;t=new be({props:{$$slots:{default:[De]},$$scope:{ctx:a}}}),_=new _e({});let x=q(a[0].project.links),g=[];for(let i=0;i<x.length;i+=1)g[i]=ie(ce(a,x,i));const Z=i=>C(g[i],1,1,()=>{g[i]=null});let L=q(a[0].project.skills),v=[];for(let i=0;i<L.length;i+=1)v[i]=fe(ae(a,L,i));const k=i=>C(v[i],1,1,()=>{v[i]=null});return{c(){e=j("div"),r=j("div"),z(t.$$.fragment),l=S(),o=j("p"),n=F(s),c=S(),u=j("div"),z(_.$$.fragment),I=S(),f=j("div");for(let i=0;i<g.length;i+=1)g[i].c();h=S(),P=j("div");for(let i=0;i<v.length;i+=1)v[i].c();this.h()},l(i){e=y(i,"DIV",{class:!0});var p=V(e);r=y(p,"DIV",{class:!0});var D=V(r);B(t.$$.fragment,D),D.forEach(d),l=M(p),o=y(p,"P",{class:!0});var m=V(o);n=G(m,s),m.forEach(d),c=M(p),u=y(p,"DIV",{class:!0});var O=V(u);B(_.$$.fragment,O),O.forEach(d),I=M(p),f=y(p,"DIV",{class:!0});var le=V(f);for(let U=0;U<g.length;U+=1)g[U].l(le);le.forEach(d),h=M(p),P=y(p,"DIV",{class:!0});var re=V(P);for(let U=0;U<v.length;U+=1)v[U].l(re);re.forEach(d),p.forEach(d),this.h()},h(){E(r,"class","text-0.9em"),E(o,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),E(u,"class","w-75%"),E(f,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),E(P,"class","row-center flex-wrap m-b-2"),E(e,"class","col-center p-y-20")},m(i,p){T(i,e,p),$(e,r),N(t,r,null),$(e,l),$(e,o),$(o,n),$(e,c),$(e,u),N(_,u,null),$(e,I),$(e,f);for(let D=0;D<g.length;D+=1)g[D]&&g[D].m(f,null);$(e,h),$(e,P);for(let D=0;D<v.length;D+=1)v[D]&&v[D].m(P,null);b=!0},p(i,p){const D={};if(p&262145&&(D.$$scope={dirty:p,ctx:i}),t.$set(D),(!b||p&1)&&s!==(s=i[0].project.type+"")&&X(n,s),p&1){x=q(i[0].project.links);let m;for(m=0;m<x.length;m+=1){const O=ce(i,x,m);g[m]?(g[m].p(O,p),w(g[m],1)):(g[m]=ie(O),g[m].c(),w(g[m],1),g[m].m(f,null))}for(Q(),m=x.length;m<g.length;m+=1)Z(m);J()}if(p&1){L=q(i[0].project.skills);let m;for(m=0;m<L.length;m+=1){const O=ae(i,L,m);v[m]?(v[m].p(O,p),w(v[m],1)):(v[m]=fe(O),v[m].c(),w(v[m],1),v[m].m(P,null))}for(Q(),m=L.length;m<v.length;m+=1)k(m);J()}},i(i){if(!b){w(t.$$.fragment,i),w(_.$$.fragment,i);for(let p=0;p<x.length;p+=1)w(g[p]);for(let p=0;p<L.length;p+=1)w(v[p]);b=!0}},o(i){C(t.$$.fragment,i),C(_.$$.fragment,i),g=g.filter(Boolean);for(let p=0;p<g.length;p+=1)C(g[p]);v=v.filter(Boolean);for(let p=0;p<v.length;p+=1)C(v[p]);b=!1},d(i){i&&d(e),A(t),A(_),ee(g,i),ee(v,i)}}}function Se(a){let e,r,t,l,o="No description",s;return r=new Y({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=j("div"),z(r.$$.fragment),t=S(),l=j("p"),l.textContent=o,this.h()},l(n){e=y(n,"DIV",{class:!0});var c=V(e);B(r.$$.fragment,c),t=M(c),l=y(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-1ugej71"&&(l.textContent=o),c.forEach(d),this.h()},h(){E(l,"class","font-300"),E(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(n,c){T(n,e,c),N(r,e,null),$(e,t),$(e,l),s=!0},p:R,i(n){s||(w(r.$$.fragment,n),s=!0)},o(n){C(r.$$.fragment,n),s=!1},d(n){n&&d(e),A(r)}}}function Me(a){let e,r;return e=new we({props:{content:a[0].project.description}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const o={};l&1&&(o.content=t[0].project.description),e.$set(o)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Te(a){let e,r,t,l,o="No screenshots",s;return r=new Y({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=j("div"),z(r.$$.fragment),t=S(),l=j("p"),l.textContent=o,this.h()},l(n){e=y(n,"DIV",{class:!0});var c=V(e);B(r.$$.fragment,c),t=M(c),l=y(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-s36p3y"&&(l.textContent=o),c.forEach(d),this.h()},h(){E(l,"class","font-300"),E(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(n,c){T(n,e,c),N(r,e,null),$(e,t),$(e,l),s=!0},p:R,i(n){s||(w(r.$$.fragment,n),s=!0)},o(n){C(r.$$.fragment,n),s=!1},d(n){n&&d(e),A(r)}}}function ze(a){let e,r=q(a[4]),t=[];for(let l=0;l<r.length;l+=1)t[l]=ue(oe(a,r,l));return{c(){e=j("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=y(l,"DIV",{class:!0});var o=V(e);for(let s=0;s<t.length;s+=1)t[s].l(o);o.forEach(d),this.h()},h(){E(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(l,o){T(l,e,o);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,o){if(o&18){r=q(l[4]);let s;for(s=0;s<r.length;s+=1){const n=oe(l,r,s);t[s]?t[s].p(n,o):(t[s]=ue(n),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=r.length}},i:R,o:R,d(l){l&&d(e),ee(t,l)}}}function ue(a){let e,r,t,l,o=a[11].label+"",s,n,c,u;function _(){return a[9](a[13])}return{c(){e=j("div"),r=j("div"),t=S(),l=j("p"),s=F(o),n=S(),this.h()},l(I){e=y(I,"DIV",{class:!0});var f=V(e);r=y(f,"DIV",{class:!0,style:!0}),V(r).forEach(d),t=M(f),l=y(f,"P",{class:!0});var h=V(l);s=G(h,o),h.forEach(d),n=M(f),f.forEach(d),this.h()},h(){E(r,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"),E(r,"style",`background-image: url(${a[11].src});`),E(l,"class","text-[var(--tertiary-text)] font-300"),E(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(I,f){T(I,e,f),$(e,r),$(e,t),$(e,l),$(l,s),$(e,n),c||(u=[K(e,"click",_),K(e,"keydown",a[5]),K(e,"keypress",a[6]),K(e,"keyup",a[7]),K(e,"keyup",a[8])],c=!0)},p(I,f){a=I},d(I){I&&d(e),c=!1,he(u)}}}function Be(a){let e,r,t,l,o,s,n,c;e=new je({props:{title:a[2]}});const u=[Ce,Ie],_=[];function I(f,h){return f[0].project===void 0?0:1}return l=I(a),o=_[l]=u[l](a),n=new ye({props:{screenshot:a[3],onClose:a[10]}}),{c(){z(e.$$.fragment),r=S(),t=j("div"),o.c(),s=S(),z(n.$$.fragment),this.h()},l(f){B(e.$$.fragment,f),r=M(f),t=y(f,"DIV",{class:!0});var h=V(t);o.l(h),h.forEach(d),s=M(f),B(n.$$.fragment,f),this.h()},h(){E(t,"class","pb-10 overflow-x-hidden col flex-1")},m(f,h){N(e,f,h),T(f,r,h),T(f,t,h),_[l].m(t,null),T(f,s,h),N(n,f,h),c=!0},p(f,[h]){const P={};h&4&&(P.title=f[2]),e.$set(P);let b=l;l=I(f),l===b?_[l].p(f,h):(Q(),C(_[b],1,1,()=>{_[b]=null}),J(),o=_[l],o?o.p(f,h):(o=_[l]=u[l](f),o.c()),w(o,1),o.m(t,null));const x={};h&8&&(x.screenshot=f[3]),h&2&&(x.onClose=f[10]),n.$set(x)},i(f){c||(w(e.$$.fragment,f),w(o),w(n.$$.fragment,f),c=!0)},o(f){C(e.$$.fragment,f),C(o),C(n.$$.fragment,f),c=!1},d(f){f&&(d(r),d(t),d(s)),A(e,f),_[l].d(),A(n,f)}}}function Ne(a,e,r){var P;let t,l,{data:o}=e;const s=((P=o.project)==null?void 0:P.screenshots)??[];let n;function c(b){H.call(this,a,b)}function u(b){H.call(this,a,b)}function _(b){H.call(this,a,b)}function I(b){H.call(this,a,b)}const f=b=>r(1,n=b),h=()=>r(1,n=void 0);return a.$$set=b=>{"data"in b&&r(0,o=b.data)},a.$$.update=()=>{a.$$.dirty&2&&r(3,t=typeof n<"u"&&s[n]?s[n]:void 0),a.$$.dirty&1&&r(2,l=o.project?`${o.project.name} - ${ne}`:ne)},[o,n,l,t,s,c,u,_,I,f,h]}class Xe extends $e{constructor(e){super(),ge(this,e,Ne,Be,de,{data:0})}}export{Xe as component,We as universal};
