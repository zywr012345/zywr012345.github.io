import{f as e}from"../global-config/global-config.e7629991.js";import{L as a,q as t}from"../r-swiper/r-swiper.064f25c3.js";import{r as s,bo as l,aH as r,Z as i,_ as n,b3 as u,u as o,F as c,aP as p,a as d,X as m,bs as v,Y as f,y}from"../@vue/@vue.f4dbe895.js";import"../crypto-js/crypto-js.0bf09b3b.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.3c260722.js";import"../vue-demi/vue-demi.71ba0ef2.js";import"../index.af9c44a2.js";import"../vue-router/vue-router.db1c7cd1.js";import"../pinia-plugin-persist/pinia-plugin-persist.70d140bd.js";import"../vue/vue.e54d4910.js";const b={class:"bg"},g={class:"box"},k={class:"introduce"},j={class:"title"},_={class:"connect"},D={__name:"skill",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(e){const a=e,t=s({title:"",remark:"",arr:[]});return l((()=>{t.value=a.resData.description})),(e,a)=>(r(),i("div",b,[n("div",g,[n("p",k,u(o(t).title),1),n("div",j,u(o(t).remark),1),n("ul",_,[(r(!0),i(c,null,p(o(t).arr,((e,a)=>(r(),i("li",{key:a},[n("span",null,u(e.title),1),n("div",null,u(e.value),1)])))),128))])])]))}},h={class:"bg bg2"},x={class:"box"},w={class:"introduce"},B={class:"title"},O={class:"connect"},T={__name:"contact",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(e){const a=e,t=s({title:"",remark:"",arr:[]});return l((()=>{t.value=a.resData.connect})),(e,a)=>(r(),i("div",h,[n("div",x,[n("p",w,u(o(t).title),1),n("div",B,u(o(t).remark),1),n("ul",O,[(r(!0),i(c,null,p(o(t).arr,((e,a)=>(r(),i("li",{key:a},[n("span",null,u(e.title),1),n("div",null,u(e.value),1)])))),128))])])]))}},z={class:"bg bg3"},A={class:"box"},P={class:"introduce"},q={class:"title"},C={class:"connect"},F=["href"],H={key:1},R={__name:"package",props:{resData:{type:Object,default:()=>({description:{}})},msg:{default:!1,type:Boolean}},setup(e){const a=e,t=s({title:"",remark:"",arr:[]});return l((()=>{t.value=a.resData.packageArr})),(e,a)=>(r(),i("div",z,[n("div",A,[n("p",P,u(o(t).title),1),n("div",q,u(o(t).remark),1),n("ul",C,[(r(!0),i(c,null,p(o(t).arr,((e,a)=>(r(),i("li",{key:a},[n("span",null,u(e.title),1),e.href?(r(),i("a",{key:0,href:e.href,target:"_blank"},u(e.title),9,F)):(r(),i("div",H,u(e.value),1))])))),128))])])]))}},X={class:"home-style"},Y={__name:"new",setup(l){const n=s(!1);let u=d({zh:{},en:{}}),c=s({description:{},connect:{},packageArr:{}});s(!1),e.utils.ordinaryRequest({url:"/new"}).then((e=>{u=e.data,c.value={...u.en},n.value=!0}));let p=null,b=0;const g=()=>{0===b?(b++,p=setTimeout((()=>{b=0}),300)):1===b&&(b=0,clearTimeout(p),"你好"===c.value.description.title.slice(0,2)?c.value={...u.en}:c.value={...u.zh})};return(e,s)=>(r(),i("div",X,[o(n)?(r(),m(o(a),{key:0,class:"swiper",ref:"swiper",fast:"",playTime:"5000",autoPlay:!1,onClick:g},{default:v((()=>[y(o(t),null,{default:v((()=>[y(D,{resData:o(c)},null,8,["resData"])])),_:1}),y(o(t),null,{default:v((()=>[y(T,{resData:o(c)},null,8,["resData"])])),_:1}),y(o(t),null,{default:v((()=>[y(R,{resData:o(c)},null,8,["resData"])])),_:1})])),_:1},512)):f("",!0)]))}};export{Y as default};
