<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

const value = ref('');
</script>

<template>
    <h1>{{ msg }}</h1>
    <van-field v-model="value" label="Search Course" placeholder="Please insert course number" />
</template>
