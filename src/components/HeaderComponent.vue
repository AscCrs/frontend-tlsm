<template>
    <header class="header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logotipo" />
      </div>
      
      <div class="main-title">
        <div class="back-icons">
          <div class="oval purple"></div>
          <div class="oval pink"></div>
        </div>
        <span class="title">Traductor LSM</span>
      </div>
  
      <nav class="navigation">
        <a href="#" class="contact">Contáctanos</a>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
  }
  
  .logo img {
    width: 3rem;
    height: 3rem;
  }
  
  .main-title {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .back-icons {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .oval {
    position: absolute;
    height: 100%;
    aspect-ratio: 2 / 1;
    border-radius: 50%;
  }
  
  .purple {
    background-color: #a500a5;
    left: 0;
  }
  
  .pink {
    background-color: #ff66c4;
    left: 20%;
  }
  
  .title {
    font-weight: bold;
    font-size: 1.5rem;
    color: #fff;
    z-index: 1;
  }
  
  .navigation .contact {
    font-weight: bold;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 2px solid #a500a5;
    border-radius: 1rem;
    color: #000;
  }
  
  .navigation .contact:hover {
    background-color: #a500a5;
    color: #fff;
  }
  </style>
  
  <script setup>
  // Aquí podrías agregar lógica si necesitas
  </script>
  