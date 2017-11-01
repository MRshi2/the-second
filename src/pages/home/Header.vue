<template>
 	<header class="header">
 		<div class="header-left icon-home"></div>
 		<div class="header-title">
 			输入城市/景点/游玩主题
 		</div>
 		<div class="header-right">
 			北京
 		</div>
 	</header>
</template>

<script>
export default {
	
}
</script>

<style>
	.header {
		position: relative;
		height: .88rem;
		background: #00bcd4;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .3rem;
		color: #fff;
	}
	.header-title {
		position: absolute;
		left: .8rem;
		right: 1.28rem;
		top: .14rem;
		line-height: .6rem;
		background: #fff;
		border-radius: .06rem;
		text-indent: .2rem;
		color: #ccc;
	}
	.header-right {
		float: right;
		width: 1.28rem;
		line-height: .88rem;
		text-align: center;
		color: #fff;
		font-size: 0.2rem;
	}
	.header-right:after {
		content: "";
		position: absolute;
		top: .35rem;
		right: 0.06rem;
		width: 0rem;
		height: 0rem;
		border-left: 0.1rem solid transparent;
		border-right: 0.1rem solid transparent;
		border-top: 0.15rem solid #FFFFFF; 
	}
</style>
