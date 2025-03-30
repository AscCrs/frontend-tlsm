<script setup>
import { onMounted } from 'vue';
import { useCamera } from './useCamera';
import { defineExpose } from 'vue';

const { video, canvas, constraints, captureImage, startCamera} = useCamera();

// Iniciar la cámara cuando el componente se monta
onMounted(async () => {
    await startCamera();
});

defineExpose({
    captureImage
});
</script>

<template>
    <div class="camera-module">
    <video 
        ref="video" 
        autoplay 
        playsinline 
        muted 
        class="video-source"
    ></video>
    
    <canvas 
        ref="canvas" 
        class="camera-preview"
        :width="constraints.video.width?.ideal || 720"
        :height="constraints.video.height?.ideal || 720"
    ></canvas>
    
    </div>
</template>

<style scoped>
.camera-module {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.video-source {
    display: none;
}

.camera-preview {
    width: 100%;
    max-width: 720px;
    background: purple;
    border-radius: 8px;
    aspect-ratio: 1/1;
}

</style>