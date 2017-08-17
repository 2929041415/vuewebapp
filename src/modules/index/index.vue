<template>
  <div>
    <MainLayOut></MainLayOut>
    <div class="indexstyle">
      <Carousel v-model="value1" :height="850">
        <Carousel-item>
          <div class="demo-carousel">
            <img src="../../assets/img/66.jpg">
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="demo-carousel">
            <img src="../../assets/img/22.jpg">
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="demo-carousel">
            <img src="../../assets/img/33.jpg">
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="demo-carousel">
            <img src="../../assets/img/44.jpg">
          </div>
        </Carousel-item>
      </Carousel>
    </div>
  </div>
</template>
<script>
  import MainLayOut from '../../components/MainLayOut/Main'

  export default {
    data () {
      return {
        value1: 0
      }
    },
    components: { MainLayOut }
  }
</script>
<style scoped>
  .indexstyle{

  }
</style>
