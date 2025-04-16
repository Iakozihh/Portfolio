<script setup>
import { ref } from 'vue'
const props = defineProps(['id'])

import projetsPerso from '../assets/projetPerso.json'
import projetEquipe from '../assets/projetEquipe.json'
import technoList from '../assets/techno.json'


const projet = ref()
if (props.id < 100) {
  projet.value = projetsPerso.projets[props.id]
} else {
  projet.value = projetEquipe.projets[props.id - 100]
}


function getImageUrl(image){
  return new URL(`../assets/images/${image}`,import.meta.url).href
}

const srcImageIcon = ref(getImageUrl(projet.value.name+'Icon.png'))
const srcImage = ref(getImageUrl(projet.value.name+'.png'))
const srcVideo = ref(getImageUrl(projet.value.name+'Clip.mp4'))
const srcBonus = ref(getImageUrl(projet.value.name+'BandeDefilante.gif'))

const technoUsed = projet.value.technoUsed || []

// Fonction de mapping des technos avec les icônes
function getTechnoDisplay(item) {
  const match = technoList.technologies.find(t => t.name.toLowerCase() === item.toLowerCase())
  return match ? { image: match.image, name: item, isIcon: true } : { name: item, isIcon: false }
}

const mappedTechnos = technoUsed.flatMap(tech => {
  if (tech.includes(',')) {
    return tech.split(',').map(t => t.trim()).map(getTechnoDisplay)
  }
  return getTechnoDisplay(tech)
})

</script>

<template>
  <div class="divProj flex flex-col">
    <div class="flex flex-col justify-center items-center pt-36 space-y-4">
      <img :src="srcImageIcon" class="photo h-24" />
      <p class="text-4xl font-bold tracking-in-expand">{{ projet.name }}</p>
      <p class="text-lg text-gray-600 italic">{{ projet.accroche }}</p>
    </div>

    <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-1 m-4 mt-16">
      <img
        :src="srcImage"
        :class="{
          portrait: projet.imageFormat == 'portrait',
          paysage: projet.imageFormat == 'paysage'
        }"
        class="photo swing-in-top-fwd object-contain"
      />
      <div class="flex flex-col justify-center items-center">
        <p class="text-justify mb-4 text-md">{{ projet.description }}</p>
      </div>

      <div class="flex flex-col justify-center items-center">
        <video
          :class="{
            portrait: projet.imageFormat == 'portrait',
            paysage: projet.imageFormat == 'paysage'
          }"
          class="photo"
          loop
          autoplay
          muted
          :src="srcVideo"
        ></video>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-4 my-6 mx-96">
      <h3 class="text-xl font-semibold">Détails techniques :</h3>
      <div class="flex flex-wrap gap-4">
        <template v-for="(tech, index) in mappedTechnos" :key="index">
          <div v-if="tech.isIcon" class="flex items-center gap-2">
            <img :src="tech.image" :alt="tech.name" class="h-8" />
            <span class="text-sm">{{ tech.name }}</span>
          </div>
          <div v-else class="text-sm italic bg-gray-100 px-3 py-1 rounded shadow-sm">
            {{ tech.name }}
          </div>
        </template>
      </div>
    </div>

  <img
    v-if="projet.name == 'Crazyroad'"
    class="w-full rounded-none mt-10"
    :src="srcBonus"
  />
</template>

<style scoped>
.photo {
  border-radius: 20px;
}

.divProj {
  margin: 0 auto;
  max-width: 1750px;
}

.divProjet {
  border: 2px solid;
  border-color: rgb(221, 221, 221);
  border-radius: 30px;
  padding: 3em;
  margin: 3em;
}

.portrait {
  max-height: 30rem;
  width: auto;
}

.paysage {
  max-width: 30rem;
  height: auto;
}


</style>
