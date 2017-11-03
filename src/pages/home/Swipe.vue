<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide>
    	<div class="swipe-img-com">
    		<img class="swipe-img" src="../../assets/img/home/01864a8a35c20402.jpg"/>
    	</div>
    </swiper-slide>
    <swiper-slide>
    	<div class="swipe-img-com">
    		<img class="swipe-img" src="../../assets/img/home/1d7693c6bd8abd02.png"/>
    	</div>
    </swiper-slide>
    <swiper-slide>
    	<div class="swipe-img-com">
    		<img class="swipe-img" src="../../assets/img/home/52a119dbed871902.jpg"/>
    	</div>
    </swiper-slide>
    <swiper-slide>
    	<div class="swipe-img-com">
    		<img class="swipe-img" src="../../assets/img/home/57137c621d75ba02.jpg"/>
    	</div>
    </swiper-slide>
    <swiper-slide>
    	<div class="swipe-img-com">
    		<img class="swipe-img" src="../../assets/img/home/66f7230d9ad6e002.jpg"/>
    	</div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true
        }
      }
    },
    components: {
	    swiper,
	    swiperSlide
  	}
  }
</script>
<style>
	.swiper-pagination-bullet-active{
		background: #fff;
	}
</style>
<style scoped>
	.swipe-img-com{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swipe-img-com .swipe-img{
		width: 100%;
	}
	
</style>