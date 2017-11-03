<template>
	<swiper :options="swiperOption" ref="mySwiper">
    	<swiper-slide>
    		<div class="swiper-img-con">
    			<ul>
    				<li>
    					<img src="../../assets/img/home/1.png" class="img-con">
    					<p class="contents">景点门票景点门票</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/2.png" class="img-con">
    					<p class="contents">动植物园</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/3.png" class="img-con">
    					<p class="contents">故宫</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/4.png" class="img-con">
    					<p class="contents">一日游</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/5.png" class="img-con">
    					<p class="contents">必有榜单</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/6.png" class="img-con">
    					<p class="contents">秋色美</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/7.png" class="img-con">
    					<p class="contents">游乐场</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/8.png" class="img-con">
    					<p class="contents">泡温泉</p>
    				</li>
    			</ul>
    			
    		</div>
    	</swiper-slide>
   		<swiper-slide>
   			<div class="swiper-img-con">
   				<ul>
    				<li>
    					<img src="../../assets/img/home/1.png" class="img-con">
    					<p class="contents">景点门票景点门票</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/2.png" class="img-con">
    					<p class="contents">动植物园</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/3.png" class="img-con">
    					<p class="contents">故宫</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/4.png" class="img-con">
    					<p class="contents">一日游</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/5.png" class="img-con">
    					<p class="contents">必有榜单</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/6.png" class="img-con">
    					<p class="contents">秋色美</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/7.png" class="img-con">
    					<p class="contents">游乐场</p>
    				</li>
    				<li>
    					<img src="../../assets/img/home/8.png" class="img-con">
    					<p class="contents">泡温泉</p>
    				</li>
    			</ul>
    			
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
</style>

<style scoped>
	.swiper-img-con {
		/*让高度自动变为宽度的31.25%,只能用padding实现*/
		overflow: hidden;
		width: 100%;
		height: 1.5rem;
		padding-bottom: 31.25%;
		border-bottom: 1px solid #F1F1F1;
	}
	.swiper-img-con ul li{
		width: 25%;
		height: 1.3rem;
		float: left;
		text-align: center;
		padding-top: 0.3rem;
	}
	
	.img-con{
		width: 0.66rem;
		height: 0.66rem;
		margin-bottom:0.2rem
	}
	
	.contents{
		margin-left: 0.2rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>