<template>
  <header class="header">
    <div class="container">
      <!-- Sección central con los óvalos y el título -->
      <div class="center-container">
        <div class="ovals">
          <!-- Óvalos decorativos detrás del logo -->
          <div class="oval pink"></div>
          <div class="oval purple"></div>
          <div class="oval green"></div>
        </div>

        <div class="center-content">
          <!-- Logo de la aplicación -->

          <img src="@/assets/oso.png" alt="Logo de NeuroSeñas" class="logo"  />
          <span class="title">NeuroSeñasMX</span>
        </div>
      </div>

      <!-- Sección de contacto alineada a la derecha -->
      <div class="contact">
        <a  @click="$emit('abrir-formulario')" class="contact-link" >
          <span>Contactanos</span>
          <img src="@/assets/chat1.png" alt="Icono Contacto" class="contact-icon" />  
        </a>
      </div>
    </div>
  </header>
</template>
<script setup>
import { defineEmits } from 'vue'; 
defineEmits(['abrir-formulario']);
 
</script>
<style>
/* Estilos generales para evitar márgenes no deseados y el desplazamiento horizontal */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Evita la barra de desplazamiento horizontal */
}


.header {
  position: fixed;
  transition: height 0.2s ease;
  display: flex;
  justify-content: center; 
  height: 50px; 
  background-color: #EEE2E6;
  padding: 12px;
  width: 100%; 
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);
  z-index: 10;
}

/* Contenedor principal de la cabecera */
.container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0 20px;
}

/* Contenedor del logo y los óvalos */
.center-container {
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}

/* Contenedor de los óvalos */
.ovals {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

/* Estilos generales de los óvalos */
.oval {
  width: 175px;  /* Ancho de los óvalos */
  height: 35px;  /* Altura de los óvalos */
  border-radius: 25px;
  position: absolute;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  user-select: none;
}

/* Colores de los óvalos y su posición */
.pink { background-color: #f38fef; left: -40px; z-index: 3; }
.purple { background-color: #B554B3; left: -10px; z-index: 2; }
.green { background-color:#d3efbc; left: 20px; z-index: 1; }

/* Contenedor del logo y título */
.center-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  user-select: none;
  right:15px;
}

/* Estilos del logo */
.logo {
  width: 40px;
  height: 45px;
  margin-right: 5px;

}

/* Estilos del título */
.title {
  font-family: 'Coiny', cursive;
  font-size: 21px;
  font-weight: bolder;
  cursor: default;
  user-select: none;
  pointer-events: none;
}

/* Contenedor del enlace de contacto */
.contact {
  display: flex;
  justify-content: flex-end;
}

/* Estilos del enlace de contacto */
.contact-link {
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  font-family: 'Coiny', cursive;
  font-weight: bold;
  font-size: 15px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  color: black;
  user-select: none;
  border: none;
  background: #EEE2E6;
  cursor: pointer;
 
}
@keyframes bailar {
  0% {
    transform: translateX(0); /* Posición original */
  }
  25% {
    transform: translateX(-1px); /* Mover un poquito hacia la izquierda */
  }
  50% {
    transform: translateX(3px); /* Mover un poquito hacia la derecha */
  }
  75% {
    transform: translateX(-4px); /* Mover un poquito hacia la izquierda */
  }
  100% {
    transform: translateX(0); /* Volver a la posición original */
  }
}
span:hover {
  animation: bailar 1.8s ease-in-out; 
}

/* Animación de rebote infinito para el logo */
@keyframes reboteLogo {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
}

.logo {
  animation: reboteLogo 3.6s ease-in-out infinite; /* Animación infinita y más lenta */
}


</style>
