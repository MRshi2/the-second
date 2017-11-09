<template>
	<div>
 		<city-search @handleChangeShow='handleChangeShow'/>
 		<city-list v-show='hide' :chooseletter='chooseletter'/>
 		<city-aside v-show='hide' @handleThisLetterForeign='handleThisLetter'/>
 	</div>
</template>

<script>
import CitySearch from "./foreign/CitySearch";
import CityList from "./foreign/CityList";
import CityAside from "./foreign/CityAside";

export default {
	components: {
		"city-search": CitySearch,
		"city-list": CityList,
		"city-aside": CityAside
	},
	data(){
		return {
			hide:true,
			chooseletter:''
		}
	},
	methods: {
		handleChangeShow(e){
			this.hide = !e.hide;
		},
		handleThisLetter(e){
			this.chooseletter=e.chooseletter;
		}
	}
}
</script>


<style>

</style>
