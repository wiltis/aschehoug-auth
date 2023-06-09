<script setup lang="ts">
import Login from "../components/Login.vue"
import VideoUpload from "../components/VideoUpload.vue"
import { useAuth0 } from '@auth0/auth0-vue';

const { isAuthenticated } = useAuth0()
</script>

<template>
	<main>
		<h1>Videospiller</h1>
		<VideoUpload v-if="isAuthenticated" />
		<Login v-if="!isAuthenticated" />
	</main>
</template>
 
<style scoped>
h1 {
	margin-bottom: 24px;
}
</style>