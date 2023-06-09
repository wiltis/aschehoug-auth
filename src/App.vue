<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { useAuth0 } from '@auth0/auth0-vue';

const { isLoading } = useAuth0()
</script>

<template>
	<Header />

	<RouterView />
</template>

<style scoped></style>
