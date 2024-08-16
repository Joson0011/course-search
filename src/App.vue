<script setup lang="ts">
import { ref } from 'vue';
import ScheduleOnline from './components/ScheduleOnline.vue';
import { windowHeight, windowWidth } from 'vant/lib/utils';
//import 'amfe-flexible'


const IsMobile = ref(null == navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))

</script>

<template>
  <ScheduleOnline msg=" test test -------" />
</template>
