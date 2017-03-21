<template>
  <div class="view-photo" v-show="open" @click="exit">
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
      open: false
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
        this.open = true
        this.now.url = e.target.getAttribute('data-max')
        this.now.text = e.target.alt
        this.opacity = 0
        this.$nextTick(() => {
          this.showImg()
        })
        this.$refs.showImg.onload = () => {
          // 图片加载成功后布局
          this.showImg()
        }
      }
    })
  }
}
</script>

<style lang="sass">
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
    }
  }

  .model-open {
    zoom: 1;
    position: fixed;
    width: 100%;
    top: 0;
  }
</style>
