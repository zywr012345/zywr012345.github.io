import{x as f,y as m,z as y,O as $,J as V,u as X,P as F,E as x,a as j,r as z,e as H,n as C,A as v,B as Y,C as q,D as U,F as W,G,H as J,Q as K}from"./@vue/@vue.426c8735.js";import{d as Q,s as Z,c as ee}from"./pinia/pinia.b134cf9b.js";import{c as te,a as oe}from"./vue-router/vue-router.ef3d6af3.js";import{i as se}from"./pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js";import{R as ne}from"./r-swiper/r-swiper.7d6ff3b5.js";import"./vue-demi/vue-demi.71ba0ef2.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(s){if(s.ep)return;s.ep=!0;const e=a(s);fetch(s.href,e)}})();const ie=(n,d)=>{const a=n.__vccOpts||n;for(const[o,s]of d)a[o]=s;return a},re={},de={class:"r-page r-f-c-c loading-page"},ae=y("div",{class:"loading-blank"},[y("div",{class:"loading-circle-first"}),y("div",{class:"loading-circle-secondary"})],-1),le=[ae];function ce(n,d){return f(),m("div",de,le)}const ue=ie(re,[["render",ce]]),pe=Q("assembly",{state:()=>({loading:!1,show:!1}),persist:{strategies:[{storage:sessionStorage,paths:["show"]},{storage:localStorage,paths:["hospitalList"]}],enabled:!0},getters:{hello(n){return n.name.split(" ")[0]}},actions:{setLoading(n){this.loading=n}}});const fe={__name:"App",setup(n){const{loading:d}=Z(pe());return(a,o)=>{const s=$("RouterView");return f(),m("div",null,[V(s),X(d)?(f(),F(ue,{key:0})):x("",!0)])}}},me="modulepreload",he=function(n){return"/"+n},N={},S=function(d,a,o){if(!a||a.length===0)return d();const s=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=he(e),e in N)return;N[e]=!0;const r=e.endsWith(".css"),_=r?'[rel="stylesheet"]':"";if(!!o)for(let p=s.length-1;p>=0;p--){const g=s[p];if(g.href===e&&(!r||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${_}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":me,r||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),r)return new Promise((p,g)=>{l.addEventListener("load",p),l.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>d())},ge=te({history:oe(),routes:[{path:"/",component:()=>S(()=>import("./description/new.399bf6a4.js"),["js/description/new.399bf6a4.js","js/global-config/global-config.302737ae.js","js/crypto-js/crypto-js.0c1badba.js","js/axios/axios.707ed124.js","js/pinia/pinia.b134cf9b.js","js/vue-demi/vue-demi.71ba0ef2.js","js/@vue/@vue.426c8735.js","js/r-swiper/r-swiper.7d6ff3b5.js","css/r-swiper.3716bedc.css","js/vue-router/vue-router.ef3d6af3.js","js/pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js","css/new.088ce869.css"])},{path:"/new",component:()=>S(()=>import("./description/new.399bf6a4.js"),["js/description/new.399bf6a4.js","js/global-config/global-config.302737ae.js","js/crypto-js/crypto-js.0c1badba.js","js/axios/axios.707ed124.js","js/pinia/pinia.b134cf9b.js","js/vue-demi/vue-demi.71ba0ef2.js","js/@vue/@vue.426c8735.js","js/r-swiper/r-swiper.7d6ff3b5.js","css/r-swiper.3716bedc.css","js/vue-router/vue-router.ef3d6af3.js","js/pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js","css/new.088ce869.css"])},{path:"/description",component:()=>S(()=>import("./description/description.1f5bb9f1.js"),["js/description/description.1f5bb9f1.js","js/vant/vant.785cc6df.js","js/@vue/@vue.426c8735.js","js/@vant/@vant.9f427fed.js","css/vant.f7390a82.css","js/global-config/global-config.302737ae.js","js/crypto-js/crypto-js.0c1badba.js","js/axios/axios.707ed124.js","js/pinia/pinia.b134cf9b.js","js/vue-demi/vue-demi.71ba0ef2.js","js/vue-router/vue-router.ef3d6af3.js","js/pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js","js/r-swiper/r-swiper.7d6ff3b5.js","css/r-swiper.3716bedc.css","css/description.45cc0c43.css"])}]});const ve=(n,d)=>{const a=n.__vccOpts||n;for(const[o,s]of d)a[o]=s;return a},R=n=>(q("data-v-e030df06"),n=n(),U(),n),ye=[R(()=>y("div",{class:"iconfont icon-yuyinjiantou"},null,-1))],_e=[R(()=>y("div",{class:"iconfont icon-yuyinjiantou"},null,-1))],we={key:0,class:"indicator-box"},xe=["onClick"];ve(Object.assign({name:"rSwiper"},{__name:"swiper",props:{fast:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!0},playTime:{type:[Number,String],default:5e3},speed:{type:Number,default:500},therehold:{type:[Number,String],default:100},slide:{type:Number,default:0},indicator:{type:Boolean,default:!0},indicatorFlash:{type:Boolean,default:!0},noMove:{type:String,default:"cs"},mobile:{type:Boolean,default:!1},vLock:{default:!1}},emits:["loadEnd","transitionend"],setup(n,{expose:d,emit:a}){const o=n;function s(t){return Array.prototype.slice.call(t)}const e=j({noMove:!1,pSlide:0,be:null,dim:!1,dst:0,drd:0,dsw:0,ds:null,dsn:0,drsn:0,dc:0,dt:null,pos:{sx:0,mx:0,ex:0,sy:0,my:0,l:0,d:0},moving:!1,u:!1,A:"",mousedown:!1,I:!1,v:!1,x:!1});let r=z(null);function _(){e.dt&&clearTimeout(e.dt),e.dt=null,e.dt=setTimeout(()=>{e.moving=!0,e.u=!1,l(o.speed),u(-(e.dsw+Math.abs(c())+r.value.parentNode.getBoundingClientRect().left))},+o.playTime)}function u(t){r.value.style.transform="translate3d("+t+"px, 0, 0)"}function l(t){r.value.style.transitionDuration=t+"ms"}function p(){let t=Math.round(Math.abs(c())/e.dsw);e.dc=t-1}function g(){e.moving=!0,C(()=>{setTimeout(()=>{l(0),p();let t=e.dc+1;t>=e.dsn-1?(u(-e.dsw),e.dc=0):t===0&&(u(-e.dsw*(e.dsn-2)),e.dc=e.dsn-3),a("transitionend",e.dc),e.moving=!1,o.autoPlay&&_()},0)})}function M(t){if(t.target.className.indexOf(o.noMove)!==-1||e.I)e.noMove=!0;else if(e.noMove=!1,!e.moving&&!e.v){if(t.type==="mousedown")e.mousedown=!0,e.pos.sx=t.pageX,e.pos.l=c(),clearTimeout(e.dt),l(0);else{e.A=s(t.changedTouches)[0].identifier;let i=t.touches.length-1;clearTimeout(e.dt),l(0),e.u=!0,e.pos.sx=t.touches[i].clientX,e.pos.sy=t.touches[i].clientY,e.pos.l=c()}o.fast&&(e.dst=new Date)}}function T(t){if(e.mousedown||e.u){if(e.noMove||e.I)return;if(!e.moving&&!e.v){if(t.type==="mousemove")e.mousedown&&(e.pos.mx=t.pageX,e.pos.d=e.pos.mx-e.pos.sx,u(e.pos.l+e.pos.d),p());else if(e.u){let i=t.touches.length-1;e.pos.mx=t.touches[i].clientX,e.pos.d=e.pos.mx-e.pos.sx,e.x||Math.abs(t.touches[i].clientY-e.pos.sy)<Math.abs(e.pos.d)?(e.v=!1,e.x=!0):(e.v=!0,e.x=!1,e.moving=!1),e.x&&(e.v=!1,e.x=!0,u(e.pos.l+e.pos.d),p())}}}}function k(t){if(e.noMove||e.I||e.v)e.v=!1;else if(e.x=!1,!e.moving)if(o.fast&&(e.dst=new Date-e.dst),t.type==="mouseup")e.mousedown&&(e.mousedown=!1,e.pos.ex=t.pageX,e.pos.d=e.pos.ex-e.pos.sx,B());else{let i=s(t.changedTouches)[0].identifier;!e.moving&&e.u&&i==e.A&&(e.u=!1,e.pos.ex=t.changedTouches[0].clientX,e.pos.d=e.pos.ex-e.pos.sx,B())}}function B(){p(),e.drd=o.fast&&e.dst<o.speed?e.dst:o.speed,l(e.drd);let t=Math.abs(c())%e.dsw,i=[],w="";if(i=c()>0?[t,e.dsw-t]:[e.dsw-t,t],(w=e.pos.d>0?"to-right":e.pos.d<0?"to-left":"none")=="none"&&o.autoPlay&&_(),w==="to-right")if(e.moving=!0,i[0]>+o.therehold){u(c()+i[1]);let h=(c()+i[1])/e.dsw;Math.abs(h)===0&&(e.u=!1)}else u(c()-i[0]);if(w==="to-left")if(e.moving=!0,i[1]>+o.therehold){u(c()-i[0]);let h=(c()-i[0])/e.dsw;Math.abs(h)===e.dsn-1&&(e.u=!1)}else u(c()+i[1]);e.noMove=!1}function c(){return r.value.getBoundingClientRect().left}function E(t){if(!e.moving){let i=Math.round(Math.abs(c())/e.dsw);if(t>e.dsn-2-1||t<0||i==t+1)return;e.moving=!0,clearTimeout(e.dt),l(o.speed),u(-e.dsw*(t+1))}}function P(){b(!0)}function O(){b(!1)}function b(t){o.fast&&(e.drd=new Date-e.be,e.drd=e.drd<o.speed?e.drd:o.speed,e.be=new Date),e.moving||(clearTimeout(e.dt),e.moving=!0,l(e.drd),u(t?c()+e.dsw:c()-e.dsw))}function D(t){o.vLock&&t.preventDefault()}function L(t){return t===e.dc||t+e.drsn===e.dc||t-e.drsn===e.dc}return e.drd={...o}.speed,e.pSlide={...o}.slide,e.dim=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),H(()=>{C(()=>{e.dsw=r.value.getBoundingClientRect().width,e.ds=s(r.value.children),e.drsn=e.ds.length,e.dsn=e.ds.length,e.drsn===1?e.I=!0:function(){let t=e.ds[0].cloneNode(e.ds[0],!0),i=e.ds[e.dsn-1].cloneNode(e.ds[e.dsn-1],!0);r.value.appendChild(t),r.value.insertBefore(i,e.ds[0]),e.ds=s(r.value.children),e.dsn=e.ds.length,function(){if(e.pSlide<0||e.pSlide>e.dsn-2-1)throw new Error("[r-swiper:Error]: You set an abnormal subscript, please check and reassign: slide"+e.pSlide);u(-e.dsw*(e.pSlide+1)),o.autoPlay&&_(),a("loadEnd"),console.log("%c 🚀 ~ 我写的代码 像诗一样优雅 ","background: linear-gradient(to right, orange, yellow, green, skyblue, indigo, violet, #471290); color: white; font-size: 16px;")}()}()})}),d({go:b,next:O,prev:P,slideTo:E}),(t,i)=>(f(),m("div",{class:"r-swiper-style",style:Y({"--speed":e.drd+"ms"}),onTouchmove:D},[y("div",{class:"r-swiper-box",ref_key:"swiper",ref:r,onTransitionend:g,onTouchstart:M,onMousedown:M,onTouchmove:T,onMousemove:T,onTouchend:k,onMouseup:k},[v(t.$slots,"default",{},void 0,!0)],544),v(t.$slots,"leftBtn",{},()=>[o.mobile||e.dim?x("",!0):(f(),m("div",{key:0,class:"btn-box left-btn",onClick:P},ye))],!0),v(t.$slots,"rightBtn",{},()=>[o.mobile||e.dim?x("",!0):(f(),m("div",{key:0,class:"btn-box",onClick:O},_e))],!0),v(t.$slots,"indicator",{},()=>[o.indicator?(f(),m("div",we,[(f(!0),m(W,null,G(e.drsn,(w,h)=>(f(),m("div",{onClick:Se=>E(h),key:h,class:J(["dot",{"dot-pc":!e.dim,"dot-active":L(h),flash:n.indicatorFlash&&L(h)}])},null,10,xe))),128))])):x("",!0)],!0),v(t.$slots,"all",{},void 0,!0)],36))}}),[["__scopeId","data-v-e030df06"]]);const be={class:"r-slide-style"};Object.assign({name:"rSlide"},{__name:"slide",setup:n=>(d,a)=>(f(),m("div",be,[v(d.$slots,"default")]))});console.log(ne);const A=K(fe),I=ee();I.use(se);A.use(ge).use(I);A.mount("#app");export{ie as _,pe as a};
