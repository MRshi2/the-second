<template>
	<div>
<<<<<<< HEAD
 		<home-header/>
 		<swiper-content/>

 		<home-Listitem></home-Listitem>
 	
=======
 		<index-header />
 		<index-swiper />
 		<index-smallswiper />
 		<index-active />
 		<index-hotsale />
 		<index-footer />
>>>>>>> all
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import ShiserComponent from "./Shi";//石文渊
import ListitemComponent from './Listitem';//路雪缘
import MpXwkcotaintList from "./Xwklist";//徐文凯
import weekList from './weekList';//赵振平


import ListitemComponent from './Listitem';//路雪缘


export default {
	
	components: {
<<<<<<< HEAD
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,

		'home-Listitem' : ListitemComponent,

=======
		"index-header": HeaderComponent,
		"index-swiper": SwiperComponent,
		"index-smallswiper":ShiserComponent,
		'index-active' : ListitemComponent,
		"index-hotsale":MpXwkcotaintList,
		"index-footer": weekList
	},
	
	mounted(){
		if(this.$store.getters.shouldGetData){
		this.$store.dispatch("getIndexInfo");
		};
>>>>>>> all
	}
}
</script>

<style>
</style>
