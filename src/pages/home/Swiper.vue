<template>
  
	<swiper :options="swiperOption" ref="mySwiper">
<<<<<<< HEAD
    	
   		<swiper-slide v-for="item in swiperInfo" :key="item.id">
   			<router-link :to="item.link">
=======

    	<swiper-slide>

    		<div class="swiper-img-con">
    			<img src="../../assets/img/home/1d7693c6bd8abd02.png_640x200_43c308dd.png" class="swiper-img">
    		</div>
    	</swiper-slide>
   		<swiper-slide>
>>>>>>> 4ad0b73c1ea60ceaa9148fde3d49a38dc6293458
   			<div class="swiper-img-con">
   				<img :src="item.imgUrl">
   			</div>
   			</router-link>
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
    	
    	computed:{
    		swiperInfo(){
    			return this.$store.state.home.swiperInfo;
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
	.swiper-img-con img {
		width: 100%;
	}
</style>