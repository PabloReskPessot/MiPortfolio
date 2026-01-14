<script setup lang="ts">
import { computed } from "vue";
import { useProjectDrawer } from "@/components/useProjectDrawer";

const drawer = useProjectDrawer();
const project = computed(() => drawer.activeProject.value);

function onOverlayClick(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains("overlay")) drawer.close();
}
</script>

<template>
  <div v-if="drawer.isOpen.value" class="overlay" @click="onOverlayClick">
    <aside class="drawer">
      <header class="drawerHeader">
        <h3 class="title">{{ project?.title }}</h3>
        <button class="x" type="button" @click="drawer.close()">✕</button>
      </header>

      <div class="drawerBody">
        <p class="why">{{ project?.why }}</p>

        <h4 class="sectionTitle">Tecnologías</h4>
        <div class="chips">
          <span v-for="t in project?.tech" :key="t" class="chip">{{ t }}</span>
        </div>

        <h4 class="sectionTitle">Demo</h4>
        <div class="demoBox">
          <video v-if="project?.demoUrl" class="video" controls preload="metadata">
          <source :src="project.demoUrl" type="video/mp4" />
          </video>
          <p v-else class="muted">Demo próximamente.</p>
        </div>

        <div class="actions">
          <a
            v-if="project?.repoUrl"
            class="btn"
            :href="project.repoUrl"
            target="_blank"
            rel="noreferrer"
          >
            Ver código
          </a>
          <button class="btn primary" type="button" @click="drawer.close()">Cerrar</button>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
/* mismo CSS que te pasé antes */
.overlay{ position:fixed; inset:0; background:rgba(0,0,0,.5); display:flex; justify-content:flex-end; z-index:999; }
.drawer{ width:min(440px,92vw); height:100vh; background:#fff; border-left:1px solid rgba(0,0,0,.08); display:flex; flex-direction:column;color: #111; }
.drawerHeader{ display:flex; align-items:center; justify-content:space-between; padding:16px; border-bottom:1px solid rgba(0,0,0,.08); }
.title{ margin:0; font-size:1.2rem; color: #111;
  font-weight: 800;}
.x{ border:none; background:transparent; font-size:1.2rem; cursor:pointer; }
.drawerBody{ padding:16px; overflow-y:auto; }
.sectionTitle{ margin:18px 0 10px; font-size:.95rem; color: #111;
  opacity: 0.8;}
.chips{ display:flex; flex-wrap:wrap; gap:8px; }
.chip{ padding:6px 10px; border-radius:999px; background:rgba(0,0,0,.06); font-weight:600; font-size:.85rem;color: #111;
  background: rgba(0,0,0,.06);
  opacity: 1; }
.demoBox{ border:1px solid rgba(0,0,0,.1); border-radius:12px; padding:12px; }
.actions{ display:flex; gap:10px; margin-top:16px; }
.btn{ display:inline-flex; align-items:center; justify-content:center; height:38px; padding:0 14px; border-radius:10px; border:1px solid rgba(0,0,0,.12); text-decoration:none; color:#111; font-weight:600; cursor:pointer; background:transparent; }
.btn.primary{ background:#1fbf6a; border-color:transparent; color:white; }
.muted{ color: #555;
  opacity: 1;}
.why{ line-height:1.5; margin:0;color: #333;
  opacity: 1; }
.video{
  width: 100%;
  border-radius: 12px;
}
</style>