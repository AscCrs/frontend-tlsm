<template>
<<<<<<< HEAD
<HeaderComponent />\
<captureButton />

<camera />
</template>
    <script setup lang="js">
    import HeaderComponent from './components/HeaderComponent.vue';
    import captureButton from './components/captureButton.vue';
    import camera from './components/camera/baseCamara.vue';
    
=======

     <div class="background">
      <HeaderComponent />
     </div>
    
</template>

 <script setup lang="js">
 import HeaderComponent from './components/HeaderComponent.vue';
 import miFondo from '@/assets/fondo.png';
>>>>>>> 420c2ac18fa7ee54910cc57720d0da1c31f331e7
</script>

<style scoped>
.background {
  background-image: v-bind('`url(${miFondo})`'); /* Usa la imagen importada */
  background-size: cover;        /* Ajusta la imagen sin distorsionarla */
  background-position: center;   /* Centra la imagen */
  background-repeat: no-repeat;  /* Evita repeticiones */
  min-height: 100vh;             /* Que cubra toda la pantalla */
  width: 100%;
  display: flex;
  flex-direction: column;
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



</style>
