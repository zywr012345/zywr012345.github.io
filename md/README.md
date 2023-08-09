---
theme: channing-cyan
---
### r-swiper 含有丝滑模式，禁止滑动块模式，完美解决移动/PC端轮播需求
![vscon.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c837a9be65834566a3bf63765044086c~tplv-k3u1fbpfcp-watermark.image?)
#### r-swiper2 这是一个vue2版本的轮播插件,移动端和pc端都已完美适配.
r-swiper (vue3版本)正在开发中，预计2023/08中旬会上线

可能有小伙伴会问了，都2023年了，市面上的轮播组件数不胜数，谁还会傻到造轮播的轮子啊？

啊这。。。

俗话说：存在即合理啊。

原因主要有两点

 1、如果引入官方swiper包会不会太大了，有必要吗?

 2、有其他体积小的开源组件，大部分场景都能适配，我就遇到过多次特殊需求，无奈只能多次更改源码
 
But Please: Don't Repeat Yourself!
 
既然如此，那我就来封装一个功能强大，动效精美的轮播组件，可以完美适配绝大部分正常的业务需求（如果我这个组件还满足不了你的需求，本着忍一时越想越气,退一步越想越亏的原则，我劝你即刻去找产品对线。。。啊不，即刻联系我，我看看能不能再优化一下）。

此插件含有 禁止滑动块模式（noMove属性）可以在swiper轮播内部实现阻拦滑动效果，
丝滑模式(fast属性)，连续切换时，没有强制限制动画时间，切换快慢只取决于你的手速，德芙~纵享丝滑。

第一次写轮播还是17年,代码已经找不到了，当时还是用的jQuery, 这次浏览了多个swiper开源代码，综合整理，做了部分优化，如果感觉不流畅或者对此插件有修改建议请及时联系我（联系方式在最底部），最后希望大家能够喜欢！

#### 安装依赖
1. 打开项目根目录，执行命令
    ```js
    // 如果使用的是npm
    npm i r-swiper2 // 因为vue3版本还在开发中，所以r-swiper名称就预留给vue3版了
    
    // 如果使用的是yarn
    yarn add r-swiper2 // 因为vue3版本还在开发中，所以r-swiper名称就预留给vue3版了
    ```
#### 引入依赖
安装依赖后根据自己的需求引入
- 全局引入
    ```js
    import { rSwiper, rSlide } from 'r-swiper2'; // 20.2k (gzipped:7k) 目前体积还可以接受
    Vue.component(rSwiper.name, rSwiper);
    Vue.component(rSlide.name, rSlide);
    ```
- 局部引入

    ```js
    import {rSwiper, rSlide} from 'r-swiper2'; // 20.2k (gzipped:7k) 目前体积还可以接受

    export default {
        components: {
            'r-swiper': rSwiper,
            'r-slide': rSlide
        }
    }

    ```
#### 组件讲解

```js
// r-swiper是外部组件，各种事件动效都在此内完成
// r-slide是内部组件，包裹各个轮播页面内容

// props: { // 一律使用小驼峰命名
//   autoPlay: Boolean， // 是否自动轮播播放
//   playTime: Number|Sting， // 自动播放切换时间
//   speed: Number， // 切换页面后的动画过渡时间
//   therehold: Number, // 滑动多少距离后触发切页函数
//   slide: Number, // 初始默认下标
//   indicator： Boolean, // 指示器显示? 底部居中闪烁点/条状
//   indicatorFlash： Boolean. // 指示器闪烁动效
//   noMove： String, // 默认为'cs', 非滑动模式 className(一会重点讲)
//   mobile: Boolean, // 是否为移动端(移动端会隐藏 左右切页按钮)
//   fast: Boolean,// 默认为false,纵享丝滑模式
//   vLock： Boolean // 垂直方向是否可滚动
// }

// methos: {
//   ref事件
//   prev() // 上一页
//   next() // 下一页
//   slideTo(i) // 跳转到指定下标为 i 的页面

//   $emit事件
//   loadEnd // 初次渲染完成后反馈函数
//   transitionend(i) // 切换页面后反馈函数, i 为当前下标
}

```

#### 代码案例



```vue
<template>
<div class="home-style">
  <r-swiper class="swiper" ref="swiper" @loadEnd="funLoadEnd" @transitionend=funTransitionend>
    <r-slide>
      <img src="../3.png" alt="">
    </r-slide>
    <r-slide>
      <img src="../3.png" alt="">
    </r-slide>
    <r-slide>
      <img src="../3.png" alt="">
    </r-slide>
  </r-swiper>
</div>
</template>

<script>
import { rSwiper, rSlide } from 'r-swiper2'

export default {
  data() {
    return {
      nowIndex: 0 // 当前下标
    }
  },

  components: {
    'r-swiper': rSwiper, // 轮播外部组件
    'r-slide': rSlide // 轮播内部组件
  },

  computed: {
    // 当前swipe DOM
    swiperRef() {
      return this.$refs.swiper
    }
  },

  methods: {
    /**
    * 初始化加载完成反馈函数 2023-07-31 10:53:04 Ywr
    */
    funLoadEnd() {
      console.log('初始化加载完成')
    },
    /**
    * 切换页面完成反馈函数 2023-07-31 10:53:04 Ywr
    * @param {Number} i 当前下标
    */
    funTransitionend(i) {
      this.nowIndex = i
      console.log('当前下标', this.nowIndex)
    },

    /**
    * 切换页函数 2023-07-31 19：06：56 Ywr
    * @param {Number} i 下标
    * @param {Boolean} st 当前下标
    */
    changePage(i, st = false) {
      // 如果是跳转到某页
      if (st) {
        this.swiperRef.slideTo(i)
      }
      else {
        i < 0 ? (this.swiperRef.prev()) : (this.swiperRef.next())
      }
    }
  }
}
</script>

<style scope lang="scss">
.home-style {
  width: 100vw;
  height: 100vh;
  img {
    height: 100%;
  }
}
</style>
```

#### 效果图

pc端

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e3b2a4dbdcf431c96075d05fcc9beb1~tplv-k3u1fbpfcp-watermark.image?)
移动端

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2278ef9ff1fe4d8bb20daeacae8a5aa0~tplv-k3u1fbpfcp-watermark.image?)

#### 温馨提示
默认会显示底部指示器、 [pc端：左右两个切换按钮], 指示器和按钮都有点击切页效果

可根据props传值隐藏


具名插槽：
  如果感觉 左右按钮、指示器样式不美观 或者想写入新内容 可使用以下插槽

```html
  <!-- 左右按钮 切换上下页 -->
  <slot name="leftBtn">
  <slot name="rightBtn">

  <!-- 指示器 -->
  <slot name="indicator"></slot>

  <!-- 其他插槽 -->
  <slot name="all"></slot>
```
 
#### noMove讲解
为什么会有noMove属性 [默认为：cs] 呢?

#### 如果我想两个轮播嵌套，子轮播切换时不影响父轮播，此时，阁下又该如何应对呢
pc端：

1、滑动顶部蓝色hello world！区域，会切换整体swiper页面,如下效果

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f528bff8d1244e488339e314e0e3855b~tplv-k3u1fbpfcp-watermark.image?)

2、滑动地球图片，只切换内部的swiper

![微信图片_20230731114908.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e7176f886d74ebeb7f5ac470f2ec775~tplv-k3u1fbpfcp-watermark.image?)

我们只需要给 内部的元素添加className属性 "cs" 即可
```html
 <img class="cs" src="../2.png" alt="">
```

 注意如果觉得 cs不太美观，可以选择更改props属性
```html
<r-swiper :noMove="yourClassName"></r-swiper>

<img class="yourClassName" src="../2.png" alt="">
```

完整代码案例
```vue
<template>
<div class="home-style">
  <r-swiper class="swiper" :autoPlay="false" ref="swiper" @loadEnd="funLoadEnd" @transitionend=funTransitionend :mobile="true">
    <r-slide>
      <div class="first-cont">
        <div class="can">hello world!</div>
        <!-- 注意此处 子swiper 的 noMove 属性一定不能是 cs [父swiper中的 noMove属性，否则自己的滑动事件也会被组织] -->
        <r-swiper class="child" noMove="nononononono" :mobile="true" :autoplay="false">
          <r-slide>
            <img class="cs" src="../2.png" alt="">
          </r-slide>
          <r-slide>
            <img class="cs" src="../2.png" alt="">
          </r-slide>
          <r-slide>
            <img class="cs" src="../2.png" alt="">
          </r-slide>
        </r-swiper>
      </div>
     </r-slide>
     <r-slide>
       <img src="../1.png" alt="">
     </r-slide>
     <r-slide>
      <img src="../1.png" alt="">
     </r-slide>
   </r-swiper>
</div>
</template>

<script>
import { rSwiper, rSlide } from 'r-swiper2'

export default {
  data() {
    return {
      nowIndex: 0 // 当前下标
    }
  },

  components: {
    'r-swiper': rSwiper, // 外部组件
    'r-slide': rSlide // 内部组件
  },

  computed: {
    swiperRef() {
      return this.$refs.swiper
    }
  },

  methods: {
    /**
    * 初始化加载完成 2023-07-31 10:53:04 Ywr
    */
    funLoadEnd() {
      console.log('初始化加载完成')
    },

    /**
    * 初始化加载完成 2023-07-31 10:53:04 Ywr
    * @param {Number} i 当前下标
    */
    funTransitionend(i) {
      this.nowIndex = i
      console.log('当前下标', this.nowIndex)
    },

    /**
    * 切换页函数 2023-07-31 19：06：56 Ywr
    * @param {i} 下标
    * @param {Boolean} st 当前下标
    */
    changePage(i, st = false) {
      // 如果是跳转到某页
      if (st) {
        this.swiperRef.slideTo(i)
      }
      else {
        i < 0 ? (this.swiperRef.prev()) : (this.swiperRef.next())
      }
    }
  }
}
</script>

<style scope lang="scss">

.home-style {
  width: 100vw;
  height: 100vh;

  .first-cont {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    .can {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 10vh;
      background: skyblue;
    }
    .child {
      flex: 1;
    }
  }
  img {
    width: 100vw;
    height: 100vh;
  }
}

</style>

```

移动端：
京东/淘宝/拼多多/得物

滑动左侧图红框部分，整体swiper会切换

滑动右侧图红框部分，整体swiper不会切换，内部的swiper-banner会切换

![1690784740829.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31474ec1b4774488bf0345c5df7cfb45~tplv-k3u1fbpfcp-watermark.image?)

亦或者，内部某些区域(下方列表)需要完成自己的滚动效果

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86f818a0e6bd4e588efb49c9e791539d~tplv-k3u1fbpfcp-watermark.image?)

```js
<template>
<div class="home-style">
  <r-swiper class="swiper" :autoPlay="false" :identifier="false" ref="swiper" @loadEnd="funLoadEnd" @transitionend="funTransitionend " :mobile="true">
    <r-slide>
      <div class="first-cont">
        <img src="../1.png" alt="">
        <!-- 此处添加 noMove属性 cs -->
        <div class="box cs">
           <div class="can cs">
             <div class="cs" v-for="i in 100">{{i}}</div>
           </div>
        </div>
      </div>
    </r-slide>
    <r-slide>
      <img src="../1.png" alt="">
    </r-slide>
    <r-slide>
      <img src="../1.png" alt="">
    </r-slide>
  </r-swiper>
</div>
</template>

<script>
import { rSwiper, rSlide } from 'r-swiper2'

export default {
  data() {
    return {
      nowIndex: 0 // 当前下标
    }
  },

  components: {
    'r-swiper': rSwiper, // 外部组件
    'r-slide': rSlide // 内部组件
  },

  computed: {
    swiperRef() {
      return this.$refs.swiper
    }
  },

  methods: {
    /**
    * 初始化加载完成 2023-07-31 10:53:04 Ywr
    */
    funLoadEnd() {
      console.log('初始化加载完成')
    },
    /**
    * 初始化加载完成 2023-07-31 10:53:04 Ywr
    * @param {Number} i 当前下标
    */
    funTransitionend(i) {
      this.nowIndex = i
      console.log('当前下标', this.nowIndex)
    },

    /**
    * 切换页函数 2023-07-31 19：06：56 Ywr
    * @param {i} 下标
    * @param {Boolean} st 当前下标
    */
    changePage(i, st = false) {
      // 如果是跳转到某页
      if (st) {
        this.swiperRef.slideTo(i)
      }
      else {
        i < 0 ? (this.swiperRef.prev()) : (this.swiperRef.next())
      }
    }
  }
}
</script>

<style scope lang="scss">

.home-style {
  width: 100vw;
  height: 100vh;

 .first-cont {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 100vh;

    .box {
      width: 100%;
      height: 20vh;
      overflow-x: scroll;
      .can {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 20vh;

        div {
          background: skyblue;
          border: 1px solid #fff;
          width: 100px;
          padding: 80px;
          margin: 10px;
        }
      }
    }

    img {
      height: 80vh;
    }

    .child {
      flex: 1;
    }
  }
  img {
    width: 100vw;
    height: 100vh;
  }
}

</style>
```

上面这几种情况都可以使用当前swiper解决。


#### fast丝滑模式
大家可以试一下swiper官网 以及京东、淘宝，得物的轮播页面，快速滑动时，会有不连贯的感觉
因为在轮播组件内部，会有一个时间段的保护机制，在此时间段内需要等待轮播事件完成的动态效果，此时如果强制滑动会有异常
而本文插件的 fast模式，就可以完美规避这点
只需要设置swiper的 fast即刻开启丝滑模式

```js
<swiper fast></swiper>
```

此时就可以实现快速滑动，纵享丝滑

#### 这就是本期的全部内容了，谢谢大家。

#### 感谢
感谢各swiper开源开发者
特别感谢linfeng大佬[https://github.com/helicopters?tab=repositories]


#### 作者

Email: [zywr012345@gmail.com](mailto:zywr012345@gmail.com)

WeChat: ywr_98
