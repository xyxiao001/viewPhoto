<template>
  <div class="view-photo" :class="{'bg-show': open, 'bg-hidden': !open}" v-if="first">
    <div class="x-show">
      <img
        :src="now.url"
        :alt="now.text"
        :style="{
          'margin-left': -left + 'px',
          'margin-top': -top + 'px',
          'opacity': opacity
          }"
         ref="showImg">
         <div class="view-close" @click="exit">
           <i class="iconfont icon-close"></i>
         </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      now: {
        url: '',
        text: ''
      },
      opacity: 0,
      left: 0,
      top: 0,
      open: false,
      first: false
    }
  },
  props: {
    el: {
      type: String,
      required: true
    }
  },
  watch: {
    open () {
      // var body = document.querySelector('body')
      // if (this.open) {
      //   body.style.top = -(document.body.scrollTop) + 'px'
      //   body.classList.add('model-open')
      // } else {
      //   body.classList.remove('model-open')
      //   var top = body.style.top
      //   top = top.replace('px', '')
      //   document.body.scrollTop = -top
      //   body.style.top = 0
      // }
    }
  },
  methods: {
    // 退出
    exit () {
      this.open = false
    },
    // 图片布局
    showImg () {
      var screen = document.documentElement.clientHeight
      var img = this.$refs.showImg
      img.style.height = 'auto'
      if ((screen - 100) < img.height) {
        img.style.height = screen - 100 + 'px'
      }
      this.$nextTick(() => {
        this.opacity = 1
        this.top = img.height / 2
        this.left = img.width / 2
      })
    }
  },
  mounted () {
    // this.open = true
    document.querySelector(this.el).addEventListener('click', (e) => {
      if (e.target.nodeName === "IMG") {
        if (!this.first) {
          this.first = true
        }
        this.open = true
        this.now.url = e.target.getAttribute('data-max')
        this.now.text = e.target.alt
        this.opacity = 0
        this.$nextTick(() => {
          this.showImg()
          this.$refs.showImg.onload = () => {
            // 图片加载成功后布局
            this.showImg()
          }
        })
      }
    })
  }
}
</script>

<style lang="sass" scoped>
  @import url(https://at.alicdn.com/t/font_9pq34qq2nhnkx1or.css);
  .view-photo {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 2017;
    background-color: rgba(0,0,0,.5);
    overflow: hidden;

    .x-show {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;

      img {
        position: absolute;
        cursor: -webkit-grab;
        user-select: none;
        top: 50%;
        left: 50%;
      }

      .view-close {
        position: absolute;
        top: -30px;
        right: -20px;
        width: 80px;
        height: 80px;
        cursor: pointer;
        border-radius: 50%;
        background-color: #000;
        background-color: rgba(0,0,0,.5);
          i {
            position: absolute;
            top: 40px;
            right: 40px;
            font-size: 30px;
            color: white;
          }
      }
    }
  }

  .model-open {
    zoom: 1;
    position: fixed;
    width: 100%;
    top: 0;
  }

  .bg-show {
    animation: fadeIn 0.3s ease-out 1;

    .x-show img {
      visibility: hidden;
      animation: scaleIn 0.3s ease-out 0.3s 1;
      animation-fill-mode: forwards;
    }
  }

  .bg-hidden {
    animation: fadeOut 0.3s ease-out 0.3s 1;
    animation-fill-mode: forwards;

    .x-show img {
      animation: scaleOut 0.3s ease-out 1;
      animation-fill-mode: forwards;
    }
  }



  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      visibility: hidden;
      opacity: 0;
    }
  }

  @keyframes scaleIn {
    0% {
      visibility: visible;
      transform: scale3d(0, 0, 0);
    }

    100% {
      visibility: visible;
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes scaleOut {
    0% {
      transform: scale3d(1, 1, 1);
    }

    100% {
      visibility: hidden;
      transform: scale3d(0, 0, 0);
    }
  }
</style>
