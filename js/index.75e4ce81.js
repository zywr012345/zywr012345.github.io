import{x as p,y as f,z as u,O as y,J as v,u as E,P as L,E as O,Q as P}from"./@vue/@vue.426c8735.js";import{d as R,s as S,c as b}from"./pinia/pinia.b134cf9b.js";import{c as w,a as x}from"./vue-router/vue-router.ef3d6af3.js";import{i as V}from"./pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js";import{q as k}from"./r-swiper/r-swiper.60a74dd2.js";import"./vue-demi/vue-demi.71ba0ef2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const A=(r,o)=>{const s=r.__vccOpts||r;for(const[i,e]of o)s[i]=e;return s},B={},N={class:"r-page r-f-c-c loading-page"},C=u("div",{class:"loading-blank"},[u("div",{class:"loading-circle-first"}),u("div",{class:"loading-circle-secondary"})],-1),T=[C];function I(r,o){return p(),f("div",N,T)}const $=A(B,[["render",I]]),q=R("assembly",{state:()=>({loading:!1,show:!1}),persist:{strategies:[{storage:sessionStorage,paths:["show"]},{storage:localStorage,paths:["hospitalList"]}],enabled:!0},getters:{hello(r){return r.name.split(" ")[0]}},actions:{setLoading(r){this.loading=r}}});const D={__name:"App",setup(r){const{loading:o}=S(q());return(s,i)=>{const e=y("RouterView");return p(),f("div",null,[v(e),E(o)?(p(),L($,{key:0})):O("",!0)])}}},H="modulepreload",U=function(r){return"/"+r},_={},d=function(o,s,i){if(!s||s.length===0)return o();const e=document.getElementsByTagName("link");return Promise.all(s.map(t=>{if(t=U(t),t in _)return;_[t]=!0;const n=t.endsWith(".css"),g=n?'[rel="stylesheet"]':"";if(!!i)for(let a=e.length-1;a>=0;a--){const l=e[a];if(l.href===t&&(!n||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${g}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":H,n||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),n)return new Promise((a,l)=>{c.addEventListener("load",a),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>o())},W=w({history:x(),routes:[{path:"/",component:()=>d(()=>import("./description/new.418be88e.js"),["js/description/new.418be88e.js","js/global-config/global-config.077974d2.js","js/crypto-js/crypto-js.0c1badba.js","js/axios/axios.707ed124.js","js/pinia/pinia.b134cf9b.js","js/vue-demi/vue-demi.71ba0ef2.js","js/@vue/@vue.426c8735.js","js/r-swiper/r-swiper.60a74dd2.js","css/r-swiper.59a60f9e.css","js/vue-router/vue-router.ef3d6af3.js","js/pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js","css/new.6318981c.css"])},{path:"/new",component:()=>d(()=>import("./description/new.418be88e.js"),["js/description/new.418be88e.js","js/global-config/global-config.077974d2.js","js/crypto-js/crypto-js.0c1badba.js","js/axios/axios.707ed124.js","js/pinia/pinia.b134cf9b.js","js/vue-demi/vue-demi.71ba0ef2.js","js/@vue/@vue.426c8735.js","js/r-swiper/r-swiper.60a74dd2.js","css/r-swiper.59a60f9e.css","js/vue-router/vue-router.ef3d6af3.js","js/pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js","css/new.6318981c.css"])},{path:"/description",component:()=>d(()=>import("./description/description.46496f41.js"),["js/description/description.46496f41.js","js/vant/vant.785cc6df.js","js/@vue/@vue.426c8735.js","js/@vant/@vant.9f427fed.js","css/vant.f7390a82.css","js/global-config/global-config.077974d2.js","js/crypto-js/crypto-js.0c1badba.js","js/axios/axios.707ed124.js","js/pinia/pinia.b134cf9b.js","js/vue-demi/vue-demi.71ba0ef2.js","js/vue-router/vue-router.ef3d6af3.js","js/pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js","js/r-swiper/r-swiper.60a74dd2.js","css/r-swiper.59a60f9e.css","css/description.45cc0c43.css"])}]});console.log(k);const m=P(D),h=b();h.use(V);m.use(W).use(h);m.mount("#app");export{A as _,q as a};
