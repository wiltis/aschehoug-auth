<script setup lang="ts">
import Login from './Login.vue';
import Logout from './Logout.vue';
import { useAuth0 } from '@auth0/auth0-vue';

const { user, isAuthenticated, isLoading } = useAuth0()
</script>

<template>
	<header class="header">
		<div class="header-content">
			<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="64" height="64" />
			<span v-if="isAuthenticated && !isLoading">Hei, {{ user?.name }}!</span>
			<Login v-if="!isAuthenticated && !isLoading" />
			<Logout v-if="isAuthenticated && !isLoading" class="last-item" />
		</div>
	</header>
</template>

<style scoped>
.header {
	width: 100vw;
}

.header-content {
	display: flex;
	align-items: flex-end;
	gap: 32px;
	max-width: 1024px;
	padding: 32px;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
}

.last-item {
	margin-left: auto;
}
</style>
