<template>
	<div>
		<ul class="mp-listitem-con">
			<li>
				<p>
					<span class="iconfont icon-weibiaoti-"></span>
					<i>定位失败</i>
				</p>
			</li>
			<li>
				<p>
					<span class="iconfont icon-earth"></span>
					<i>5折泡温泉</i>
				</p>
			</li>
		</ul>
		<ul class="mp-activity-con">
			<li>
				<img src="../../assets/img/home/e395615b16fb1302.png"/>
			</li>
			<li>
				<img src="../../assets/img/home/1685d2108b652302.png"/>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.mp-listitem-con{
		width: 100%;
		margin-top: 0.1rem;
		height: 0.98rem;
		display: flex;
	}
	.mp-listitem-con li{
		width: 50%;
		float: left;
		font-size: 0.28rem;
		text-align: center;
		line-height: 0.98rem;
		color: #212121;
		background: #fff;
		margin-top: 1px;
	}
	.mp-listitem-con li p{
		overflow: hidden;
		display: inline-block;
		white-space: nowrap;
		width: 2rem;
		text-overflow: ellipsis;
		height: 0.98rem;
	}
	.mp-listitem-con li:nth-child(1){
		margin-right: 1px;
	}
	.mp-activity-con{
		width: 100%;
		margin-top: 0.2rem;
		height: 1.4rem;
		display: flex;
	}
	.mp-activity-con li{
		width: 50%;
		margin-bottom: 1px;
		background: #fff;
	}
	.mp-activity-con li:nth-child(1){
		margin-right: 1px;
	}
	.mp-activity-con li img{
		height: 1.4rem;
		width: 100%;
	}
</style>