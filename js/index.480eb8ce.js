import{D as d,E as _,F as u,G as y,y as v,u as L,H as E,I as R,J as O}from"./@vue/@vue.02694737.js";import{d as P,s as S,c as b}from"./pinia/pinia.06b75112.js";import{c as w,a as k}from"./vue-router/vue-router.dc06ac4d.js";import{i as x}from"./pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js";import"./vue-demi/vue-demi.71ba0ef2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const B=(s,r)=>{const o=s.__vccOpts||s;for(const[i,e]of r)o[i]=e;return o},N={},V={class:"r-page r-f-c-c loading-page"},A=u("div",{class:"loading-blank"},[u("div",{class:"loading-circle-first"}),u("div",{class:"loading-circle-secondary"})],-1),C=[A];function I(s,r){return d(),_("div",V,C)}const T=B(N,[["render",I]]),$=P("assembly",{state:()=>({loading:!1,show:!1}),persist:{strategies:[{storage:sessionStorage,paths:["show"]},{storage:localStorage,paths:["hospitalList"]}],enabled:!0},getters:{hello(s){return s.name.split(" ")[0]}},actions:{setLoading(s){this.loading=s}}});const D={__name:"App",setup(s){const{loading:r}=S($());return(o,i)=>{const e=y("RouterView");return d(),_("div",null,[v(e),L(r)?(d(),E(T,{key:0})):R("",!0)])}}},H="modulepreload",q=function(s,r){return new URL(s,r).href},f={},p=function(r,o,i){if(!o||o.length===0)return r();const e=document.getElementsByTagName("link");return Promise.all(o.map(t=>{if(t=q(t,i),t in f)return;f[t]=!0;const n=t.endsWith(".css"),g=n?'[rel="stylesheet"]':"";if(!!i)for(let c=e.length-1;c>=0;c--){const l=e[c];if(l.href===t&&(!n||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${g}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":H,n||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),n)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())},F=w({history:k(),routes:[{path:"/description",component:()=>p(()=>import("./description/description.a10ba460.js"),["./description\\description.a10ba460.js","./vant\\vant.2dd2612f.js","./@vue\\@vue.02694737.js","./@vant\\@vant.641a7951.js","..\\css\\vant.8b89158d.css","./global-config\\global-config.26740380.js","./crypto-js\\crypto-js.0c1badba.js","./axios\\axios.707ed124.js","./pinia\\pinia.06b75112.js","./vue-demi\\vue-demi.71ba0ef2.js","./vue-router\\vue-router.dc06ac4d.js","./pinia-plugin-persist\\pinia-plugin-persist.4bd0ee57.js","..\\css\\description.2e062a13.css"],import.meta.url)},{path:"/",component:()=>p(()=>import("./description/new.1fc801bb.js"),["./description\\new.1fc801bb.js","./global-config\\global-config.26740380.js","./crypto-js\\crypto-js.0c1badba.js","./axios\\axios.707ed124.js","./pinia\\pinia.06b75112.js","./vue-demi\\vue-demi.71ba0ef2.js","./@vue\\@vue.02694737.js","./vue-router\\vue-router.dc06ac4d.js","./pinia-plugin-persist\\pinia-plugin-persist.4bd0ee57.js","..\\css\\new.12a0aa62.css"],import.meta.url)}]});const m=O(D),h=b();h.use(x);m.use(F).use(h);m.mount("#app");export{B as _,$ as a};
