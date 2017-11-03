<template>
	<swiper :options="swiperOption" ref="mySwiper">
    	<swiper-slide>
    		<div class="swiper-img-con">
    			<img src="../../assets/img/home/1d7693c6bd8abd02.png_640x200_43c308dd.png" class="swiper-img">
    		</div>
    	</swiper-slide>
   		<swiper-slide>
   			<div class="swiper-img-con">
   				<img src="../../assets/img/home/2b4166f592b33202.jpg_640x200_27b41388.jpg" class="swiper-img">
   			</div>
   		</swiper-slide>
   		<swiper-slide>
   			<div class="swiper-img-con">
   				<img src="../../assets/img/home/630b82d932a3c402.jpg_640x200_862e836b.jpg" class="swiper-img">
   			</div>
   		</swiper-slide>
   		<swiper-slide>
   			<div class="swiper-img-con">
   				<img src="../../assets/img/home/a.jpg" class="swiper-img">
   			</div>
   		</swiper-slide>
   		<swiper-slide>
   			<div class="swiper-img-con">
   				<img src="../../assets/img/home/b.jpg" class="swiper-img">
   			</div>
   		</swiper-slide>
    	<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

  	export default {
    	data() {
			return {
				swiperOption: {
          			autoplay: 3000,
          			direction: 'horizontal',
         			autoHeight: true,
          			pagination: '.swiper-pagination',
        			observeParents: true,
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
	.swiper-pagination-bullet {
		background: #00bcd4;
	}
</style>

<style scoped>
	.swiper-img-con {
		/*让高度自动变为宽度的31.25%,只能用padding实现*/
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img {
		width: 100%;
	}
</style>