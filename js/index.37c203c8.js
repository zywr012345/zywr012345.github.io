import{D as d,E as _,F as u,G as y,y as v,u as L,H as E,I as O,J as P}from"./@vue/@vue.9ad28200.js";import{d as R,s as S,c as b}from"./pinia/pinia.47f9e839.js";import{c as k,a as w}from"./vue-router/vue-router.d2766a00.js";import{i as x}from"./pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js";import"./vue-demi/vue-demi.71ba0ef2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const B=(r,s)=>{const o=r.__vccOpts||r;for(const[i,e]of s)o[i]=e;return o},N={},V={class:"r-page r-f-c-c loading-page"},A=u("div",{class:"loading-blank"},[u("div",{class:"loading-circle-first"}),u("div",{class:"loading-circle-secondary"})],-1),C=[A];function I(r,s){return d(),_("div",V,C)}const T=B(N,[["render",I]]),$=R("assembly",{state:()=>({loading:!1,show:!1}),persist:{strategies:[{storage:sessionStorage,paths:["show"]},{storage:localStorage,paths:["hospitalList"]}],enabled:!0},getters:{hello(r){return r.name.split(" ")[0]}},actions:{setLoading(r){this.loading=r}}});const D={__name:"App",setup(r){const{loading:s}=S($());return(o,i)=>{const e=y("RouterView");return d(),_("div",null,[v(e),L(s)?(d(),E(T,{key:0})):O("",!0)])}}},q="modulepreload",F=function(r){return"/"+r},f={},p=function(s,o,i){if(!o||o.length===0)return s();const e=document.getElementsByTagName("link");return Promise.all(o.map(t=>{if(t=F(t),t in f)return;f[t]=!0;const n=t.endsWith(".css"),h=n?'[rel="stylesheet"]':"";if(!!i)for(let a=e.length-1;a>=0;a--){const l=e[a];if(l.href===t&&(!n||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${h}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":q,n||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),n)return new Promise((a,l)=>{c.addEventListener("load",a),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s())},H=k({history:w(),routes:[{path:"/description",component:()=>p(()=>import("./description/description.f1ccc34f.js"),["js/description/description.f1ccc34f.js","js/vant/vant.4cf63d45.js","js/@vue/@vue.9ad28200.js","js/@vant/@vant.ea70d43b.js","css/vant.8b89158d.css","js/pinia/pinia.47f9e839.js","js/vue-demi/vue-demi.71ba0ef2.js","js/crypto-js/crypto-js.0c1badba.js","js/axios/axios.707ed124.js","js/vue-router/vue-router.d2766a00.js","js/pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js","css/description.2e062a13.css"])},{path:"/",component:()=>p(()=>import("./description/new.dfb03232.js"),["js/description/new.dfb03232.js","js/@vue/@vue.9ad28200.js","js/pinia/pinia.47f9e839.js","js/vue-demi/vue-demi.71ba0ef2.js","js/vue-router/vue-router.d2766a00.js","js/pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js","css/new.36d01ee2.css"])}]});const m=P(D),g=b();g.use(x);m.use(H).use(g);m.mount("#app");export{B as _,$ as a};
