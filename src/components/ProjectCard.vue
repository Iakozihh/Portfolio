<script setup>
import {ref} from 'vue'
const props = defineProps(['project'])

function getImageUrl(image){
  return new URL(`../assets/images/${image}.png`,import.meta.url).href
}

const srcImage = ref(getImageUrl(props.project.name+'Icon'))
</script>

<template>
  <div
    class="buttonProj block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
  >
    <div class="flex flex-row max-sm:flex-col items-center">
      <img
        :src="srcImage"
        class="h-12 mr-4 max-sm:mr-0 rounded"
      />
      <h5 class="mb-2 text-2xl max-sm:text-lg font-bold tracking-tight text-gray-900">
        {{ props.project.name }}
      </h5>
    </div>
    <p class="font-normal max-sm:text-xs text-gray-700 text-justify">
      {{ props.project.accroche }}
    </p>
  </div>
</template>

<style scoped>
.buttonProj {
  border: 2px solid;
  box-shadow: 2px 2px 5px rgb(146, 146, 146);
  border-color: rgb(221, 221, 221);
  border-radius: 30px;
  padding: 1em;
  margin: 1em;
}

.buttonProj:hover {
  background-color: #e2e2e2;
}
</style>
