<script setup>
import { ref } from 'vue'
const props = defineProps(['id'])

import projetsPerso from '../assets/projetPerso.json'
import projetEquipe from '../assets/projetEquipe.json'

const projet = ref()
if (props.id < 100) {
  projet.value = projetsPerso.projets[props.id]
} else {
  projet.value = projetEquipe.projets[props.id - 100]
}
</script>

<template>
  <div class="divProj flex flex-col">
    <div class="flex flex-row justify-center items-center">
      <img :src="'../assets/images/' + projet.name + 'Icon.png'" class="photo h-24 mr-4" />
      <p class="text-3xl tracking-in-expand">{{ projet.name }}</p>
    </div>
    <div class="flex flex-row m-4">
      <img
        :src="'../assets/images/' + projet.name + '.png'"
        :class="{
          portrait: projet.imageFormat == 'portrait',
          paysage: projet.imageFormat == 'paysage'
        }"
        class="photo swing-in-top-fwd"
      />
      <div class="flex flex-col justify-center items-center m-4">
        <p class="text-justify mb-4">{{ projet.description }}</p>
        <video
          class="w-60"
          loop
          autoplay
          muted
          :src="'../assets/images/' + projet.name + 'Clip.mp4'"
        ></video>
      </div>
    </div>
    <p class="text-justify m-4">Détails : {{ projet.technoUsed }}</p>
  </div>
  <img
    v-if="projet.name == 'Crazyroad'"
    class="w-full rounded-none mt-10"
    :src="'../assets/images/' + projet.name + 'BandeDefilante.gif'"
  />
</template>

<style scoped>
.photo {
  border-radius: 20px;
}

.divProj {
  margin: 0 auto;
  max-width: 1250px;
}

.divProjet {
  border: 2px solid;
  border-color: rgb(221, 221, 221);
  border-radius: 30px;
  padding: 3em;
  margin: 3em;
}

.portrait {
  height: 30rem;
}

.paysage {
  width: 35rem;
}
</style>
