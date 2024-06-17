<script setup>
import ProjectCard from '../components/ProjectCard.vue'

import { ref, computed } from 'vue'
import techno from '../assets/techno.json'
import projetPerso from '../assets/projetPerso.json'
import projetEquipe from '../assets/projetEquipe.json'

const technologies = techno.technologies
const projetsPerso = projetPerso.projets
const projetsEquipe = projetEquipe.projets

const currentCategory = ref('framework')

const showCategory = (category) => {
  currentCategory.value = category
}

const filteredItems = computed(() => {
  return technologies.filter((item) => item.category === currentCategory.value)
})

const date = new Date(2004, 3, 12)
const age = Math.abs(new Date(Date.now() - date.getTime()).getUTCFullYear() - 1970)


</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-6xl font-bold tracking-in-expand">Portfolio</h1>
    <p>Vandamme Félix</p>
  </div>

  <div class="swing-in-top-fwd">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5000 320">
      <path fill="#d2f3d6" fill-opacity="1" d="M0,200L5000,288L5000,320L0,320Z"></path>
    </svg>
    <div
      class="grid grid-cols-2 divide-gray-300 px-20 items-start"
      style="background-color: #d2f3d6"
    >
      <div class="flex flex-col justify-center items-center my-10 mr-24">
        <h2 class="mb-10">A propos de moi</h2>
        <p>
          Je m'appelle Félix Vandamme et j'ai {{ age }} ans. Je suis actuellement en 2ème année au
          BUT informatique de l'Université Claude Bernard Lyon 1. Je suis passioné par l'imagination
          de concepts de jeux-vidéos et de nouvelles mécaniques. J'ai commencé à coder au début du
          lycée, mais j'imaginais déjà des concepts de jeux en école primaire. J'ai débuté en
          dessinant sur des cahiers et en faisant jouer mes amis, puis j'ai appris à développer sur
          le jeu vidéo minecraft où j'ai créé des dizaines de mini-jeux. J'ai commencé à les
          développer entièrement quand j'ai appris la POO (Programmation Orienté Objet) et le Java.
          J'ai réalisé plusieurs projet seul et en équipe
          <a class="lienInterne" href="#projet">(voir Projet)</a>.
        </p>
      </div>
      <div class="flex flex-col justify-center items-center my-10 ml-24">
        <h2 class="mb-10">Mes études</h2>
        <p>
          J'ai eu mon Bac général mention Très Bien avec les spécialités Mathématiquess et NSI (et
          Physique Chimie en première). Je suis ensuite entré au BUT informatique de Lyon 1 afin
          d'apprendre à développer des projets plus conséquents. En 2ème année, j'ai choisis le
          parcours Réalisation d'application et j'ai effectué un stage en tant que développeur au
          sein de l'entreprise DIVY. Ce stage m'a permis de consolider les compétences acquises
          durant mes études mais également d'en obtenir de nouvelles
          <RouterLink class="lienInterne" to="/skills">(voir compétences)</RouterLink>.
        </p>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5000 320">
      <path fill="#d2f3d6" fill-opacity="1" d="M0,200L5000,288L5000,0L0,0Z"></path>
    </svg>
  </div>

  <div class="divTechno">
    <h2>Technologies</h2>
    <div class="text-center mt-10">
      <button
        class="buttonTechno"
        :class="{ active: currentCategory === 'langage' }"
        @click="showCategory('langage')"
      >
        <i class="fa-solid fa-code"></i>Langages
      </button>
      <button
        class="buttonTechno"
        :class="{ active: currentCategory === 'framework' }"
        @click="showCategory('framework')"
      >
        <i class="fa-solid fa-crop-simple"></i>Frameworks
      </button>
      <button
        class="buttonTechno"
        :class="{ active: currentCategory === 'database' }"
        @click="showCategory('database')"
      >
        <i class="fa-solid fa-database"></i>Base de données
      </button>
      <button
        class="buttonTechno"
        :class="{ active: currentCategory === 'tool' }"
        @click="showCategory('tool')"
      >
        <i class="fa-solid fa-screwdriver-wrench"></i>Outils
      </button>
    </div>
    <hr class="mb-10" />
    <div class="grid grid-cols-4 gap-5">
      <div v-for="techno in filteredItems" :key="techno.name" class="flex flex-col items-center">
        <img class="h-12 swing-in-top-fwd" :src="techno.image" :alt="techno.name + ' Logo'" />
        <p>{{ techno.name }}</p>
      </div>
    </div>
  </div>

  <div id="projet">
    <h2>Projets</h2>
    <div class="flex flex-row justify-center">
      <div class="divProjet">
        <i class="fa-solid fa-user"></i>
        <h3>Projet personnel aa</h3>
        <div class="grid grid-cols-2 justify-items-center">
          <RouterLink
            v-for="p in projetsPerso"
            :key="p.id"
            :to="{ name: 'project', params: { id: p.id } }"
            ><ProjectCard class="animGrand" :project="p"
          /></RouterLink>
        </div>
      </div>
      <div class="divProjet">
        <i class="fa-solid fa-user-group"></i>
        <h3>Projet en équipe</h3>
        <div class="grid grid-cols-2 justify-items-center">
          <RouterLink
            v-for="p in projetsEquipe"
            :key="p.id"
            :to="{ name: 'project', params: { id: p.id } }"
            ><ProjectCard class="animGrand" :project="p"
          /></RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3">
    <div class="flex justify-center">
      <img class="h-96" src="../assets/images/home/contact.png" />
    </div>
    <div class="flex flex-col justify-center items-center my-10">
      <h2 class="mb-10">Me contacter</h2>
      <ul>
        <li>Mail : felix.vandamme.clemot@gmail.com</li>
        <li>
          LinkedIn :
          <a
            style="color: rgb(41, 108, 209)"
            class="underline"
            href="https://fr.linkedin.com/in/f%C3%A9lix-vandamme-435178251"
            >Félix Vandamme</a
          >
        </li>
        <li>
          GitHub :
          <a style="color: rgb(41, 108, 209)" class="underline" href="https://github.com/Iakozihh"
            >Iakozihh</a
          >
        </li>
      </ul>
    </div>
    <div class="flex justify-center">
      <img class="h-96" src="../assets/images/home/contact.png" />
    </div>
  </div>

  <svg
    id="visual"
    viewBox="0 365 900 236"
    width="900"
    height="236"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
  >
    <path
      d="M0 365L30 370.5C60 376 120 387 180 386.5C240 386 300 374 360 378.5C420 383 480 404 540 408.2C600 412.3 660 399.7 720 393.5C780 387.3 840 387.7 870 387.8L900 388L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
      fill="#1e9656"
    ></path>
    <path
      d="M0 495L30 482.5C60 470 120 445 180 436.3C240 427.7 300 435.3 360 441.7C420 448 480 453 540 457.8C600 462.7 660 467.3 720 472.8C780 478.3 840 484.7 870 487.8L900 491L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
      fill="#006633"
    ></path>
    <path
      d="M0 513L30 508.7C60 504.3 120 495.7 180 497.3C240 499 300 511 360 519.7C420 528.3 480 533.7 540 535.2C600 536.7 660 534.3 720 532C780 529.7 840 527.3 870 526.2L900 525L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
      fill="#014b28"
    ></path>
  </svg>
</template>

<style scoped>
h1::before {
  content: ' ';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 0 0 0 0;
  background: rgb(77, 219, 129);
  z-index: -1;
  animation: scaleXAnimation 3s infinite ease;
}

h1 {
  position: relative;
}

h2 {
  text-align: center;
  font-size: xx-large;
}

h3 {
  text-align: center;
  font-weight: 300;
  font-size: x-large;
}

hr {
  border-color: rgb(221, 221, 221);
}

p {
  text-align: center;
}

.buttonTechno {
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 30px;
  transition:
    background-color 0.3s,
    border-color 0.3s;
}

button:hover {
  background-color: #f7e7ca;
}

button.active {
  color: #4da76b;
  border-color: #4da76b;
}

.buttonProj {
  border: 2px solid;
  border-color: rgb(221, 221, 221);
  border-radius: 30px;
  padding: 1em;
  margin: 1em;
}

i {
  margin-right: 10px;
}

svg {
  width: 100%;
  height: auto;
  display: block;
}

.divTechno {
  margin: 0 auto;
  max-width: 960px;
  min-height: 30rem;
}

.divProjet {
  border: 2px solid;
  border-color: rgb(22 101 52);
  border-radius: 30px;
  background-color: #d2f3d6;
  padding: 3em;
  margin: 3em;
}

.portrait {
  width: 15rem;
}

.paysage {
  height: 13rem;
}

.animGrand {
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05, 1.05);
  }
}
</style>
