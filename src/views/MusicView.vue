<script setup></script>

<template>
  <div class="flex flex-col justify-center items-center pt-36">
    <h1 class="text-6xl font-extralight tracking-in-expand">Musique</h1>
  </div>

  <div class="grid grid-cols-4 max-sm:grid-cols-1 m-20">
    <div class="max-sm:hidden">
      <div class="image-container">
        <img
          class="photo w-80 mb-20 swing-in-top-fwd"
          src="../assets/images/musique/Fefan2024Denise.jpeg"
        />
        <img class="punaise" src="../assets/images/punaise-rouge.png" />
      </div>
    </div>
    <div class="flex flex-col items-center mt-10 col-span-2">
      <p class="max-sm:text-xs">
        Je fais du saxophone depuis mes 7 ans. Aujourd'hui, je fais partie de deux groupes de
        musiques : Denise and the Aliens et le Villeur'Brass Band et nous faisons régulièrement des
        concerts dans des bars ou à différents évenements comme la soirée d'intégration de Lyon 1 au
        transbordeur ou le FEFAN à Villeurbanne. Nous reprenons des morceaux existants et faisons
        les arrangements nous mêmes. Nous avons également fait des compositions originales.
      </p>
      <img class="w-72 m-10" src="../assets/images/musique/saxophone.png" />
      <p class="max-sm:text-xs">
        Cette pratique m'a permis d'apprendre à travailler en groupe et à écouter les autres. J'ai
        également acquis des capacités d'improvisations. Mes deux groupes font partie d'une
        association nommé AMUSE.
      </p>
    </div>

    <div class="max-sm:hidden">
      <div class="image-container mt-56 ">
        <img
          class="photo swing-in-top-fwd w-80 h-auto"
          src="../assets/images/musique/Transbo2023VBB.jpg"
        />
        <img class="punaise" src="../assets/images/punaise-bleue.png" />
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center">
    <img class="h-96 max-sm:h-36 mb-5 swing-in-top-fwd" src="../assets/images/musique/Zac2023VBB.jpg" />
  </div>
</template>

<style scoped>
p {
  text-align: justify;
  text-indent: 60px;
}
img {
  border-radius: 1rem;
}

.image-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.photo {
  border: 2px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.punaise {
  position: absolute;
  top: -20px; /* Ajustez cette valeur selon vos besoins */
  left: 50%;
  transform: translateX(-50%);
  width: 50px; /* Ajustez la taille de la punaise */
  height: auto;
}

.carousel-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.carousel-photo {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}
</style>
