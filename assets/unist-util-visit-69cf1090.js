import{v}from"./unist-util-visit-parents-7c0a8d5b.js";function h(l,n,e,u){let t,f,i;typeof n=="function"&&typeof e!="function"?(f=void 0,i=n,t=e):(f=n,i=e,t=u),v(l,f,a,t);function a(c,d){const o=d[d.length-1],p=o?o.children.indexOf(c):void 0;return i(c,p,o)}}export{h as v};