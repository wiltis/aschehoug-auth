<script setup lang="ts">
import { ref } from "vue"

const isVideoVisible = ref<boolean>(false)
const videoPlayer = ref<HTMLVideoElement | null>(null)
const videoFile = ref<File | undefined>(undefined)

const handleChange = (e: Event): void => {
	const target = e?.target as HTMLInputElement
	videoFile.value = target?.files?.[0]

	if (videoFile.value === undefined) return

	let reader = new FileReader()

	reader.readAsDataURL(videoFile.value)
	reader.addEventListener("load", () => {
		if (!videoPlayer.value) return
		videoPlayer.value.src = reader.result?.toString() ?? ""
		isVideoVisible.value = true
	})
}
</script>

<template>
	<div class="video-upload">
		<div class="video-input">
			<label for="videoInput">
				Last opp en video for å spille den av
			</label>
			<input type="file" name="videoInput" @change="handleChange" accept="video/*" />
		</div>
		<video class="video-player" :class="{ hidden: !isVideoVisible }" ref="videoPlayer" id="videoPlayer" controls
			type="video/mp4" autoplay>
		</video>
	</div>
</template>

<style scoped>
.video-upload {
	display: flex;
	flex-direction: column;
	gap: 32px;
}

.video-input {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.video-player {
	width: 100%;
}

.hidden {
	display: none;
}

.play-button {
	margin-left: auto;
	margin-right: auto;
	width: fit-content;
}
</style>