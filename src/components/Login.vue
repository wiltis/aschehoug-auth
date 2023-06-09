<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const auth0 = useAuth0()

const login = () => auth0.loginWithRedirect()

</script>

<template>
	<div class="container">
		<button class="login-button" @click="login">
			Logg inn
		</button>
	</div>
</template>

<style scoped>
.container {
	padding-top: 156px;
}

.login-button {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin-right: auto;
	margin-left: auto;
	padding: 12px;
	width: fit-content;
}
</style>