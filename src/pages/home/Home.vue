<template>
	<div>
 		<home-header/>
 		<swiper-content/>

 		<home-Listitem></home-Listitem>
 	
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";

import ListitemComponent from './Listitem';//路雪缘


export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,

		'home-Listitem' : ListitemComponent,

	}
}
</script>

<style>
</style>
