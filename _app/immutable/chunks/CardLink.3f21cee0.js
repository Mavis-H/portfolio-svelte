import{s as i,f as c,g as f,h as m,d as l,j as o,i as u}from"./scheduler.740bcf2d.js";import{S as d,i as h,b as _,d as p,m as b,a as g,t as v,e as x}from"./index.1c372b4b.js";import{U as k}from"./UIcon.2944da0d.js";function y(s){let e,a,n;return a=new k({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){e=c("a"),_(a.$$.fragment),this.h()},l(t){e=f(t,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var r=m(e);p(a.$$.fragment,r),r.forEach(l),this.h()},h(){o(e,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"),o(e,"href",s[1]),o(e,"title",s[0]),o(e,"target","_blank"),o(e,"rel","noreferrer"),o(e,"data-help",s[0])},m(t,r){u(t,e,r),b(a,e,null),n=!0},p(t,[r]){(!n||r&2)&&o(e,"href",t[1]),(!n||r&1)&&o(e,"title",t[0]),(!n||r&1)&&o(e,"data-help",t[0])},i(t){n||(g(a.$$.fragment,t),n=!0)},o(t){v(a.$$.fragment,t),n=!1},d(t){t&&l(e),x(a)}}}function C(s,e,a){let{label:n}=e,{to:t}=e;return s.$$set=r=>{"label"in r&&a(0,n=r.label),"to"in r&&a(1,t=r.to)},[n,t]}class S extends d{constructor(e){super(),h(this,e,C,y,i,{label:0,to:1})}}export{S as C};
