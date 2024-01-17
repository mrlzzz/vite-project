import{R as M}from"./react-c08bfecb.js";var fe=e=>e.type==="checkbox",ue=e=>e instanceof Date,C=e=>e==null;const Xe=e=>typeof e=="object";var E=e=>!C(e)&&!Array.isArray(e)&&Xe(e)&&!ue(e),ft=e=>E(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,dt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,yt=(e,i)=>e.has(dt(i)),ht=e=>{const i=e.constructor&&e.constructor.prototype;return E(i)&&i.hasOwnProperty("isPrototypeOf")},Ee=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function G(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Ee&&(e instanceof Blob||e instanceof FileList))&&(s||E(e)))if(i=s?[]:{},!s&&!ht(e))i=e;else for(const r in e)e.hasOwnProperty(r)&&(i[r]=G(e[r]));else return e;return i}var de=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,d=(e,i,s)=>{if(!i||!E(e))return s;const r=de(i.split(/[,[\].]+?/)).reduce((l,a)=>C(l)?l:l[a],e);return k(r)||r===e?k(e[i])?s:e[i]:r},te=e=>typeof e=="boolean";const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},$={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},gt=M.createContext(null),vt=()=>M.useContext(gt);var _t=(e,i,s,r=!0)=>{const l={defaultValues:i._defaultValues};for(const a in e)Object.defineProperty(l,a,{get:()=>{const f=a;return i._proxyFormState[f]!==$.all&&(i._proxyFormState[f]=!r||$.all),s&&(s[f]=!0),e[f]}});return l},I=e=>E(e)&&!Object.keys(e).length,bt=(e,i,s,r)=>{s(e);const{name:l,...a}=e;return I(a)||Object.keys(a).length>=Object.keys(i).length||Object.keys(a).find(f=>i[f]===(!r||$.all))},xe=e=>Array.isArray(e)?e:[e];function Vt(e){const i=M.useRef(e);i.current=e,M.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var K=e=>typeof e=="string",At=(e,i,s,r,l)=>K(e)?(r&&i.watch.add(e),d(s,e,l)):Array.isArray(e)?e.map(a=>(r&&i.watch.add(a),d(s,a))):(r&&(i.watchAll=!0),s),pe=e=>/^\w*$/.test(e),Ye=e=>de(e.replace(/["|']|\]/g,"").split(/\.|\[/));function x(e,i,s){let r=-1;const l=pe(i)?[i]:Ye(i),a=l.length,f=a-1;for(;++r<a;){const V=l[r];let b=s;if(r!==f){const T=e[V];b=E(T)||Array.isArray(T)?T:isNaN(+l[r+1])?{}:[]}e[V]=b,e=e[V]}return e}const Ft="post";function Nt(e){const i=vt(),[s,r]=M.useState(!1),{control:l=i.control,onSubmit:a,children:f,action:V,method:b=Ft,headers:T,encType:q,onError:F,render:v,onSuccess:H,validateStatus:O,...ae}=e,Y=async se=>{let g=!1,L="";await l.handleSubmit(async N=>{const m=new FormData;let j="";try{j=JSON.stringify(N)}catch{}for(const R of l._names.mount)m.append(R,d(N,R));if(a&&await a({data:N,event:se,method:b,formData:m,formDataJson:j}),V)try{const R=[T&&T["Content-Type"],q].some(B=>B&&B.includes("json")),W=await fetch(V,{method:b,headers:{...T,...q?{"Content-Type":q}:{}},body:R?j:m});W&&(O?!O(W.status):W.status<200||W.status>=300)?(g=!0,F&&F({response:W}),L=String(W.status)):H&&H({response:W})}catch(R){g=!0,F&&F({error:R})}})(se),g&&e.control&&(e.control._subjects.state.next({isSubmitSuccessful:!1}),e.control.setError("root.server",{type:L}))};return M.useEffect(()=>{r(!0)},[]),v?M.createElement(M.Fragment,null,v({submit:Y})):M.createElement("form",{noValidate:s,action:V,method:b,encType:q,onSubmit:Y,...ae},f)}var xt=(e,i,s,r,l)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[r]:l||!0}}:{};const ke=(e,i,s)=>{for(const r of s||Object.keys(e)){const l=d(e,r);if(l){const{_f:a,...f}=l;if(a&&i(a.name)){if(a.ref.focus){a.ref.focus();break}else if(a.refs&&a.refs[0].focus){a.refs[0].focus();break}}else E(f)&&ke(f,i)}}};var We=e=>({isOnSubmit:!e||e===$.onSubmit,isOnBlur:e===$.onBlur,isOnChange:e===$.onChange,isOnAll:e===$.all,isOnTouch:e===$.onTouched}),$e=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),mt=(e,i,s)=>{const r=de(d(e,s));return x(r,"root",i[s]),x(e,s,r),e},Te=e=>e.type==="file",X=e=>typeof e=="function",he=e=>{if(!Ee)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ye=e=>K(e),Oe=e=>e.type==="radio",ge=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Ke={value:!0,isValid:!0};var Ze=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?Ke:{value:e[0].value,isValid:!0}:Ke:Je}return Je};const je={isValid:!1,value:null};var et=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,je):je;function Qe(e,i,s="validate"){if(ye(e)||Array.isArray(e)&&e.every(ye)||te(e)&&!e)return{type:s,message:ye(e)?e:"",ref:i}}var ne=e=>E(e)&&!ge(e)?e:{value:e,message:""},ze=async(e,i,s,r,l)=>{const{ref:a,refs:f,required:V,maxLength:b,minLength:T,min:q,max:F,pattern:v,validate:H,name:O,valueAsNumber:ae,mount:Y,disabled:se}=e._f,g=d(i,O);if(!Y||se)return{};const L=f?f[0]:a,N=A=>{r&&L.reportValidity&&(L.setCustomValidity(te(A)?"":A||""),L.reportValidity())},m={},j=Oe(a),R=fe(a),W=j||R,B=(ae||Te(a))&&k(a.value)&&k(g)||he(a)&&a.value===""||g===""||Array.isArray(g)&&!g.length,Z=xt.bind(null,O,s,m),Q=(A,_,S,U=z.maxLength,P=z.minLength)=>{const J=A?_:S;m[O]={type:A?U:P,message:J,ref:a,...Z(A?U:P,J)}};if(l?!Array.isArray(g)||!g.length:V&&(!W&&(B||C(g))||te(g)&&!g||R&&!Ze(f).isValid||j&&!et(f).isValid)){const{value:A,message:_}=ye(V)?{value:!!V,message:V}:ne(V);if(A&&(m[O]={type:z.required,message:_,ref:L,...Z(z.required,_)},!s))return N(_),m}if(!B&&(!C(q)||!C(F))){let A,_;const S=ne(F),U=ne(q);if(!C(g)&&!isNaN(g)){const P=a.valueAsNumber||g&&+g;C(S.value)||(A=P>S.value),C(U.value)||(_=P<U.value)}else{const P=a.valueAsDate||new Date(g),J=oe=>new Date(new Date().toDateString()+" "+oe),ee=a.type=="time",le=a.type=="week";K(S.value)&&g&&(A=ee?J(g)>J(S.value):le?g>S.value:P>new Date(S.value)),K(U.value)&&g&&(_=ee?J(g)<J(U.value):le?g<U.value:P<new Date(U.value))}if((A||_)&&(Q(!!A,S.message,U.message,z.max,z.min),!s))return N(m[O].message),m}if((b||T)&&!B&&(K(g)||l&&Array.isArray(g))){const A=ne(b),_=ne(T),S=!C(A.value)&&g.length>+A.value,U=!C(_.value)&&g.length<+_.value;if((S||U)&&(Q(S,A.message,_.message),!s))return N(m[O].message),m}if(v&&!B&&K(g)){const{value:A,message:_}=ne(v);if(ge(A)&&!g.match(A)&&(m[O]={type:z.pattern,message:_,ref:a,...Z(z.pattern,_)},!s))return N(_),m}if(H){if(X(H)){const A=await H(g,i),_=Qe(A,L);if(_&&(m[O]={..._,...Z(z.validate,_.message)},!s))return N(_.message),m}else if(E(H)){let A={};for(const _ in H){if(!I(A)&&!s)break;const S=Qe(await H[_](g,i),L,_);S&&(A={...S,...Z(_,S.message)},N(S.message),s&&(m[O]=A))}if(!I(A)&&(m[O]={ref:L,...A},!s))return m}}return N(!0),m};function wt(e,i){const s=i.slice(0,-1).length;let r=0;for(;r<s;)e=k(e)?r++:e[i[r++]];return e}function St(e){for(const i in e)if(e.hasOwnProperty(i)&&!k(e[i]))return!1;return!0}function p(e,i){const s=Array.isArray(i)?i:pe(i)?[i]:Ye(i),r=s.length===1?e:wt(e,s),l=s.length-1,a=s[l];return r&&delete r[a],l!==0&&(E(r)&&I(r)||Array.isArray(r)&&St(r))&&p(e,s.slice(0,-1)),e}function me(){let e=[];return{get observers(){return e},next:l=>{for(const a of e)a.next&&a.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(a=>a!==l)}}),unsubscribe:()=>{e=[]}}}var ve=e=>C(e)||!Xe(e);function re(e,i){if(ve(e)||ve(i))return e===i;if(ue(e)&&ue(i))return e.getTime()===i.getTime();const s=Object.keys(e),r=Object.keys(i);if(s.length!==r.length)return!1;for(const l of s){const a=e[l];if(!r.includes(l))return!1;if(l!=="ref"){const f=i[l];if(ue(a)&&ue(f)||E(a)&&E(f)||Array.isArray(a)&&Array.isArray(f)?!re(a,f):a!==f)return!1}}return!0}var tt=e=>e.type==="select-multiple",Dt=e=>Oe(e)||fe(e),we=e=>he(e)&&e.isConnected,rt=e=>{for(const i in e)if(X(e[i]))return!0;return!1};function _e(e,i={}){const s=Array.isArray(e);if(E(e)||s)for(const r in e)Array.isArray(e[r])||E(e[r])&&!rt(e[r])?(i[r]=Array.isArray(e[r])?[]:{},_e(e[r],i[r])):C(e[r])||(i[r]=!0);return i}function st(e,i,s){const r=Array.isArray(e);if(E(e)||r)for(const l in e)Array.isArray(e[l])||E(e[l])&&!rt(e[l])?k(i)||ve(s[l])?s[l]=Array.isArray(e[l])?_e(e[l],[]):{..._e(e[l])}:st(e[l],C(i)?{}:i[l],s[l]):s[l]=!re(e[l],i[l]);return s}var Se=(e,i)=>st(e,i,_e(i)),it=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:r})=>k(e)?e:i?e===""?NaN:e&&+e:s&&K(e)?new Date(e):r?r(e):e;function De(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Te(i)?i.files:Oe(i)?et(e.refs).value:tt(i)?[...i.selectedOptions].map(({value:s})=>s):fe(i)?Ze(e.refs).value:it(k(i.value)?e.ref.value:i.value,e)}var kt=(e,i,s,r)=>{const l={};for(const a of e){const f=d(i,a);f&&x(l,a,f._f)}return{criteriaMode:s,names:[...e],fields:l,shouldUseNativeValidation:r}},ce=e=>k(e)?e:ge(e)?e.source:E(e)?ge(e.value)?e.value.source:e.value:e,Et=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ge(e,i,s){const r=d(e,s);if(r||pe(s))return{error:r,name:s};const l=s.split(".");for(;l.length;){const a=l.join("."),f=d(i,a),V=d(e,a);if(f&&!Array.isArray(f)&&s!==a)return{name:s};if(V&&V.type)return{name:a,error:V};l.pop()}return{name:s}}var pt=(e,i,s,r,l)=>l.isOnAll?!1:!s&&l.isOnTouch?!(i||e):(s?r.isOnBlur:l.isOnBlur)?!e:(s?r.isOnChange:l.isOnChange)?e:!0,Tt=(e,i)=>!de(d(e,i)).length&&p(e,i);const Ot={mode:$.onSubmit,reValidateMode:$.onChange,shouldFocusError:!0};function Ct(e={},i){let s={...Ot,...e},r={submitCount:0,isDirty:!1,isLoading:X(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},l={},a=E(s.defaultValues)||E(s.values)?G(s.defaultValues||s.values)||{}:{},f=s.shouldUnregister?{}:G(a),V={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},T,q=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:me(),array:me(),state:me()},H=e.resetOptions&&e.resetOptions.keepDirtyValues,O=We(s.mode),ae=We(s.reValidateMode),Y=s.criteriaMode===$.all,se=t=>n=>{clearTimeout(q),q=setTimeout(t,n)},g=async t=>{if(F.isValid||t){const n=s.resolver?I((await B()).errors):await Q(l,!0);n!==r.isValid&&v.state.next({isValid:n})}},L=t=>F.isValidating&&v.state.next({isValidating:t}),N=(t,n=[],u,y,c=!0,o=!0)=>{if(y&&u){if(V.action=!0,o&&Array.isArray(d(l,t))){const h=u(d(l,t),y.argA,y.argB);c&&x(l,t,h)}if(o&&Array.isArray(d(r.errors,t))){const h=u(d(r.errors,t),y.argA,y.argB);c&&x(r.errors,t,h),Tt(r.errors,t)}if(F.touchedFields&&o&&Array.isArray(d(r.touchedFields,t))){const h=u(d(r.touchedFields,t),y.argA,y.argB);c&&x(r.touchedFields,t,h)}F.dirtyFields&&(r.dirtyFields=Se(a,f)),v.state.next({name:t,isDirty:_(t,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else x(f,t,n)},m=(t,n)=>{x(r.errors,t,n),v.state.next({errors:r.errors})},j=(t,n,u,y)=>{const c=d(l,t);if(c){const o=d(f,t,k(u)?d(a,t):u);k(o)||y&&y.defaultChecked||n?x(f,t,n?o:De(c._f)):P(t,o),V.mount&&g()}},R=(t,n,u,y,c)=>{let o=!1,h=!1;const w={name:t};if(!u||y){F.isDirty&&(h=r.isDirty,r.isDirty=w.isDirty=_(),o=h!==w.isDirty);const D=re(d(a,t),n);h=d(r.dirtyFields,t),D?p(r.dirtyFields,t):x(r.dirtyFields,t,!0),w.dirtyFields=r.dirtyFields,o=o||F.dirtyFields&&h!==!D}if(u){const D=d(r.touchedFields,t);D||(x(r.touchedFields,t,u),w.touchedFields=r.touchedFields,o=o||F.touchedFields&&D!==u)}return o&&c&&v.state.next(w),o?w:{}},W=(t,n,u,y)=>{const c=d(r.errors,t),o=F.isValid&&te(n)&&r.isValid!==n;if(e.delayError&&u?(T=se(()=>m(t,u)),T(e.delayError)):(clearTimeout(q),T=null,u?x(r.errors,t,u):p(r.errors,t)),(u?!re(c,u):c)||!I(y)||o){const h={...y,...o&&te(n)?{isValid:n}:{},errors:r.errors,name:t};r={...r,...h},v.state.next(h)}L(!1)},B=async t=>s.resolver(f,s.context,kt(t||b.mount,l,s.criteriaMode,s.shouldUseNativeValidation)),Z=async t=>{const{errors:n}=await B(t);if(t)for(const u of t){const y=d(n,u);y?x(r.errors,u,y):p(r.errors,u)}else r.errors=n;return n},Q=async(t,n,u={valid:!0})=>{for(const y in t){const c=t[y];if(c){const{_f:o,...h}=c;if(o){const w=b.array.has(o.name),D=await ze(c,f,Y,s.shouldUseNativeValidation&&!n,w);if(D[o.name]&&(u.valid=!1,n))break;!n&&(d(D,o.name)?w?mt(r.errors,D,o.name):x(r.errors,o.name,D[o.name]):p(r.errors,o.name))}h&&await Q(h,n,u)}}return u.valid},A=()=>{for(const t of b.unMount){const n=d(l,t);n&&(n._f.refs?n._f.refs.every(u=>!we(u)):!we(n._f.ref))&&be(t)}b.unMount=new Set},_=(t,n)=>(t&&n&&x(f,t,n),!re(Ce(),a)),S=(t,n,u)=>At(t,b,{...V.mount?f:k(n)?a:K(t)?{[t]:n}:n},u,n),U=t=>de(d(V.mount?f:a,t,e.shouldUnregister?d(a,t,[]):[])),P=(t,n,u={})=>{const y=d(l,t);let c=n;if(y){const o=y._f;o&&(!o.disabled&&x(f,t,it(n,o)),c=he(o.ref)&&C(n)?"":n,tt(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(w=>w===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):Te(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:t,values:{...f}})))}(u.shouldDirty||u.shouldTouch)&&R(t,c,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&oe(t)},J=(t,n,u)=>{for(const y in n){const c=n[y],o=`${t}.${y}`,h=d(l,o);(b.array.has(t)||!ve(c)||h&&!h._f)&&!ue(c)?J(o,c,u):P(o,c,u)}},ee=(t,n,u={})=>{const y=d(l,t),c=b.array.has(t),o=G(n);x(f,t,o),c?(v.array.next({name:t,values:{...f}}),(F.isDirty||F.dirtyFields)&&u.shouldDirty&&v.state.next({name:t,dirtyFields:Se(a,f),isDirty:_(t,o)})):y&&!y._f&&!C(o)?J(t,o,u):P(t,o,u),$e(t,b)&&v.state.next({...r}),v.values.next({name:t,values:{...f}}),!V.mount&&i()},le=async t=>{const n=t.target;let u=n.name,y=!0;const c=d(l,u),o=()=>n.type?De(c._f):ft(t);if(c){let h,w;const D=o(),ie=t.type===He.BLUR||t.type===He.FOCUS_OUT,lt=!Et(c._f)&&!s.resolver&&!d(r.errors,u)&&!c._f.deps||pt(ie,d(r.touchedFields,u),r.isSubmitted,ae,O),Ae=$e(u,b,ie);x(f,u,D),ie?(c._f.onBlur&&c._f.onBlur(t),T&&T(0)):c._f.onChange&&c._f.onChange(t);const Fe=R(u,D,ie,!1),ot=!I(Fe)||Ae;if(!ie&&v.values.next({name:u,type:t.type,values:{...f}}),lt)return F.isValid&&g(),ot&&v.state.next({name:u,...Ae?{}:Fe});if(!ie&&Ae&&v.state.next({...r}),L(!0),s.resolver){const{errors:Ie}=await B([u]),ct=Ge(r.errors,l,u),qe=Ge(Ie,l,ct.name||u);h=qe.error,u=qe.name,w=I(Ie)}else h=(await ze(c,f,Y,s.shouldUseNativeValidation))[u],y=Number.isNaN(D)||D===d(f,u,D),y&&(h?w=!1:F.isValid&&(w=await Q(l,!0)));y&&(c._f.deps&&oe(c._f.deps),W(u,w,h,Fe))}},oe=async(t,n={})=>{let u,y;const c=xe(t);if(L(!0),s.resolver){const o=await Z(k(t)?t:c);u=I(o),y=t?!c.some(h=>d(o,h)):u}else t?(y=(await Promise.all(c.map(async o=>{const h=d(l,o);return await Q(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!y&&!r.isValid)&&g()):y=u=await Q(l);return v.state.next({...!K(t)||F.isValid&&u!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:u}:{},errors:r.errors,isValidating:!1}),n.shouldFocus&&!y&&ke(l,o=>o&&d(r.errors,o),t?c:b.mount),y},Ce=t=>{const n={...a,...V.mount?f:{}};return k(t)?n:K(t)?d(n,t):t.map(u=>d(n,u))},Le=(t,n)=>({invalid:!!d((n||r).errors,t),isDirty:!!d((n||r).dirtyFields,t),isTouched:!!d((n||r).touchedFields,t),error:d((n||r).errors,t)}),nt=t=>{t&&xe(t).forEach(n=>p(r.errors,n)),v.state.next({errors:t?r.errors:{}})},Re=(t,n,u)=>{const y=(d(l,t,{_f:{}})._f||{}).ref;x(r.errors,t,{...n,ref:y}),v.state.next({name:t,errors:r.errors,isValid:!1}),u&&u.shouldFocus&&y&&y.focus&&y.focus()},ut=(t,n)=>X(t)?v.values.subscribe({next:u=>t(S(void 0,n),u)}):S(t,n,!0),be=(t,n={})=>{for(const u of t?xe(t):b.mount)b.mount.delete(u),b.array.delete(u),n.keepValue||(p(l,u),p(f,u)),!n.keepError&&p(r.errors,u),!n.keepDirty&&p(r.dirtyFields,u),!n.keepTouched&&p(r.touchedFields,u),!s.shouldUnregister&&!n.keepDefaultValue&&p(a,u);v.values.next({values:{...f}}),v.state.next({...r,...n.keepDirty?{isDirty:_()}:{}}),!n.keepIsValid&&g()},Ue=({disabled:t,name:n,field:u,fields:y})=>{if(te(t)){const c=t?void 0:d(f,n,De(u?u._f:d(y,n)._f));x(f,n,c),R(n,c,!1,!1,!0)}},Ve=(t,n={})=>{let u=d(l,t);const y=te(n.disabled);return x(l,t,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:t}},name:t,mount:!0,...n}}),b.mount.add(t),u?Ue({field:u,disabled:n.disabled,name:t}):j(t,!0,n.value),{...y?{disabled:n.disabled}:{},...s.progressive?{required:!!n.required,min:ce(n.min),max:ce(n.max),minLength:ce(n.minLength),maxLength:ce(n.maxLength),pattern:ce(n.pattern)}:{},name:t,onChange:le,onBlur:le,ref:c=>{if(c){Ve(t,n),u=d(l,t);const o=k(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Dt(o),w=u._f.refs||[];if(h?w.find(D=>D===o):o===u._f.ref)return;x(l,t,{_f:{...u._f,...h?{refs:[...w.filter(we),o,...Array.isArray(d(a,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),j(t,!1,void 0,o)}else u=d(l,t,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||n.shouldUnregister)&&!(yt(b.array,t)&&V.action)&&b.unMount.add(t)}}},Me=()=>s.shouldFocusError&&ke(l,t=>t&&d(r.errors,t),b.mount),Ne=(t,n)=>async u=>{u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let y=G(f);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:o}=await B();r.errors=c,y=o}else await Q(l);p(r.errors,"root"),I(r.errors)?(v.state.next({errors:{}}),await t(y,u)):(n&&await n({...r.errors},u),Me(),setTimeout(Me)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:I(r.errors),submitCount:r.submitCount+1,errors:r.errors})},at=(t,n={})=>{d(l,t)&&(k(n.defaultValue)?ee(t,d(a,t)):(ee(t,n.defaultValue),x(a,t,n.defaultValue)),n.keepTouched||p(r.touchedFields,t),n.keepDirty||(p(r.dirtyFields,t),r.isDirty=n.defaultValue?_(t,d(a,t)):_()),n.keepError||(p(r.errors,t),F.isValid&&g()),v.state.next({...r}))},Be=(t,n={})=>{const u=t?G(t):a,y=G(u),c=t&&!I(t)?y:a;if(n.keepDefaultValues||(a=u),!n.keepValues){if(n.keepDirtyValues||H)for(const o of b.mount)d(r.dirtyFields,o)?x(c,o,d(f,o)):ee(o,d(c,o));else{if(Ee&&k(t))for(const o of b.mount){const h=d(l,o);if(h&&h._f){const w=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(he(w)){const D=w.closest("form");if(D){D.reset();break}}}}l={}}f=e.shouldUnregister?n.keepDefaultValues?G(a):{}:G(c),v.array.next({values:{...c}}),v.values.next({values:{...c}})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!V.mount&&i(),V.mount=!F.isValid||!!n.keepIsValid,V.watch=!!e.shouldUnregister,v.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:n.keepDirty?r.isDirty:!!(n.keepDefaultValues&&!re(t,a)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:n.keepDirtyValues?r.dirtyFields:n.keepDefaultValues&&t?Se(a,t):{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitSuccessful:n.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Pe=(t,n)=>Be(X(t)?t(f):t,n);return{control:{register:Ve,unregister:be,getFieldState:Le,handleSubmit:Ne,setError:Re,_executeSchema:B,_getWatch:S,_getDirty:_,_updateValid:g,_removeUnmounted:A,_updateFieldArray:N,_updateDisabledField:Ue,_getFieldArray:U,_reset:Be,_resetDefaultValues:()=>X(s.defaultValues)&&s.defaultValues().then(t=>{Pe(t,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:v,_proxyFormState:F,get _fields(){return l},get _formValues(){return f},get _state(){return V},set _state(t){V=t},get _defaultValues(){return a},get _names(){return b},set _names(t){b=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:oe,register:Ve,handleSubmit:Ne,watch:ut,setValue:ee,getValues:Ce,reset:Pe,resetField:at,clearErrors:nt,unregister:be,setError:Re,setFocus:(t,n={})=>{const u=d(l,t),y=u&&u._f;if(y){const c=y.refs?y.refs[0]:y.ref;c.focus&&(c.focus(),n.shouldSelect&&c.select())}},getFieldState:Le}}function Bt(e={}){const i=M.useRef(),s=M.useRef(),[r,l]=M.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:X(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Ct(e,()=>l(f=>({...f}))),formState:r});const a=i.current.control;return a._options=e,Vt({subject:a._subjects.state,next:f=>{bt(f,a._proxyFormState,a._updateFormState,!0)&&l({...a._formState})}}),M.useEffect(()=>{e.values&&!re(e.values,s.current)?(a._reset(e.values,a._options.resetOptions),s.current=e.values):a._resetDefaultValues()},[e.values,a]),M.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),i.current.formState=_t(r,a),i.current}export{Nt as F,Bt as u};