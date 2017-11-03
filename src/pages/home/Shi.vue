<template>
	<swiper :options="swiperOption" ref="mySwiper">
    	<swiper-slide>
    		<div class="swiper-img-con">
    			<ul>
    				<li>
    					<div class="imgdiv"><img src="../../assets/1.png"></div>
    					<div>景点门票</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/2.png"></div>
    					<div>动植物园</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/3.png"></div>
    					<div>故宫</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/4.png"></div>
    					<div>一日游</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/1.png"></div>
    					<div>必有榜单</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/2.png"></div>
    					<div>秋色美</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/3.png"></div>
    					<div>游乐场</div></li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/4.png"></div>
    					<div>泡温泉</div>
    				</li>
    			</ul>
    		</div>
    	</swiper-slide>
   		<swiper-slide>
   			<div class="swiper-img-con">
   				<ul>
    				<li>
    					<div class="imgdiv"><img src="../../assets/1.png"></div>
    					<div>景点门票</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/2.png"></div>
    					<div>动植物园</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/3.png"></div>
    					<div>故宫</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/4.png"></div>
    					<div>一日游</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/1.png"></div>
    					<div>必有榜单</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/2.png"></div>
    					<div>秋色美</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/3.png"></div>
    					<div>游乐场</div></li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/4.png"></div>
    					<div>泡温泉</div>
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
	}
	.swiper-img-con ul li{
		width: 25%;
		height: 1.3rem;
		float: left;
		text-align: center;
		padding-top: 0.3rem;
	}
	
	.imgdiv{
		width: 0.66rem;
		height: 0.66rem;
		margin-left: 0.6rem;
		margin-bottom: 0.1rem;
	}
	.imgdiv img{
		width: 100%;
	}
</style>