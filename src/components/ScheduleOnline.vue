<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from "vue";
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

const navbar = ref()
const tabbar = ref()

onMounted(() => {
	console.log(navbar.value.height)
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

		<van-pull-refresh v-model="loading" @refresh="onRefresh">
			<van-list finished-text=" 没有更多了">
				<van-cell v-for="item in list" :key="item" :title="item" />
			</van-list>
		</van-pull-refresh>
	</div>

	<div ref="tabbar" :style="{
		padding: '5px 5px', backgroundColor: 'blue'
	}">
		<van-tabbar>
			<van-search v-model="value" placeholder="Please insert course number or text" />
		</van-tabbar>
	</div>
</template>
