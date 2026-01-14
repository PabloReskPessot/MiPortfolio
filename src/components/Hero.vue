<script setup lang="ts">
import { useProjectDrawer } from "@/components/useProjectDrawer";
const drawer = useProjectDrawer();
</script>

<template>
  <section class="hero">
    <div class="heroHeader">
      <img class="avatar" src="/src/components/elementosgraficos/FotoPerfil.jpeg" alt="Foto de perfil">
      <h1 class="name">Pablo Resk Pessot</h1>
    </div>

    <div class="heroBody">
      <h2 class="role">Desarrollador Backend/Full Stack en formación</h2>
      <div class="divider"></div>

      <p class="bio">
        Actualmente estoy finalizando la Tecnicatura en Programación (Proyecto final en curso)
        por lo que busco incorporarme a un equipo donde aportar capacidad técnica, análisis y mejora continua.
      </p>

      <div class="ctaRow">
        <a class="btn primary" href="#" target="_blank" rel="noreferrer">Descargar CV</a>
        <a class="btn" href="https://github.com/PabloReskPessot" target="_blank" rel="noreferrer">GitHub</a>

        <p class="bio">
          el portfolio está en desarrollo, mientras tanto te dejo una muestra de los proyectos que pueden ser mas utiles:
        </p>
        <button class="btn" type="button" @click="drawer.open('fasty')">Fasty</button>
        <button class="btn" type="button" @click="drawer.open('etiquetadora')">Etiquetadora</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero{
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

/* header */
.heroHeader{
  background: linear-gradient(to right, #89d957, #c9e265);
  padding: 18px 16px;
  display: flex;
  gap: 14px;
  align-items: center;
}

.avatar{
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(0,0,0,.35);
}

.name{
  margin: 0;
  font-size: 2rem;
  line-height: 1.1;
  color: #111;
}

/* body */
.heroBody{
  flex: 1;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  
  gap: 14px;
}

.role{
  margin: 0;
  font-size: 1.05rem;
  color: #111;
}

.divider{
  height: 4px;
  width: 100%;
  background: rgba(0, 0, 0, 0.222);
}

.bio{
  margin: 0;
  line-height: 1.55;
  color: rgba(0,0,0,.75);
}

.ctaRow{
  display: flex;
  flex-wrap: wrap;     
  gap: 10px;
  margin-top: 6px;
}

.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,.12);
  text-decoration: none;
  color: #111;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  background: transparent;
}

.btn.primary{
  background: #1fbf6a;
  border-color: transparent;
  color: white;
  white-space: nowrap;
}

@media (max-width: 420px){
  .btn{ width: 100%; }
}
</style>