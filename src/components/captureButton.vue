<script setup>
import { defineProps, defineEmits, ref } from 'vue';

defineProps({
    cameraIcon: {
    type: String,
    default: '@/assets/cam.png'
    },
    uploadIcon: {
    type: String,
    default: '@/assets/upload.png'
    }
});

const emit = defineEmits(['capture', 'upload']);

const fileInput = ref(null);

const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) emit('upload', file);
};

const triggerUpload = () => fileInput.value.click();
</script>

<template>
    <div class="dual-button-container">
        <!-- Input oculto para subir archivos -->
        <input 
        type="file" 
        ref="fileInput" 
        @change="handleUpload"
        accept="image/*"
        hidden
        >
        
        <!-- Contenedor de los dos botones juntos -->
        <div class="dual-button">
        <!-- Botón izquierdo (Cámara) -->
        <button 
            @click="emit('capture')"
            class="left-button"
            title="Tomar foto"
        >
            <img src="@/assets/cam.png" alt="Cámara">
        </button>
        
        <!-- Divisor -->
        <div class="divider"></div>
        
        <!-- Botón derecho (Subir) -->
        <button 
            @click="triggerUpload"
            class="right-button"
            title="Subir imagen"
        >
            <img src="@/assets/upload.png" alt="Subir">
        </button>
        </div>
    </div>
</template>
    
<style scoped>
.dual-button-container {
    display: flex;
    justify-content: center;
    margin-top: 3px;
}

.dual-button {
    display: flex;
    background: #EDEDED;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
    
.left-button, .right-button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.left-button:hover, .right-button:hover {
    background-color: #e0e0e0;
}

.left-button:active, .right-button:active {
    background-color: #d0d0d0;
    transform: scale(0.98);
}

.divider {
    width: 1px;
    background-color: #ccc;
    margin: 8px 0;
}

.dual-button img {
    width: 24px;
    height: 24px;
    filter: invert(30%);
}
</style>