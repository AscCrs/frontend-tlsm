<template>
  <header class="header">
    <div class="container">
      <!-- Sección central con los óvalos y el título -->
      <div class="center-container">
        <div class="ovals">
          <!-- Óvalos decorativos detrás del logo -->
          <div class="oval pink" aria-hidden="true"></div>
          <div class="oval purple" aria-hidden="true"></div>
          <div class="oval green" aria-hidden="true"></div>
        </div>

        <div class="center-content">
          <!-- Logo de la aplicación -->
          <img src="@/assets/oso.png" alt="Logo de NeuroSeñas" class="logo" aria-label="Logo de NeuroSeñas" />
          <span class="title">NeuroSeñasMX</span>
        </div>
      </div>

      <!-- Sección de contacto alineada a la derecha -->
      <div class="contact">
        <a href="https://wa.me/2294122560" class="contact-link" aria-label="Enlace para contactar vía WhatsApp" target="_blank">
          <span>Contáctanos</span>
          <img src="@/assets/contacto.png" alt="Icono Contacto" class="contact-icon" aria-label="Icono de contacto" />
        </a>
      </div>
    </div>
  </header>
</template>

<style>
/* Estilos generales para evitar márgenes no deseados y el desplazamiento horizontal */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Evita la barra de desplazamiento horizontal */
}

/* Estilo del enlace al pasar el cursor */
a span:hover {
  color: rgb(92, 21, 91);
}

/* Estilos de la cabecera */
.header {
  display: flex;
  justify-content: center;  /* Centraliza el contenido de la cabecera */
  align-items: center;
  height: 50px; /* Altura de la cabecera */
  background-color: #EEE2E6;
  padding: 16px;
  width: 100%; 
  border-bottom: 2px solid #eee;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}

/* Contenedor principal de la cabecera */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: relative;
}

/* Contenedor del logo y los óvalos */
.center-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
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
  right:15px
}

/* Estilos del logo */
.logo {
  width: 40px;
  height: 45px;
  right: 5px;
  position: relative;
  z-index: 4;

}

/* Estilos del título */
.title {
  font-family: 'Coiny', cursive;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  font-size: 22px;
  font-weight: bolder;
  margin-right: 40px;
  z-index: 5;
  cursor: default;
  user-select: none;
  pointer-events: none;
}

/* Contenedor del enlace de contacto */
.contact {
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-50%);
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
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  color: black;
  user-select: none;
}

/* Estilos del icono de contacto */
.contact-icon {
  width: 25px;
  height: 25px;

}

</style>
