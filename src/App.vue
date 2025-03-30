<template>

     <div class="background">
      <HeaderComponent />
      <MainCard />
     </div>
    
</template>

 <script setup lang="js">
 import HeaderComponent from './components/HeaderComponent.vue';
 import miFondo from '@/assets/fondo.png';
 import MainCard from './components/MainCard.vue';
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

  background: rgba(0, 0, 0, 0.1);    
 /* z-index: 1;                      */
}



</style>
