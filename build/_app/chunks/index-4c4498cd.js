function B(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(T)}function L(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ot(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function G(t){return Object.keys(t).length===0}function ut(t,n,e,r){if(t){const c=O(t,n,e,r);return t[0](c)}}function O(t,n,e,r){return t[1]&&r?I(e.ctx.slice(),t[1](r(n))):e.ctx}function at(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const a=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)a[o]=n.dirty[o]|c[o];return a}return n.dirty|c}return n.dirty}function ft(t,n,e,r,c,a){if(c){const l=O(n,e,r,a);t.p(l,c)}}function st(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let w=!1;function J(){w=!0}function K(){w=!1}function W(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<n.length;u++){const s=n[u];s.claim_order!==void 0&&i.push(s)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const u=n[i].claim_order,s=(c>0&&n[e[c]].claim_order<=u?c+1:W(1,c,y=>n[e[y]].claim_order,u))-1;r[i]=e[s]+1;const f=s+1;e[f]=i,c=Math.max(f,c)}const a=[],l=[];let o=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(a.push(n[i-1]);o>=i;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);a.reverse(),l.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<l.length;i++){for(;u<a.length&&l[i].claim_order>=a[u].claim_order;)u++;const s=u<a.length?a[u]:null;t.insertBefore(l[i],s)}}function R(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){w&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function dt(){return j(" ")}function ht(){return j("")}function mt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,r,c=!1){Z(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return r()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function z(t,n,e,r){return P(t,c=>c.nodeName===n,c=>{const a=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||a.push(o.name)}a.forEach(l=>c.removeAttribute(l))},()=>r(n))}function pt(t,n,e){return z(t,n,e,V)}function yt(t,n,e){return z(t,n,e,X)}function tt(t,n){return P(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>j(n),!0)}function gt(t){return tt(t," ")}function xt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function bt(t,n,e,r){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}let m;function h(t){m=t}function N(){if(!m)throw new Error("Function called outside component initialization");return m}function $t(t){N().$$.on_mount.push(t)}function wt(t){N().$$.after_update.push(t)}function Et(t,n){N().$$.context.set(t,n)}const d=[],M=[],b=[],q=[],D=Promise.resolve();let k=!1;function F(){k||(k=!0,D.then(H))}function kt(){return F(),D}function v(t){b.push(t)}const E=new Set;let x=0;function H(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),nt(n.$$)}for(h(null),d.length=0,x=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;q.length;)q.pop()();k=!1,E.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const $=new Set;let _;function vt(){_={r:0,c:[],p:_}}function jt(){_.r||p(_.c),_=_.p}function et(t,n){t&&t.i&&($.delete(t),t.i(n))}function Nt(t,n,e,r){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function St(t,n){const e={},r={},c={$$scope:1};let a=t.length;for(;a--;){const l=t[a],o=n[a];if(o){for(const i in l)i in o||(r[i]=1);for(const i in o)c[i]||(e[i]=o[i],c[i]=1);t[a]=o}else for(const i in l)c[i]=1}for(const l in r)l in e||(e[l]=void 0);return e}function At(t){return typeof t=="object"&&t!==null?t:{}}function Ct(t){t&&t.c()}function Mt(t,n){t&&t.l(n)}function it(t,n,e,r){const{fragment:c,on_mount:a,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),r||v(()=>{const i=a.map(T).filter(L);l?l.push(...i):p(i),t.$$.on_mount=[]}),o.forEach(v)}function rt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function qt(t,n,e,r,c,a,l,o=[-1]){const i=m;h(t);const u=t.$$={fragment:null,ctx:null,props:a,update:B,not_equal:c,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||i.$$.root};l&&l(u.root);let s=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...S)=>{const A=S.length?S[0]:y;return u.ctx&&c(u.ctx[f],u.ctx[f]=A)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](A),s&&ct(t,f)),y}):[],u.update(),s=!0,p(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){J();const f=Y(n.target);u.fragment&&u.fragment.l(f),f.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),K(),H()}h(i)}class Bt{$destroy(){rt(this,1),this.$destroy=B}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{St as A,At as B,rt as C,I as D,kt as E,ut as F,ft as G,st as H,at as I,R as J,ot as K,X as L,yt as M,Bt as S,Y as a,mt as b,pt as c,U as d,V as e,bt as f,_t as g,tt as h,qt as i,xt as j,dt as k,ht as l,gt as m,B as n,vt as o,Nt as p,jt as q,et as r,lt as s,j as t,Et as u,wt as v,$t as w,Ct as x,Mt as y,it as z};
