<template>
  <!-- Componente HeaderComponent con un evento para abrir el formulario -->
  <HeaderComponent @abrir-formulario="mostrarFormulario = true" class="header-animado"/>
  
  <!-- Contenedor principal con el fondo de imagen -->
  <div class="background" :style="{ backgroundImage: `url(${miFondo})` }">
    
    <!-- Componente del formulario de contacto, solo se muestra si 'mostrarFormulario' es verdadero -->
    <FormularioContacto v-if="mostrarFormulario" @cerrar="mostrarFormulario = false" />
  </div>
</template>

<script setup>
// Importaciones necesarias de Vue y componentes
import { ref } from 'vue'; 
import HeaderComponent from './components/HeaderComponent.vue';
import FormularioContacto from './components/FormularioContacto.vue';
import miFondo from '@/assets/fondo.png';

// Estado reactivo para controlar la visibilidad del formulario de contacto
const mostrarFormulario = ref(false);
</script>

<style scoped>
/* Animación para mover el fondo de la página */
@keyframes fondoAnimado {
  0% { background-position: center top; }       /* Inicio: fondo en la parte superior */
  50% { background-position: center center; }   /* Medio: fondo centrado */
  100% { background-position: center bottom; }  /* Fin: fondo en la parte inferior */
}

/* Estilo principal del fondo */
.background {
  background-size: cover;                       /* El fondo cubre todo el área disponible */
  background-position: center top;              /* El fondo comienza desde la parte superior */
  background-repeat: no-repeat;                 /* El fondo no se repite */
  min-height: 100vh;                             /* Asegura que el fondo cubra toda la altura de la pantalla */
  width: 100%;                                  /* Asegura que el fondo cubra toda la anchura */
  position: relative;                           /* Establece un contexto para elementos dentro del fondo */
  overflow: auto;                               /* Permite el desplazamiento si el contenido sobrepasa el tamaño */
  animation: fondoAnimado 30s ease-in-out infinite alternate; /* Aplica la animación de movimiento del fondo */
}

/* Capa adicional para oscurecer el fondo sin afectar interacciones */
.background::after {
  content: '';                                  /* No se muestra contenido visual, solo el efecto de sombra */
  position: absolute;                           /* Posiciona la capa sobre el fondo */
  top: 0; left: 0; right: 0; bottom: 0;         /* Cubre toda la zona del fondo */
  background: rgba(0, 0, 0, 0.3);              /* Aplica un color oscuro con un nivel de opacidad */
  pointer-events: none;                         /* Evita que la capa oscura interfiera con las interacciones del usuario */
}
</style>
