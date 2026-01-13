<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BarraLateral from './components/BarraLateral.vue';
import Hero from './components/Hero.vue';

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

      <!-- Acá van tus cards -->
      <!-- <Projects /> -->
    </main>
  </div>
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
</style>