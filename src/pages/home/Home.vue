<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<shi-content/>
 		<!--<home-Listitem></home-Listitem>-->
 		<mpxwkcontent/>
 		<week-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import ShiserComponent from "./Shi";//石文渊
<<<<<<< HEAD
/*import ListitemComponent from './Listitem';//路雪缘
=======
//import ListitemComponent from './Listitem';//路雪缘
>>>>>>> d1b2d4b4b5c28a410e7b8bfef16c6d2d11dc86bb
import MpXwkcotaintList from "./Xwklist";//徐文凯
import weekList from './weekList';//赵振平*/

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"shi-content":ShiserComponent,
<<<<<<< HEAD
/*		'home-Listitem' : ListitemComponent,
=======
//		'home-Listitem' : ListitemComponent,
>>>>>>> d1b2d4b4b5c28a410e7b8bfef16c6d2d11dc86bb
		"mpxwkcontent":MpXwkcotaintList,
		"week-content": weekList*/
		
	}
}
</script>

<style>
</style>
