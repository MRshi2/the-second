<template>
	<div>
		<home-header></home-header>
		<home-Swipe></home-Swipe>
		<home-Listitem></home-Listitem>
	</div>
</template>

<script>
	import HeaderComponent from './Header';
	import SwipeComponent from './Swipe';

	import ListitemComponent from './Listitem';
	export default {
		components :{
			'home-header' : HeaderComponent,
			'home-Swipe' : SwipeComponent,
			'home-Listitem' : ListitemComponent
		}
	}
	
</script>

<style>
</style>