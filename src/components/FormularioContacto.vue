<template>
  <!-- Modal Overlay: Capa de fondo oscura que aparece al hacer clic fuera del modal -->
  <div class="modal-overlay" @click.self="$emit('cerrar')">
    <div class="rectangulo">
      <!-- Rectángulo verde que contiene la imagen y el texto -->
      <div class="rectangulo-verde">
        <!-- Contenedor para la imagen de fondo -->
        <div class="contenedor-imagen">
          <!-- Imagen de fondo que se ajusta al contenedor -->
          <img :src="fondo022" alt="Decoración" class="imagen-fondo" />
          
          <!-- Contenedor de texto que incluye el título, la descripción y el correo de contacto -->
          <div class="texto-contenedor">
            <h1 class="titulo">Información General de Contacto</h1>
            <p class="descripcion">
              Escribe tus dudas en el cuadro de mensaje. Nuestro equipo se comunicará contigo en breve.
            </p>
            <div class="contacto">
              <!-- Icono de correo junto al correo de contacto -->
              <svg class="icono-correo" width="15" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white"/>
              </svg>
              <span class="correo">contacto@ejemplo.com</span>
            </div>
          </div>
        </div>

        <!-- Circulitos decorativos -->
        <div class="circulo"></div>
        <div class="circulo2"></div>
      </div>

      <!-- Rectángulo azul que contiene el formulario de contacto -->
      <div class="rectangulo-azul">
        <form class="formulario" @submit.prevent="enviarCorreo">
          <!-- Campo para nombre -->
          <div class="campo">
            <label for="nombre">Nombre(s):</label>
            <input type="text" id="nombre" v-model="nombre" required />
          </div>

          <!-- Campo para apellido -->
          <div class="campo0">
            <label for="apellido">Apellido(s):</label>
            <input type="text" id="apellido" v-model="apellido" required />
          </div>

          <!-- Campo para correo electrónico -->
          <div class="campo1">
            <label for="correo">Correo Electrónico:</label>
            <input type="email" id="correo" v-model="correo" required />
          </div>

          <!-- Campo para seleccionar el motivo del mensaje -->
          <div class="campo2">
            <label for="motivo">Selecciona un Motivo:</label>
            <div class="motivo-opciones">
              <label v-for="(opcion, index) in opciones" :key="index" class="motivo-label">
                <input
                  type="radio"
                  id="motivo"
                  v-model="motivoSeleccionado"
                  :value="opcion"
                  class="motivo-radio"
                />
                <span class="motivo-check"></span>
                {{ opcion }}
              </label>
            </div>
          </div>

          <!-- Campo para mensaje -->
          <div class="campo3">
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" v-model="mensaje" required></textarea>
          </div>

          <!-- Botón de envío -->
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import fondo022 from '@/assets/fondo022.png'; // Imagen de fondo para el modal
import emailjs from "emailjs-com"; // Librería para enviar correos
import Swal from 'sweetalert2'; // Librería para mostrar alertas
import { ref } from "vue"; // Importa el hook 'ref' de Vue
import { defineEmits } from 'vue'; // Permite emitir eventos desde el componente

// Definir evento para cerrar el modal
const emit = defineEmits(['cerrar']);
const nombre = ref(""); // Variable reactiva para el nombre
const apellido = ref(""); // Variable reactiva para el apellido
const correo = ref(""); // Variable reactiva para el correo electrónico
const mensaje = ref(""); // Variable reactiva para el mensaje
const motivoSeleccionado = ref("Consulta General"); // Valor por defecto para el motivo
const opciones = ["Consulta General", "Soporte", "Puntos a mejorar"]; // Opciones para el motivo

// Función para enviar el correo utilizando emailjs
function enviarCorreo() {
  // Validación de campos: Si falta algún campo, muestra una alerta
  if (!nombre.value || !apellido.value || !correo.value || !mensaje.value) {
    Swal.fire({
      icon: 'warning',
      title: '¡Faltan datos!',
      html: `
        <ul style="text-align: left; margin: 10px 0 0 20px;">
          ${!nombre.value ? '<li>Nombre</li>' : ''}
          ${!apellido.value ? '<li>Apellido</li>' : ''}
          ${!correo.value ? '<li>Correo electrónico</li>' : ''}
          ${!mensaje.value ? '<li>Mensaje</li>' : ''}
        </ul>
      `,
      confirmButtonColor: '#166A39'
    });
    return;
  }

  // Enviar el correo utilizando EmailJS
  emailjs.init("Khr23VRJG8Fqc2PTs");
  const templateParams = {
    nombre: nombre.value,
    apellido: apellido.value,
    correo: correo.value,
    motivo: motivoSeleccionado.value,
    mensaje: mensaje.value,
  };

  // Llamada a EmailJS para enviar el correo
  emailjs
    .send("traductorlsm", "template_tk7ykqc", templateParams, "Khr23VRJG8Fqc2PTs")
    .then(() => {
      // Alerta de éxito
      Swal.fire({
        iconColor:'#166A39', 
        icon: 'success',
        title: '<span style="color: black">¡Mensaje Enviado!</span>',
        html: '<div style="color: black; font-size: 14px">Te responderemos pronto.</div>',
        background: '#EEE2E6',
        showConfirmButton: false,
        timer: 4000,
        height: '300px',
        width: '400px', // Tamaño más compacto
      });
      emit('cerrar'); // Cierra el modal después de enviar el correo
    })
    .catch((error) => {
      // Alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar: ' + error.message,
        confirmButtonColor: '#B554B3'
      });
    });
}
</script>
<style scoped>
/* Estilos globales para la validación de formularios */
input:invalid, textarea:invalid {
  box-shadow: none; /* Elimina el borde rojo por defecto en campos inválidos */
}

/* Estilos para los campos inválidos cuando tienen el foco */
input:invalid:focus, textarea:invalid:focus {
  border-bottom: 1px solid #ff4444; /* Añade un borde rojo */
}

/* Modal overlay que cubre toda la pantalla */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Fondo oscuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
  backdrop-filter: blur(3px); /* Desenfoque de fondo */
  overflow: auto;
}

/* Animación de entrada para el modal */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Estilo para el botón de envío */
button[type="submit"]:hover {
  transform: translateX(-4px);
  box-shadow: 0 8px 8px rgba(0,0,0,0.1);
}

/* Estilos para el rectángulo principal */
.rectangulo {
  display: flex;
  align-items: center;
  width: 85vw;
  max-width: 800px;
  min-width: 400px;
  height: 65vh;
  max-height: 700px;
  min-height: 375px;
  position: absolute;
  top: calc(15vh + 70px);
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  z-index: 1;
}

/* Estilos para el rectángulo verde */
.rectangulo-verde {
  position: relative;
  width: 40%;
  height: 98%;
  background-color: rgb(4, 111, 43);
  border-radius: 10px;
  margin-left: 5px;
  overflow: hidden;
  user-select: none;
}

/* Estilo para el contenedor de la imagen */
.contenedor-imagen {
  position: relative;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagen-fondo {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  filter: sepia(1) saturate(5) hue-rotate(180deg) brightness(0.3); 
}

/* Estilos para el texto dentro del rectángulo verde */
.texto-contenedor {
  position: absolute;
  top: 10%;
  left:10%;
  right: 10%;
  align-self: auto;
  user-select: none;
}

.titulo {
  font-family: 'Coiny', cursive;
  font-weight: bold;
  font-size: 15px;
  color: white;
}

.descripcion {
  font-family: 'Coiny', cursive;
  font-size: 10px;
  color: white;
}

/* Estilo de los iconos y texto de contacto */
.contacto {
  display: flex;
  align-items: center;
}

.icono-correo {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.correo {
  font-family: 'Cony', cursive;
  font-size: 15px;
  font-weight: bold;
  color: white;
}

/* Estilos para el formulario dentro del rectángulo azul */
.rectangulo-azul {
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  border-radius: 15px;
  height: 100%;
  background: white;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 85%;
  height: 80%;
  margin: 15px;
  font-family: 'Cony', cursive;
  box-sizing: border-box;
}

/* Estilos para los campos de formulario */
.campo, .campo0, .campo1, .campo2, .campo3 {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 13px;
  font-family: 'cony', cursive;
  margin-bottom: 5px;
  font-weight: bold;
}

input, select, textarea {
  width: 100%;
  font-size: 14px;
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-family: 'Calibri';
}

button {
  width: 100px;
  padding: 4px 6px;
  font-size: 12px;
  background-color: #046F2B;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Cony', cursive;
  display: block;
  margin: 5px auto;
}

/* Estilos del botón en estado hover */
button:hover {
  background-color: #729273;
}

/* Estilos para los motivos */
.motivo-opciones {
  display: flex;
  flex-direction: center;
  gap: 6px;
}

.motivo-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.motivo-radio {
  width: 12px;
  height: 12px;
  cursor: pointer;
}

.motivo-check {
  width: 12px;
  height: 12px;
}

/* Estilos de los circulitos decorativos */
.circulo {
  position: absolute;
  width: 20vw;
  height: 20vw;
  background: rgba(138, 4, 216, 0.12);
  border-radius: 50%;
  bottom: 0px;
  right: 0px;
  transform: translate(30%, 50%);
  max-width: 200px;
  max-height: 200px;
}

.circulo2 {
  position: absolute;
  width: 10vw;
  height: 10vw;
  background: rgba(82, 4, 100, 0.13);
  border-radius: 50%;
  bottom: 5vh;
  right: 5vw;
  z-index: 1;
  max-width: 100px;
  max-height: 100px;
}
</style>
