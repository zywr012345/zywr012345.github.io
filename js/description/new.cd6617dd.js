import{_ as L}from"../index.c8576d05.js";import{a as W,r as S,e as K,n as q,D as o,E as a,F as i,O as y,Q,I as B,R as A,S as C,T as Y,L as G,M as J,y as x,P as T,u,K as p,N as Z}from"../@vue/@vue.02694737.js";import"../pinia/pinia.06b75112.js";import"../vue-demi/vue-demi.71ba0ef2.js";import"../vue-router/vue-router.dc06ac4d.js";import"../pinia-plugin-persist/pinia-plugin-persist.4bd0ee57.js";const O=_=>(G("data-v-e9ee5985"),_=_(),J(),_),ee=O(()=>i("div",{class:"iconfont icon-yuyinjiantou"},null,-1)),te=[ee],se=O(()=>i("div",{class:"iconfont icon-yuyinjiantou"},null,-1)),ie=[se],ne={key:0,class:"indicator-box"},le=["onClick"],oe={__name:"swiper",props:{fast:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!0},playTime:{type:[Number,String],default:5e3},speed:{type:Number,default:500},therehold:{type:[Number,String],default:100},slide:{type:Number,default:0},indicator:{type:Boolean,default:!0},indicatorFlash:{type:Boolean,default:!0},noMove:{type:String,default:"cs"},mobile:{type:Boolean,default:!1},vLock:{default:!1}},emits:["loadEnd","transitionend"],setup(_,{emit:m}){const s=_;function f(t){return Array.prototype.slice.call(t)}const e=W({pSlide:0,be:null,dim:!1,dst:0,drd:0,dsw:0,ds:null,dsn:0,drsn:0,dc:0,dt:null,pos:{sx:0,mx:0,ex:0,l:0,d:0},moving:!1,u:!1,A:"",mousedown:!1,I:!1});let r=S(null);e.drd=s.speed,e.pSlide=s.slide,e.dim=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),K(()=>{q(()=>{k()})});function k(){e.dsw=r.value.getBoundingClientRect().width,e.ds=f(r.value.children),e.drsn=e.ds.length,e.dsn=e.ds.length,e.drsn===1?e.I=!0:$()}function $(){let t=e.ds[0].cloneNode(e.ds[0],!0),n=e.ds[e.dsn-1].cloneNode(e.ds[e.dsn-1],!0);r.value.appendChild(t),r.value.insertBefore(n,e.ds[0]),e.ds=f(r.value.children),e.dsn=e.ds.length,E()}function E(){if(e.pSlide<0||e.pSlide>e.dsn-2-1)throw new Error("[r-swiper:Error]: You set an abnormal subscript, please check and reassign: slide"+e.pSlide);l(-e.dsw*(e.pSlide+1)),s.autoPlay&&d(),m("loadEnd"),console.log("%c 🚀 ~ 我写的代码 像诗一样优雅 ","background: linear-gradient(to right, orange, yellow, green, skyblue, indigo, violet, #471290); color: white; font-size: 16px;")}function d(){e.dt&&clearTimeout(e.dt),e.dt=null,e.dt=setTimeout(()=>{e.moving=!0,e.u=!1,h(s.speed),l(-(e.dsw+Math.abs(c())))},+s.playTime)}function l(t){r.value.style.transform="translate3d("+t+"px, 0, 0)"}function h(t){r.value.style.transitionDuration=t+"ms"}function b(){let t=Math.round(Math.abs(c())/e.dsw);e.dc=t-1}function R(){e.moving=!0,q(()=>{setTimeout(()=>{h(0),b();let t=e.dc+1;t===e.dsn-1?(l(-e.dsw),e.dc=0):t===0&&(l(-e.dsw*(e.dsn-2)),e.dc=e.dsn-3),m("transitionend",e.dc),e.moving=!1,s.autoPlay&&d()},0)})}function N(t){if(!(t.target.className.indexOf(s.noMove)!==-1||e.I)&&!e.moving){if(t.type==="mousedown")e.mousedown=!0,e.pos.sx=t.pageX,e.pos.l=c(),clearTimeout(e.dt),h(0);else{e.A=f(t.changedTouches)[0].identifier;let n=t.touches.length-1;clearTimeout(e.dt),h(0),e.u=!0,e.pos.sx=t.touches[n].clientX,e.pos.l=c()}s.fast&&(e.dst=new Date)}}function F(t){if(!(t.target.className.indexOf(s.noMove)!==-1||e.I)&&!e.moving){if(t.type==="mousemove")e.mousedown&&(e.pos.mx=t.pageX,e.pos.d=e.pos.mx-e.pos.sx,l(e.pos.l+e.pos.d),b());else if(!e.moving&&e.u){let n=t.touches.length-1;e.pos.mx=t.touches[n].clientX,e.pos.d=e.pos.mx-e.pos.sx,l(e.pos.l+e.pos.d),b()}}}function P(t){if(!(t.target.className.indexOf(s.noMove)!==-1||e.I)&&!e.moving)if(s.fast&&(e.dst=new Date-e.dst),t.type==="mouseup")e.mousedown&&(e.mousedown=!1,e.pos.ex=t.pageX,e.pos.d=e.pos.ex-e.pos.sx,D());else{let n=f(t.changedTouches)[0].identifier;!e.moving&&e.u&&n==e.A&&(e.u=!1,e.pos.ex=t.changedTouches[0].clientX,e.pos.d=e.pos.ex-e.pos.sx,D())}}function D(){b(),e.drd=s.fast&&e.dst<s.speed?e.dst:s.speed,h(e.drd);let t=Math.abs(c())%e.dsw,n=[],g="";if(c()>0?n=[t,e.dsw-t]:n=[e.dsw-t,t],e.pos.d>0?g="to-right":e.pos.d<0?g="to-left":g="none",g=="none"&&s.autoPlay&&d(),g==="to-right")if(e.moving=!0,n[0]>+s.therehold){l(c()+n[1]);let v=(c()+n[1])/e.dsw;Math.abs(v)===0&&(e.u=!1)}else l(c()-n[0]);if(g==="to-left")if(e.moving=!0,n[1]>+s.therehold){l(c()-n[0]);let v=(c()-n[0])/e.dsw;Math.abs(v)===e.dsn-1&&(e.u=!1)}else l(c()+n[1])}function c(){return r.value.getBoundingClientRect().left}function X(t){if(!e.moving){let n=Math.round(Math.abs(c())/e.dsw);if(t>e.dsn-2-1||t<0||n==t+1)return;e.moving=!0,clearTimeout(e.dt),h(s.speed),l(-e.dsw*(t+1))}}function j(){z(!0)}function U(){z(!1)}function z(t){s.fast&&(e.drd=new Date-e.be,e.drd=e.drd<s.speed?e.drd:s.speed,e.be=new Date),e.moving||(clearTimeout(e.dt),e.moving=!0,h(e.drd),l(t?c()+e.dsw:c()-e.dsw))}function H(t){s.vLock&&t.preventDefault()}function V(t){return t===e.dc||t+e.drsn===e.dc||t-e.drsn===e.dc}return(t,n)=>(o(),a("div",{class:"r-swiper-style",style:Q({"--speed":e.drd+"ms"}),onTouchmove:H},[i("div",{class:"r-swiper-box",ref_key:"swiper",ref:r,onTransitionend:R,onTouchstart:N,onMousedown:N,onTouchmove:F,onMousemove:F,onTouchend:P,onMouseup:P},[y(t.$slots,"default",{},void 0,!0)],544),y(t.$slots,"leftBtn",{},()=>[!s.mobile&&!e.dim?(o(),a("div",{key:0,class:"btn-box left-btn",onClick:j},te)):B("",!0)],!0),y(t.$slots,"rightBtn",{},()=>[!s.mobile&&!e.dim?(o(),a("div",{key:0,class:"btn-box",onClick:U},ie)):B("",!0)],!0),y(t.$slots,"indicator",{},()=>[s.indicator?(o(),a("div",ne,[(o(!0),a(A,null,C(e.drsn,(g,v)=>(o(),a("div",{onClick:Ae=>X(v),key:v,class:Y(["dot",{"dot-pc":!e.dim,"dot-active":V(v),flash:_.indicatorFlash&&V(v)}])},null,10,le))),128))])):B("",!0)],!0),y(t.$slots,"all",{},void 0,!0)],36))}},ae=L(oe,[["__scopeId","data-v-e9ee5985"]]);const re={class:"r-slide-style"},de={__name:"slide",emits:"click",setup(_,{emit:m}){return(s,f)=>(o(),a("div",re,[y(s.$slots,"default",{},void 0,!0)]))}},I=L(de,[["__scopeId","data-v-41857aae"]]),M={description:{title:"你好, 我是焉文然, 一位前端开发工程师",remark:"以下是我的技能介绍",arr:[{title:"1",value:"熟练h5, C3弹性布局, 动画转换, 大屏、移动端适配"},{title:"2",value:"熟悉js,闭包和原型链,面向对象,es6多种特性,熟悉dom、jquery等操作"},{title:"3",value:"熟练Vue2（全家桶 + [pc、移动端UI]） 熟悉Vue3(setup语法糖)"},{title:"4",value:"熟练Scss、Less语法，git、svn代码管理工具，熟悉webpack Vite"},{title:"5",value:"熟悉uniapp+uview（打包发布到微信、支付宝、百度小程序）"},{title:"6",value:"做过Echarts可视化大屏项目"},{title:"7",value:"参与过React项目(17、18版本)+ Ant-Design-UI"},{title:"以上所有技术 都开发过实际项目",value:""}]},connect:{title:"社交",remark:"以下是我的联系方式",arr:[{title:"邮箱",value:"zywr012345@gmail.com"},{title:"微信",value:"ywr_98"}]},packageArr:{title:"插件 和 库",remark:"以下是我发布的插件",arr:[{title:"r-swiper2",value:"完美适配移动端、pc端的轮播插件"},{title:"运行命令",value:"npm i r-swiper2"},{title:"使用链接",href:"https://blog.csdn.net/zywr012345/article/details/132037399?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169172002516800197018207%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=169172002516800197018207&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-132037399-null-null.142^v92^insert_down28v1&utm_term=r-swiper%20%E6%9E%81%E8%87%B4&spm=1018.2226.3001.4187"}]},login:{personal_center:"个人中心",sign_out:"退出"}},w={description:{title:"Hello, I am Wen Ran, a front-end development engineer",remark:"The following is a description of my skills",arr:[{title:"1",value:"Proficient in h5, C3 flexible layout, animation conversion, large screen, mobile adaptation"},{title:"2",value:"Familiar with js, closure and prototype chain, object-oriented,es6 features, familiar with dom, jquery and other operations"},{title:"3",value:"Proficient in Vue2 (Family bucket + [pc, mobile UI]) Familiar with Vue3(setup syntax sugar)"},{title:"4",value:"Familiar with Scss, Less syntax, git, svn code management tools, familiar with webpack Vite"},{title:"5",value:"Familiar with uniapp+uview (packaged and released to wechat, Alipay, Baidu mini program)"},{title:"6",value:"I have done Echarts visual large screen project"},{title:"7",value:"Participated in React project (version 17, 18)+ Ant-Design-UI"},{title:"All of the above technologies have been developed in real projects",value:""}]},connect:{title:"Social contact",remark:"Below is my contact information",arr:[{title:"Mail",value:"zywr012345@gmail.com"},{title:"WeChat",value:"ywr_98"}]},packageArr:{title:"Plug-ins & libraries",remark:"Here are the plugins I released",arr:[{title:"r-swiper2",value:"Perfect for mobile and pc round-cast plug-ins"},{title:"Run command",value:"npm i r-swiper2"},{title:"Use links",href:"https://blog.csdn.net/zywr012345/article/details/132037399?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169172002516800197018207%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=169172002516800197018207&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-132037399-null-null.142^v92^insert_down28v1&utm_term=r-swiper%20%E6%9E%81%E8%87%B4&spm=1018.2226.3001.4187"}]},login:{personal_center:"个人中心",sign_out:"退出"}};const ce={class:"home-style"},ue={class:"box"},pe={class:"introduce"},fe={class:"title"},me={class:"connect"},_e={class:"box"},ve={class:"introduce"},he={class:"title"},ge={class:"connect"},we={class:"box"},ye={class:"introduce"},ke={class:"title"},be={class:"connect"},xe={class:"sub"},Te=["href"],Se={key:1},Ne={__name:"new",setup(_){const m=S(w.description),s=S(w.connect),f=S(w.packageArr);let e=null,r=0;function k(){r===0?(r++,e=setTimeout(()=>{r=0},300)):r===1&&(r=0,clearTimeout(e),m.value.arr[0].value.slice(0,2)==="熟练"?(m.value=w.description,s.value=w.connect,f.value=w.packageArr):(m.value=M.description,s.value=M.connect,f.value=M.packageArr))}return($,E)=>(o(),a("div",ce,[x(u(ae),{class:"swiper",ref:"swiper",fast:"",playTime:"5000"},{default:T(()=>[x(u(I),null,{default:T(()=>[i("div",{class:"bg",onClick:k},[i("div",ue,[i("p",pe,p(u(m).title),1),i("div",fe,p(u(m).remark),1),i("ul",me,[(o(!0),a(A,null,C(u(m).arr,(d,l)=>(o(),a("li",{key:l},[i("span",null,p(d.title),1),i("div",null,p(d.value),1)]))),128))])])])]),_:1}),x(u(I),null,{default:T(()=>[i("div",{class:"bg bg3",onClick:k},[i("div",_e,[i("p",ve,p(u(s).title),1),i("div",he,p(u(s).remark),1),i("ul",ge,[(o(!0),a(A,null,C(u(s).arr,(d,l)=>(o(),a("li",{key:l},[i("span",null,p(d.title),1),Z(p(d.value),1)]))),128))])])])]),_:1}),x(u(I),null,{default:T(()=>[i("div",{class:"bg bg2",onClick:k},[i("div",we,[i("p",ye,p(u(f).title),1),i("div",ke,p(u(f).remark),1),i("ul",be,[(o(!0),a(A,null,C(u(f).arr,(d,l)=>(o(),a("li",{key:l},[i("div",xe,p(d.title),1),d.href?(o(),a("a",{key:0,href:d.href,target:"_blank"},p(d.title),9,Te)):(o(),a("div",Se,p(d.value),1))]))),128))])])])]),_:1})]),_:1},512)]))}};export{Ne as default};
