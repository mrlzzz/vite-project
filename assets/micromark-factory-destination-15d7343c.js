import{c as h,m as B,i as C}from"./micromark-util-character-e5050e2b.js";function F(r,S,l,i,g,t,E,m,w){const N=w||Number.POSITIVE_INFINITY;let x=0;return b;function b(n){return n===60?(r.enter(i),r.enter(g),r.enter(t),r.consume(n),r.exit(t),I):n===null||n===32||n===41||h(n)?l(n):(r.enter(i),r.enter(E),r.enter(m),r.enter("chunkString",{contentType:"string"}),u(n))}function I(n){return n===62?(r.enter(t),r.consume(n),r.exit(t),r.exit(g),r.exit(i),S):(r.enter(m),r.enter("chunkString",{contentType:"string"}),a(n))}function a(n){return n===62?(r.exit("chunkString"),r.exit(m),I(n)):n===null||n===60||B(n)?l(n):(r.consume(n),n===92?L:a)}function L(n){return n===60||n===62||n===92?(r.consume(n),a):a(n)}function u(n){return!x&&(n===null||n===41||C(n))?(r.exit("chunkString"),r.exit(m),r.exit(E),r.exit(i),S(n)):x<N&&n===40?(r.consume(n),x++,u):n===41?(r.consume(n),x--,u):n===null||n===32||n===40||h(n)?l(n):(r.consume(n),n===92?O:u)}function O(n){return n===40||n===41||n===92?(r.consume(n),u):u(n)}}export{F as f};
