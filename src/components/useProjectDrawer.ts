import { readonly, ref, computed } from "vue";
import fastydemo from "@/components/elementosgraficos/fasty-demo.mp4";
import etiquetadorademo from "@/components/elementosgraficos/etiquetadora-demo.mp4";


export type ProjectKey = "fasty" | "etiquetadora";

const isOpen = ref(false);
const activeKey = ref<ProjectKey | null>(null);

const projects = {
  fasty: {
    title: "Fasty",
    why: "Proyecto de la carrera orientado a simular un marketplace / delivery.",
    tech: ["NestJS", "PostgreSQL", "TypeORM", "Vue", "Docker"],
    demoUrl: fastydemo,
    repoUrl: "",
  },
  etiquetadora: {
    title: "Etiquetadora",
    why: "App para generar etiquetas desde Excel y exportar en PDF con formato requerido.",
    tech: ["C#", ".NET", "QuestPDF", "SQL Server"],
    demoUrl: etiquetadorademo,
    repoUrl: "",
  },
} as const;

const activeProject = computed(() => {
  if (!activeKey.value) return null;
  return projects[activeKey.value];
});

function open(key: ProjectKey) {
  activeKey.value = key;
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
  activeKey.value = null;
}

export function useProjectDrawer() {
  return {
    isOpen,
    activeProject, // <- computed
    open,
    close,
  };
}
 