import{i as E,g,o as C,c as O,r as v,a as b,b as A,d as L,w as T,p as V,e as I,n as N,f as P,u as m,h as W}from"../@vue/@vue.02694737.js";var h=typeof window<"u";function y(e){return h?requestAnimationFrame(e):-1}function R(e){y(()=>y(e))}function q(e){const n=E(e,null);if(n){const t=g(),{link:i,unlink:r,internalChildren:s}=n;i(t),C(()=>r(t));const o=O(()=>s.indexOf(t));return{parent:n,index:o}}return{parent:null,index:v(-1)}}function j(e){const n=[],t=i=>{Array.isArray(i)&&i.forEach(r=>{var s;W(r)&&(n.push(r),(s=r.component)!=null&&s.subTree&&(n.push(r.component.subTree),t(r.component.subTree.children)),r.children&&t(r.children))})};return t(e),n}var k=(e,n)=>{const t=e.indexOf(n);return t===-1?e.findIndex(i=>n.key!==void 0&&n.key!==null&&i.type===n.type&&i.key===n.key):t};function z(e,n,t){const i=j(e.subTree.children);t.sort((s,o)=>k(i,s.vnode)-k(i,o.vnode));const r=t.map(s=>s.proxy);n.sort((s,o)=>{const u=r.indexOf(s),a=r.indexOf(o);return u-a})}function D(e){const n=b([]),t=b([]),i=g();return{children:n,linkChildren:s=>{V(e,Object.assign({link:a=>{a.proxy&&(t.push(a),n.push(a.proxy),z(i,n,t))},unlink:a=>{const d=t.indexOf(a);n.splice(d,1),t.splice(d,1)},children:n,internalChildren:t},s))}}}function B(e){let n;I(()=>{e(),N(()=>{n=!0})}),P(()=>{n&&e()})}function F(e,n,t={}){if(!h)return;const{target:i=window,passive:r=!1,capture:s=!1}=t;let o=!1,u;const a=f=>{if(o)return;const c=m(f);c&&!u&&(c.addEventListener(e,n,{capture:s,passive:r}),u=!0)},d=f=>{if(o)return;const c=m(f);c&&u&&(c.removeEventListener(e,n,s),u=!1)};C(()=>d(i)),A(()=>d(i)),B(()=>a(i));let w;return L(i)&&(w=T(i,(f,c)=>{d(c),a(f)})),()=>{w==null||w(),d(i),o=!0}}var l,x;function H(){if(!l&&(l=v(0),x=v(0),h)){const e=()=>{l.value=window.innerWidth,x.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:l,height:x}}var p;function S(){if(!p&&(p=v("visible"),h)){const e=()=>{p.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return p}export{D as a,S as b,F as c,R as d,q as e,H as u};
