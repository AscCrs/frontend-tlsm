<template>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Coiny&display=swap" rel="stylesheet">
<div class="container">  <!--CAJA CONTENEDORA DE ESTOS-->
  <h2 class="Text">Seleccione una imagen o enfoca a una persona</h2>
  <div class="fondoimg">
  <img class="imgl" src="@/assets/back.png" alt="Imagen de img" /><!-- CAJA PARA RESULTADOS --> 
  </div>
  <div class="fondoresults">
    <img class="imgb" src="@/assets/DobleBG.png" alt="Imagen de backresults" />
    <img class="imgb2" src="@/assets/DobleBG.png" alt="Imagen de backresu" />
  </div>
  <div class="img"> <!-- CAJA PARA IMAGEN -->
  <!-- <img class="imgb" src="@/assets/DobleBG.png" alt="Imagen de backresults" />
  <img class="imgb2" src="@/assets/DobleBG.png" alt="Imagen de backresu" /> -->
  </div> 
  <div class="results"> 
    <div class="card-header"></div>
    <div class="card-content"></div>
    <h2>Resultados</h2>
  </div>
</div>
</template>

<script>

</script>

<style scoped>
.Text { /* TEXTO SELECCIONAR IMAGENES*/
position: absolute;
top: 20px;
left: 200px;
height: 20px;
font-family: 'Fredoka', serif;
font-weight: 200;
font-size: 25px; 
color: #2c2c2c;
}

.fondoresults{
position: absolute;
}

.imgl{ /* IMAGEN DE FONDO DE IMG*/
position: absolute;
width: 880px;
height: 500px;
left: 70px;
top: 130px;
filter: brightness(1);
}

.imgb{ /* IMAGEN DE FONDO DE RESULTADOS (VERDE)*/
width: 670px;
height: 395px;
rotate: 90deg;
top: 17px;
left: 980px;
position: relative;
filter: brightness(0.9);
}
.imgb2{ /* IMAGEN DE FONDO DE RESULTADOS (VERDE)*/
width: 658px;
height: 405px;
rotate: 90deg;
top: 23px;
left: 5px;
position: relative;
filter: brightness(0.9);
}
.container {
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
min-height: 750px; 
height: 800px auto; 
max-width: 1850px;

margin: 60px auto;
padding: 20px;
background-color: white;
border-radius: 10px;
box-sizing: border-box;
}

.img {
position: relative; 
margin: 20px auto;
width: 757px;
height: 400px;
border: 2px solid white;
box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
}
.card-header {
width: 100%;
height: 40px;
background-color: #d6f5c9; /* Verde claro */
position: absolute;
top: 0;
left: 0;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
}
.card-content {
margin-top: 40px; /* Para que no tape el contenido */
font-weight: bold;
}
.results {
  z-index: 1;
  position: relative; /*encima del fondo */
  top: 30px;
  margin: 20px auto; 
  width: 600px;
  height: 550px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Fredoka', serif;
  font-weight: 400;
  font-size: 25px;
  color: #2c2c2c;
  text-align: center;
}

</style>

