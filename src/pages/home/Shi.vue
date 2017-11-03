<template>
	<swiper :options="swiperOption" ref="mySwiper">
    	<swiper-slide>
    		<div class="swiper-img-con">
    			<ul>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/1.png"></div>
    					<div class="over">景点门票景点门票</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/2.png"></div>
    					<div>动植物园</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/3.png"></div>
    					<div>故宫</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/4.png"></div>
    					<div>一日游</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/5.png"></div>
    					<div>必有榜单</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/6.png"></div>
    					<div>秋色美</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/7.png"></div>
    					<div>游乐场</div></li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/8.png"></div>
    					<div>泡温泉</div>
    				</li>
    			</ul>
    			
    		</div>
    	</swiper-slide>
   		<swiper-slide>
   			<div class="swiper-img-con">
   				<ul>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/1.png"></div>
    					<div>景点门票</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/2.png"></div>
    					<div>动植物园</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/3.png"></div>
    					<div>故宫</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/4.png"></div>
    					<div>一日游</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/5.png"></div>
    					<div>必有榜单</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/6.png"></div>
    					<div>秋色美</div>
    				</li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/7.png"></div>
    					<div>游乐场</div></li>
    				<li>
    					<div class="imgdiv"><img src="../../assets/img/home/8.png"></div>
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
		border-bottom: 1px solid #F1F1F1;
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
	.over{
		width: 1.5rem;
		margin-left: 0.2rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>