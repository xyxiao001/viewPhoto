<template>
  <section class="show">
    <p>view photo 实例展示</p>
    <div class="example" id="exampleImg">
      <div class="item" v-for="item in lists">
        <img :src="item.min" :alt="item.alt" :data-max="item.max">
      </div>
    </div>
    <ViewPhoto
      :el="el"
    ></ViewPhoto>
  </section>
</template>

<script>
import ViewPhoto from './src/ViewPhoto.vue'
export default {
  data: function () {
    return {
      lists: [
        {
          alt: '1',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg1.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg1.jpg'
        },
        {
          alt: '2',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg2.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg2.jpg'
        },
        {
          alt: '3',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg3.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg3.jpg'
        },
        {
          alt: '4',
          min: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
          max: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg'
        },
        {
          alt: '5',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg5.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg5.jpg'
        },
        {
          alt: '6',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg6.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg6.jpg'
        },
        {
          alt: '7',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg7.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg7.jpg'
        },
        {
          alt: '8',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg8.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg8.jpg'
        },
        {
          alt: '9',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg9.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg9.jpg'
        },
        {
          alt: '10',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg10.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg10.jpg'
        },
        {
          alt: '11',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg11.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg11.jpg'
        },
        {
          alt: '12',
          min: 'http://ojp9lt0ng.bkt.clouddn.com/bg12.jpg',
          max: 'http://ojp9lt0ng.bkt.clouddn.com/bg12.jpg'
        }
      ],
      el: '#exampleImg'
    }
  },
  components: {
    ViewPhoto
  }
}
</script>

<style lang="sass" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  section.show {
    P {
      display: block;
      text-align: center;
      line-height: 40px;
    }
  }

  .example {
    display: flex;
    flex-wrap: wrap;
    width: 1100px;
    min-height: 300px;
    margin: auto;

    .item {
      margin: 5px;
      width: 250px;
      height: 300px;

      img {
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
