import{f as g}from"../global-config/global-config.902a2605.js";import{_ as m,y as D}from"../r-swiper/r-swiper.b626418e.js";import{r as d,R as h,x as r,y as n,z as a,S as l,u as s,F as v,G as y,a as $,P as x,T as f,E as w,J as _}from"../@vue/@vue.426c8735.js";import"../crypto-js/crypto-js.0c1badba.js";import"../axios/axios.707ed124.js";import"../pinia/pinia.b134cf9b.js";import"../vue-demi/vue-demi.71ba0ef2.js";import"../index.dc08ea0c.js";import"../vue-router/vue-router.ef3d6af3.js";import"../pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js";const b={class:"bg"},B={class:"box"},C={class:"introduce"},T={class:"title"},O={class:"connect"},z={__name:"skill",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(u){const c=u,e=d({title:"",remark:"",arr:[]});return h(()=>{e.value=c.resData.description}),(o,p)=>(r(),n("div",b,[a("div",B,[a("p",C,l(s(e).title),1),a("div",T,l(s(e).remark),1),a("ul",O,[(r(!0),n(v,null,y(s(e).arr,(t,i)=>(r(),n("li",{key:i},[a("span",null,l(t.title),1),a("div",null,l(t.value),1)]))),128))])])]))}};const E={class:"bg bg2"},N={class:"box"},V={class:"introduce"},A={class:"title"},F={class:"connect"},P={__name:"contact",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(u){const c=u,e=d({title:"",remark:"",arr:[]});return h(()=>{e.value=c.resData.connect}),(o,p)=>(r(),n("div",E,[a("div",N,[a("p",V,l(s(e).title),1),a("div",A,l(s(e).remark),1),a("ul",F,[(r(!0),n(v,null,y(s(e).arr,(t,i)=>(r(),n("li",{key:i},[a("span",null,l(t.title),1),a("div",null,l(t.value),1)]))),128))])])]))}},R={class:"bg bg3"},S={class:"box"},q={class:"introduce"},G={class:"title"},J={class:"connect"},L=["href"],H={key:1},I={__name:"package",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(u){const c=u,e=d({title:"",remark:"",arr:[]});return h(()=>{e.value=c.resData.packageArr}),(o,p)=>(r(),n("div",R,[a("div",S,[a("p",q,l(s(e).title),1),a("div",G,l(s(e).remark),1),a("ul",J,[(r(!0),n(v,null,y(s(e).arr,(t,i)=>(r(),n("li",{key:i},[a("span",null,l(t.title),1),t.href?(r(),n("a",{key:0,href:t.href,target:"_blank"},l(t.title),9,L)):(r(),n("div",H,l(t.value),1))]))),128))])])]))}};const K={class:"home-style"},ae={__name:"new",setup(u){const c=d(!1);let e=$({zh:{},en:{}}),o=d({description:{},connect:{},packageArr:{}});d(!1),g.utils.ordinaryRequest({url:"/new"}).then(k=>{e=k.data,o.value={...e.en},c.value=!0,console.log("vue3 编写的网站 使用到了 r-swiper插件")});let p=null,t=0;const i=()=>{t===0?(t++,p=setTimeout(()=>{t=0},300)):t===1&&(t=0,clearTimeout(p),o.value.description.title.slice(0,2)==="你好"?o.value={...e.en}:o.value={...e.zh})};return(k,M)=>(r(),n("div",K,[s(c)?(r(),x(s(D),{key:0,class:"swiper",ref:"swiper",fast:"",playTime:"5000",autoPlay:!1,onClick:i},{default:f(()=>[_(s(m),null,{default:f(()=>[_(z,{resData:s(o)},null,8,["resData"])]),_:1}),_(s(m),null,{default:f(()=>[_(P,{resData:s(o)},null,8,["resData"])]),_:1}),_(s(m),null,{default:f(()=>[_(I,{resData:s(o)},null,8,["resData"])]),_:1})]),_:1},512)):w("",!0)]))}};export{ae as default};
