<template>
 	<header class="header">
 		<div class="header-left iconfont icon-fanhui"></div>
 		<div class="header-title">
 			输入城市或景点
 		</div>
 		<div class="header-right">
 			搜索
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
		font-size: .35rem;
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
		font-size: 0.3rem;
	}
	
	
</style>
