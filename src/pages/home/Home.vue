<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<shi-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import ShiserComponent from "./Shi";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"shi-content":ShiserComponent
		
	}
}
</script>

<style>
</style>
