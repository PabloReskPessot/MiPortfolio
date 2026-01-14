<script setup lang="ts">
import BarraLateral from "./components/BarraLateral.vue";
import Hero from "./components/Hero.vue";
import ProjectDrawer from "./components/ProjectDrawer.vue";

import { useProjectDrawer } from "@/components/useProjectDrawer";
const drawer = useProjectDrawer();
</script>

<template>
  <div class="layout">
    <aside class="left">
      <div class="leftInner">
        <BarraLateral />
        <Hero />
      </div>
    </aside>

    <main class="right">
      <p class="muted">La página aún está en desarrollo.</p>
      <p>Te dejo dos proyectos para que veas mi trabajo:</p>

      <div class="botonesproyecto">
        <button class="proyecto" type="button" @click="drawer.open('fasty')">Fasty</button>
        <button class="proyecto" type="button" @click="drawer.open('etiquetadora')">Etiquetadora</button>
      </div>
    </main>
  </div>

  <!-- ✅ montalo afuera del layout -->
  <ProjectDrawer />
</template>

<style scoped>
.layout{
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 32px;

  height: 100vh;           /* clave */
}

.left{
  height: calc(100vh - 48px); /* 24px top + 24px bottom */
}

.leftInner{
  position: sticky;
  top: 24px;
}

.right{
  height: calc(100vh - 48px);
  overflow-y: auto;        /* clave: scroll solo a la derecha */
  padding-right: 8px;      /* para que no pegue a scrollbar */
}

.muted{
  opacity: .7;
}

@media (max-width: 900px){
  .layout{
    grid-template-columns: 1fr;
    height: auto;
  }
  .right{
    height: auto;
    overflow: visible;
  }
  .left{
    height: auto;
  }
  .leftInner{
    position: static;
  }
}
button.proyecto{
  background-color: #c1ff72;
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.botonesproyecto{
  display: flex;
  gap: 10px;
  margin-top: 10px;
  padding: auto;
}
</style>