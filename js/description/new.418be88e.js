import{f as g}from"../global-config/global-config.077974d2.js";import{_ as m,y as D}from"../r-swiper/r-swiper.60a74dd2.js";import{r as d,R as h,x as l,y as o,z as a,S as r,u as s,F as v,G as y,a as $,P as x,T as f,E as b,J as _}from"../@vue/@vue.426c8735.js";import"../crypto-js/crypto-js.0c1badba.js";import"../axios/axios.707ed124.js";import"../pinia/pinia.b134cf9b.js";import"../vue-demi/vue-demi.71ba0ef2.js";import"../index.75e4ce81.js";import"../vue-router/vue-router.ef3d6af3.js";import"../pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js";const w={class:"bg"},B={class:"box"},C={class:"introduce"},T={class:"title"},O={class:"connect"},z={__name:"skill",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(u){const c=u,e=d({title:"",remark:"",arr:[]});return h(()=>{console.log("唱歌"),e.value=c.resData.description}),(n,p)=>(l(),o("div",w,[a("div",B,[a("p",C,r(s(e).title),1),a("div",T,r(s(e).remark),1),a("ul",O,[(l(!0),o(v,null,y(s(e).arr,(t,i)=>(l(),o("li",{key:i},[a("span",null,r(t.title),1),a("div",null,r(t.value),1)]))),128))])])]))}};const E={class:"bg bg2"},N={class:"box"},V={class:"introduce"},A={class:"title"},F={class:"connect"},P={__name:"contact",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(u){const c=u,e=d({title:"",remark:"",arr:[]});return h(()=>{console.log("唱歌"),e.value=c.resData.connect}),(n,p)=>(l(),o("div",E,[a("div",N,[a("p",V,r(s(e).title),1),a("div",A,r(s(e).remark),1),a("ul",F,[(l(!0),o(v,null,y(s(e).arr,(t,i)=>(l(),o("li",{key:i},[a("span",null,r(t.title),1),a("div",null,r(t.value),1)]))),128))])])]))}},R={class:"bg bg3"},S={class:"box"},q={class:"introduce"},G={class:"title"},J={class:"connect"},L=["href"],H={key:1},I={__name:"package",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(u){const c=u,e=d({title:"",remark:"",arr:[]});return h(()=>{console.log("唱歌"),e.value=c.resData.packageArr}),(n,p)=>(l(),o("div",R,[a("div",S,[a("p",q,r(s(e).title),1),a("div",G,r(s(e).remark),1),a("ul",J,[(l(!0),o(v,null,y(s(e).arr,(t,i)=>(l(),o("li",{key:i},[a("span",null,r(t.title),1),t.href?(l(),o("a",{key:0,href:t.href,target:"_blank"},r(t.title),9,L)):(l(),o("div",H,r(t.value),1))]))),128))])])]))}};const K={class:"home-style"},ae={__name:"new",setup(u){const c=d(!1);let e=$({zh:{},en:{}}),n=d({description:{},connect:{},packageArr:{}});d(!1),g.utils.ordinaryRequest({url:"/new"}).then(k=>{e=k.data,n.value={...e.en},c.value=!0});let p=null,t=0;const i=()=>{t===0?(t++,p=setTimeout(()=>{t=0},300)):t===1&&(t=0,clearTimeout(p),n.value.description.title.slice(0,2)==="你好"?n.value={...e.en}:n.value={...e.zh},console.log(n.value.description))};return(k,M)=>(l(),o("div",K,[s(c)?(l(),x(s(D),{key:0,class:"swiper",ref:"swiper",fast:"",playTime:"5000",autoPlay:!1,onClick:i},{default:f(()=>[_(s(m),null,{default:f(()=>[_(z,{resData:s(n)},null,8,["resData"])]),_:1}),_(s(m),null,{default:f(()=>[_(P,{resData:s(n)},null,8,["resData"])]),_:1}),_(s(m),null,{default:f(()=>[_(I,{resData:s(n)},null,8,["resData"])]),_:1})]),_:1},512)):b("",!0)]))}};export{ae as default};
