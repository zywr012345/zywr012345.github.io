import{f as D}from"../global-config/global-config.19e4900c.js";import{y as g,w as m}from"../r-swiper/r-swiper.270b283d.js";import{r as d,bo as h,x as l,y as o,z as a,b3 as r,u as s,F as v,G as y,a as $,a5 as x,bs as f,E as b,J as _}from"../@vue/@vue.6df83f97.js";import"../crypto-js/crypto-js.0c1badba.js";import"../axios/axios.707ed124.js";import"../pinia/pinia.58a738f8.js";import"../vue-demi/vue-demi.71ba0ef2.js";import"../index.0f3e585e.js";import"../vue-router/vue-router.259fe155.js";import"../pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js";import"../vue/vue.242da057.js";const w={class:"bg"},B={class:"box"},C={class:"introduce"},O={class:"title"},T={class:"connect"},z={__name:"skill",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(u){const c=u,e=d({title:"",remark:"",arr:[]});return h(()=>{console.log("唱歌"),e.value=c.resData.description}),(n,p)=>(l(),o("div",w,[a("div",B,[a("p",C,r(s(e).title),1),a("div",O,r(s(e).remark),1),a("ul",T,[(l(!0),o(v,null,y(s(e).arr,(t,i)=>(l(),o("li",{key:i},[a("span",null,r(t.title),1),a("div",null,r(t.value),1)]))),128))])])]))}};const E={class:"bg bg2"},N={class:"box"},V={class:"introduce"},A={class:"title"},F={class:"connect"},q={__name:"contact",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(u){const c=u,e=d({title:"",remark:"",arr:[]});return h(()=>{console.log("唱歌"),e.value=c.resData.connect}),(n,p)=>(l(),o("div",E,[a("div",N,[a("p",V,r(s(e).title),1),a("div",A,r(s(e).remark),1),a("ul",F,[(l(!0),o(v,null,y(s(e).arr,(t,i)=>(l(),o("li",{key:i},[a("span",null,r(t.title),1),a("div",null,r(t.value),1)]))),128))])])]))}},G={class:"bg bg3"},J={class:"box"},L={class:"introduce"},P={class:"title"},R={class:"connect"},S=["href"],H={key:1},I={__name:"package",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(u){const c=u,e=d({title:"",remark:"",arr:[]});return h(()=>{console.log("唱歌"),e.value=c.resData.packageArr}),(n,p)=>(l(),o("div",G,[a("div",J,[a("p",L,r(s(e).title),1),a("div",P,r(s(e).remark),1),a("ul",R,[(l(!0),o(v,null,y(s(e).arr,(t,i)=>(l(),o("li",{key:i},[a("span",null,r(t.title),1),t.href?(l(),o("a",{key:0,href:t.href,target:"_blank"},r(t.title),9,S)):(l(),o("div",H,r(t.value),1))]))),128))])])]))}};const K={class:"home-style"},le={__name:"new",setup(u){console.log(g,m);const c=d(!1);let e=$({zh:{},en:{}}),n=d({description:{},connect:{},packageArr:{}});d(!1),D.utils.ordinaryRequest({url:"/new"}).then(k=>{e=k.data,n.value={...e.en},c.value=!0});let p=null,t=0;const i=()=>{t===0?(t++,p=setTimeout(()=>{t=0},300)):t===1&&(t=0,clearTimeout(p),n.value.description.title.slice(0,2)==="你好"?n.value={...e.en}:n.value={...e.zh},console.log(n.value.description))};return(k,M)=>(l(),o("div",K,[s(c)?(l(),x(s(g),{key:0,class:"swiper",ref:"swiper",fast:"",playTime:"5000",autoPlay:!1,onClick:i},{default:f(()=>[_(s(m),null,{default:f(()=>[_(z,{resData:s(n)},null,8,["resData"])]),_:1}),_(s(m),null,{default:f(()=>[_(q,{resData:s(n)},null,8,["resData"])]),_:1}),_(s(m),null,{default:f(()=>[_(I,{resData:s(n)},null,8,["resData"])]),_:1})]),_:1},512)):b("",!0)]))}};export{le as default};
