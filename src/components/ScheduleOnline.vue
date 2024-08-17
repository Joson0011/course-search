<script setup lang="ts">
import { Ref, getCurrentInstance, onMounted, ref } from "vue";
import { showToast } from "vant";
import { windowHeight, windowWidth } from "vant/lib/utils";
import BScroll from '@better-scroll/core'
defineProps<{ msg: string }>();


const list: number[] = [1, 2, 3];

let loading = false
let finished = false
let isLoading = false
let count = 0;
const value = ref('')
const active = ref(0)
const value1 = ref(0);
const value2 = ref('a');
const option1 = [
	{ text: 'All Days', value: 0 },
	{ text: 'Monday', value: 1 },
	{ text: 'Tuesday', value: 2 },
	{ text: 'Wednesday', value: 3 },
	{ text: 'Thuesday', value: 4 },
	{ text: 'Friday', value: 5 },
	{ text: 'Saturday', value: 6 },
];
const option2 = [
	{ text: '默认排序', value: 'a' },
	{ text: '好评排序', value: 'b' },
	{ text: '销量排序', value: 'c' },
];
const arr = [
	"11", "22", "33"
];

const onLoad = () => {
	// 异步更新数据
	setTimeout(() => {
		for (let i = 0; i < 50; i++) {
			list.push(i + 1)
		}
		// 加载状态结束
		loading = false;
		// 数据全部加载完成
		if (list.length >= 50) {
			finished = true;
		}
	}, 500);
}
const onRefresh = () => {
	setTimeout(() => {
		showToast('刷新成功');
		isLoading = false;
		count++;
	}, 500);
}
const bs = null

const init = () => {
	const bs = new BScroll(this.$refs.scroll, {
		probeType: 3,
		click: true
	})
	bs.on('scrollStart', () => {
		console.log('scrollStart-')
	})
	bs.on('scroll', ({ y }) => {
		console.log('scrolling-')
	})
	bs.on('scrollEnd', (pos: any) => {
		console.log(pos)
	})
}
const clickHandler = (item: any) => {
	window.alert(item)
}

const navbar = ref()
const tabbar = ref()

onMounted(() => {
	console.log(navbar.value.height)
	init()
})
</script>

<template>
	<div ref="navbar" :style="{
		padding: '5px 5px', backgroundColor: 'yellow'
	}">
		<van-nav-bar title="标题" fixed />
	</div>
	<div :style="{
		padding: '5px 5px', backgroundColor: 'red', width: windowWidth + 'px',
		height: windowHeight + 'px'
	}">
		<van-dropdown-menu swipe-threshold="4">
			<van-dropdown-item v-model="value1" :options="option1" />
			<van-dropdown-item v-model="value2" :options="option2" />
		</van-dropdown-menu>

		<div id="listContainer">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="load">
					<van-cell v-for="item in list" :key="item" :title="item" />
				</van-list>
			</van-pull-refresh>
		</div>
	</div>

	<div ref="tabbar" :style="{
		padding: '5px 5px', backgroundColor: 'blue'
	}">
		<van-tabbar>
			<van-search v-model="value" placeholder="Please insert course number or text" />
		</van-tabbar>
	</div>
</template>

<style>
#app {
	overflow-y: auto;
}
</style>
