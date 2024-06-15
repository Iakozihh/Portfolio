<script setup>
import { ref, nextTick } from 'vue'

const isExpanded = ref(false)
const expandable = ref(null)

function toggleExpand() {
  isExpanded.value = !isExpanded.value
  if (isExpanded.value) {
    nextTick(() => {
      expandable.value.style.maxHeight = expandable.value.scrollHeight + 'px'
    })
  } else {
    expandable.value.style.maxHeight = '0'
  }
}
</script>

<template>
  <div>
    <div @click="toggleExpand" class="chevron h-24">
      <h2>Réaliser un développement d'application</h2>
    </div>
    <div ref="expandable" :class="{ expanded: isExpanded }" class="expandable">
      <p>Je suis capable de réaliser un programme pour résoudre un problème donné.</p>
      <p>Pour cela je maitrise différents langages :</p>
      <ul>
        <li>Programmation logicielle : Java, C et Python</li>
        <li>Programmation Web : HTML/CSS, PHP, Javascript, Tailwind</li>
        <li>Bases de données : SQL, PL/SQL</li>
      </ul>
      <p>
        Je peux aussi utiliser différents types de programmation comme l’itératif, le récursif ou
        encore la programmation orientée objet. Je suis également en mesure de choisir une structure
        de données adaptée, documenter le code et le tester.
      </p>
      <div class="flex flex-row justify-content items-center">
        <p>
          Projet personnel : Jeu de type “clicker” réalisé en Java avec les connaissances acquises
          durant ma première année au BUT informatique.
        </p>
        <img class="h-96" src="../assets/images/EcoClicker.png" />
      </div>
    </div>
    <div class="chevron h-6"></div>
  </div>
</template>

<style scoped>
@keyframes scaleXAnimation {
  0% {
    transform: scaleX(0);
    transform-origin: bottom left;
  }
  50% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
}

.expandable {
  width: 100%;
  max-height: 0;
  overflow: hidden;
  background: aqua;
  transition: max-height 0.5s ease-out;
}

.expandable.expanded {
  max-height: 1000px; /* This value will be overwritten in JavaScript */
}

.chevron {
  position: relative;
  padding: 12px;
  width: 100%;
}

.chevron:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: aqua;
  transform: skew(0deg, 3deg);
}

.chevron:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: aqua;
  transform: skew(0deg, -3deg);
}

p,
li,
img {
  font-weight: 300;
  position: relative;
  z-index: 1;
  color: black;
}
</style>
