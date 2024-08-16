<script setup lang="ts">
import { ref } from "vue";
import { active, arr, value, list, value1, value2, option1, option2 } from "./ScheduleOnline"
import { showToast } from "vant";
import { windowHeight, windowWidth } from "vant/lib/utils";
defineProps<{ msg: string }>();


const loading = ref(false);
const onRefresh = () => {
	setTimeout(() => {
		showToast('刷新成功');
		loading.value = false;
	}, 1000);
};

const listCon = {
	padding: 1,
	width: 100,
	height: 50,
	top: 10,
}
</script>

<template>
	<div :style="{
		padding: '5px 5px', backgroundColor: 'yellow'
	}">
		<van-nav-bar title="标题" fixed />
	</div>
	<div :style="{
		padding: '5px 5px', backgroundColor: 'red'
	}">
		<van-dropdown-menu swipe-threshold="4">
			<van-dropdown-item v-model="value1" :options="option1" />
			<van-dropdown-item v-model="value2" :options="option2" />
		</van-dropdown-menu>

		<van-pull-refresh v-model="loading" @refresh="onRefresh">
			<van-list finished-text=" 没有更多了">
				<van-cell v-for="item in list" :key="item" :title="item" />
			</van-list>
		</van-pull-refresh>
	</div>

	<div :style="{
		padding: '5px 5px', backgroundColor: 'blue'
	}">
		<van-tabbar>
			<van-search v-model="value" placeholder="Please insert course number or text" />
		</van-tabbar>
	</div>
</template>
