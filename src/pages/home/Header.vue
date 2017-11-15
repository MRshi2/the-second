<template>
<<<<<<< HEAD
	<header class="header">
		<div class="header-left">
			<span class="iconfont icon-fanhui"></span>
		</div>
		<div class="header-title">
			输入城市/景点/游园主题
		</div>
		<div class="header-right">
			<div class="header-city-wrapper">
				<span class="header-city">北京</span>
			</div>
		</div>
	</header>
=======
 	<header class="header">
 		<div class="header-left iconfont icon-fanhui"></div>
 		<router-link to="/list">
	 		<div class="header-title">
	 			输入城市/景点/游玩主题
	 		</div>
 		</router-link>
 		<div class="header-right">
 			<router-link to="/city">
 			<div class="header-city-wrapper">
 				<span class="header-city">北京</span>
 			</div>
 			</router-link>
 		</div>
 	</header>
>>>>>>> all
</template>


<script>
	export default {
		
	}
</script>

<style>
	
	.header {
<<<<<<< HEAD
		position: relative;
		height: 0.88rem;
		background: #00BCD4;
=======
		height: .88rem;
		background: #00bcd4;
>>>>>>> all
		overflow: hidden;
	}
	.header-left {
		float: left;
<<<<<<< HEAD
		width: 0.2rem;
		padding: 0 0.2rem;
		line-height: 0.88rem;
		font-size: 0.4rem;
=======
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
>>>>>>> all
		color: #fff;
	}
	.header-title{
		position: absolute;
<<<<<<< HEAD
		left: 0.8rem;
		right: 1.28rem;
		top: 0.14rem;
		line-height: 0.6rem;
=======
		left: .8rem;
		right: 1.36rem;
		top: .14rem;
		line-height: .6rem;
>>>>>>> all
		background: #fff;
		border-radius: 0.06rem;
		text-indent: 0.2rem;
		color: #ccc;
	}
	.header-right {
		float: right;
		width: 1.28rem;
		line-height: 0.88rem;
		text-align: center;
		color: #fff;
	}
	.header-city-wrapper {
		position: relative;
<<<<<<< HEAD
		padding-right: 0.3rem;
	}
	.header-city {
=======
		padding-right: .3rem;
	}
	.header-city {
		color: #FFFFFF;
>>>>>>> all
		overflow: hidden;
		display: inline-block;
		white-space: nowrap;
		width: 1rem;
		text-overflow: ellipsis;
	}
<<<<<<< HEAD
	.header-city:after{
		content: "\0020";
		position: absolute;
		top: 0.4rem;
		right: 0.14rem;
		width: 0;
		height: 0;
		border: 0.1rem solid transparent;
		border-top: 0.1rem solid #fff;
	}
</style>
=======
	.header-city::after {
		content: "\0020";
		position: absolute;		
		top: .4rem;
		right: .14rem;
		width: 0;
		height: 0;
		border: .1rem solid transparent;
		border-top: .1rem solid #fff;
	}
</style>
>>>>>>> all
