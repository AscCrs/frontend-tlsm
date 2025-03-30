<script setup>

import { defineProps, defineEmits } from 'vue';

defineProps({
    icon: {
    type: String,
    default: '@/assets/cam.png'
    },
    title: {
    type: String,
    default: 'Tomar foto'
    }
});

const emit = defineEmits(['capture']);
</script>

<template>
    <button 
    @click="emit('capture')"
    class="capture-button"
    :title="title"
    >
    <img 
        src='@/assets/cam.png'
        alt="Icono de cámara" 
        class="button-icon"
    >
    </button>
</template>

<style scoped>
/* Contenedor padre que centrará el botón */
.button-container {
    display: flex;
    justify-content: center; /* Centrado horizontal */
    align-items: center;     /* Centrado vertical */
    width: 100%;
    margin: 1rem 0;         /* Espaciado opcional */
}

.capture-button {
    border: none;
    background-color: #EDEDED;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 12px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
}

.capture-button:hover {
    background-color: #969696;
}

.capture-button:active {
    background-color: #6b6b6b;
    transform: scale(0.95);
}

.button-icon {
    width: 24px;
    height: 24px;
    filter: invert(30%);
}
</style>