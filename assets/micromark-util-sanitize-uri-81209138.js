import{b as f}from"./micromark-util-character-e5050e2b.js";import{e as a}from"./micromark-util-encode-71cc6c58.js";function C(i,s){const e=a(d(i||""));if(!s)return e;const r=e.indexOf(":"),o=e.indexOf("?"),n=e.indexOf("#"),t=e.indexOf("/");return r<0||t>-1&&r>t||o>-1&&r>o||n>-1&&r>n||s.test(e.slice(0,r))?e:""}function d(i){const s=[];let e=-1,r=0,o=0;for(;++e<i.length;){const n=i.charCodeAt(e);let t="";if(n===37&&f(i.charCodeAt(e+1))&&f(i.charCodeAt(e+2)))o=2;else if(n<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(n))||(t=String.fromCharCode(n));else if(n>55295&&n<57344){const c=i.charCodeAt(e+1);n<56320&&c>56319&&c<57344?(t=String.fromCharCode(n,c),o=1):t="�"}else t=String.fromCharCode(n);t&&(s.push(i.slice(r,e),encodeURIComponent(t)),r=e+o+1,t=""),o&&(e+=o,o=0)}return s.join("")+i.slice(r)}export{d as n,C as s};