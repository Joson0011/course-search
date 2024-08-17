<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import { windowHeight, windowWidth } from "vant/lib/utils";
import BScroll from '@better-scroll/core'
import { schedule, columns } from './Schedule.ts'
defineProps<{ msg: string }>();

const list: Ref<any[]> = ref(schedule)
const value = ref('')
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
const init = () => {
	let bs = new BScroll('.wrapper',)
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
		backgroundColor: 'yellow'
	}">
		<van-nav-bar title="标题" fixed />
	</div>
	<div class="wrapper">
		<s-table sticky :maxHeight=windowHeight - 100 :columns="columns" :data-source="schedule" :pagination="false" />
	</div>

	<div ref="tabbar" :style="{
		backgroundColor: 'blue'
	}">
		<van-tabbar>
			<van-search v-model="value" placeholder="Please insert course number or text" />
		</van-tabbar>
	</div>
</template>
