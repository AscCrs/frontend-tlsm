<script setup>
    import HeaderComponent from './components/HeaderComponent.vue';
    import captureButton from './components/captureButton.vue';
    import baseCamara from './components/camera/baseCamara.vue';
    import miFondo from '@/assets/fondo.png';
</script>

<template>
    <div class="app-container">
        <HeaderComponent />
        <div class="background"></div>
        <div class="camera-section">
        <div class="camera-content">
            <div class="button-container">
            <captureButton />
            </div>
            <baseCamara />
            
        </div>
        </div>
    </div>
</template>



<style scoped>

.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.camera-section {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
.background {
  background-image: v-bind('`url(${miFondo})`'); /* Usa la imagen importada */
  background-size: cover;        /* Ajusta la imagen sin distorsionarla */
  background-position: center;   /* Centra la imagen */
  background-repeat: no-repeat;  /* Evita repeticiones */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
}

.background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  background: rgba(0, 0, 0, 0.2);    /* Oscurece la imagen */
  z-index: 1;                         /* Coloca el overlay por debajo del contenido */
}

.camera-content {
    position: relative;
    z-index: 2;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.button-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
}



</style>
