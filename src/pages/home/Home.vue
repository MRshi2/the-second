<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<shi-content/>
 		<!-- <home-Listitem></home-Listitem> -->
 		<mpxwkcontent/>
 		<week-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import ShiserComponent from "./Shi";//石文渊
<<<<<<< HEAD
// import ListitemComponent from './Listitem';//路雪缘
=======
//import ListitemComponent from './Listitem';//路雪缘
>>>>>>> 5b836d32c57f4ec74754acac24c0b70e7cec7219
import MpXwkcotaintList from "./Xwklist";//徐文凯
import weekList from './weekList';//赵振平

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"shi-content":ShiserComponent,
<<<<<<< HEAD
		// 'home-Listitem' : ListitemComponent,
		"mpxwkcontent":MpXwkcotaintList,
		"week-content": weekList


=======
//		'home-Listitem' : ListitemComponent,
		"mpxwkcontent":MpXwkcotaintList,
		"week-content": weekList
>>>>>>> 5b836d32c57f4ec74754acac24c0b70e7cec7219
		
	}
}
</script>

<style>
</style>
