<script setup>
import { ref, nextTick } from 'vue'
import skillsData from '../assets/skillsData.json'

const skills = skillsData.skills
const selectedSkill = ref(null)

const colorDev = ref('#E3371E')
const colorOpt = ref('#FF7A48')
const colorAdm = ref('#ddb31b')
const colorGer = ref('#138F46')
const colorPro = ref('#0593A2')
const colorEqu = ref('#103778')

const colorDevIn = ref('#ffbbbb')
const colorOptIn = ref('#FEBEB0')
const colorAdmIn = ref('#ebd480')
const colorGerIn = ref('#49DC86')
const colorProIn = ref('#96d4db')
const colorEquIn = ref('#7b8fb3')

const toggleSkill = (skill) => {
  selectedSkill.value = selectedSkill.value === skill ? null : skill
}
</script>

<template>
  <div class="flex flex-col justify-center items-center mb-12 pt-48">
    <h1 class="text-6xl max-sm:text-5xl font-extralight tracking-in-expand">Compétences</h1>
  </div>

  <div class="competencesDiv">
    <div
      class="skillDiv"
      :class="{ animGrand: selectedSkill != 'dev' }"
      @click="toggleSkill('dev')"
    >
      <div :style="{ '--color': colorDev }" class="chevron h-24">
        <h2><span style="font-weight: 700">Réaliser</span> un développement d'application</h2>
      </div>
      <div :style="{ '--color': colorDevIn }" class="chevron" v-if="selectedSkill === 'dev'">
        <p>Je suis capable de réaliser un programme pour résoudre un problème donné.</p>
        <p>Pour cela je maîtrise différents langages :</p>
        <ul>
          <li><span class="font-medium">Programmation logicielle</span> : Java, C et Python</li>
          <li>
            <span class="font-medium">Programmation Web</span> : HTML/CSS, PHP, Javascript, Tailwind
          </li>
          <li><span class="font-medium">Bases de données</span> : SQL, PL/SQL</li>
        </ul>
        <p>
          Je peux aussi utiliser différents types de programmation comme l’itératif, le récursif ou
          encore la programmation orientée objet. Je suis également en mesure de choisir une
          structure de données adaptée, documenter le code et le tester.
        </p>
        <div class="flex flex-row max-sm:flex-col justify-center items-center">
          <p>
            Projet personnel : Jeu de type “clicker” réalisé en Java avec les connaissances acquises
            durant ma première année au BUT informatique.
          </p>
          <img class="h-96" src="../assets/images/EcoClicker.png" />
        </div>
        <p>
          Durant mon stage de 2ème année au BUT, j'ai réalisé un extranet afin que les clients
          puissent créer des demandes d'assistance (ticket) et avoir un suivi de ces demandes. Pour
          ce faire, j'ai dû apprendre le Framework et les langages de l'éditeur, j'ai également
          appris le Typescript. J'ai donc mobilisé plusieurs compétences :
        </p>
        <ul class="list-disc">
          <li>
            le choix d'une structure de données adapatée pour stocker les tickets, les suivis des
            tickets et les documents associés.
          </li>
          <li>
            L'élaboration d'une l'application et son amélioration à la suite d'une phase de recette.
          </li>
          <li>
            Je suis également capable de faire évoluer une application déjà existante, l'adapter aux
            besoins et de la maintenir en conditions opérationnelles.
          </li>
        </ul>
      </div>
      <div :style="{ '--color': colorDev }" class="chevron h-6"></div>
    </div>

    <div
      class="skillDiv"
      :class="{ animGrand: selectedSkill != 'opt' }"
      @click="toggleSkill('opt')"
    >
      <div :style="{ '--color': colorOpt }" class="chevron h-24">
        <h2><span style="font-weight: 700">Optimiser</span> des applications informatiques</h2>
      </div>
      <div :style="{ '--color': colorOptIn }" class="chevron h-auto" v-if="selectedSkill === 'opt'">
        <p>Je suis capable d’analyser un problème, de le découper en plusieurs tâches.</p>
        <p>
          Je peux utiliser des techniques algorithmiques adaptées, anticiper les résultats d’un
          algorithme donné (temps d’exécution, occupation mémoire) et les optimiser.
        </p>
        <p>
          Je suis également en mesure d’analyser un algorithme déjà existant et de comprendre ses
          enjeux et son impact.
        </p>
        <p>
          Je peux utiliser et formaliser des outils mathématiques pour l’informatique telle que les
          graphes.
        </p>
        <div class="flex flex-col justify-center items-center">
          <img class="h-96" src="../assets/images/SaeGraphe.png" />
          <p>
            Application d'aide à la décision réalisé en java durant la première année du BUT
            informatique
          </p>
        </div>
        <p>
          Mon stage m'a également permis d'améliorer ma compréhension de programmes existants et
          l'adaptation de ceux-ci. L'application repose sur un système de "surcharge" ou de
          "spécialisation". L'application par défaut s'appelle le standard et, en plus d'ajout de
          fichier, j'ai spécialisé des fichiers existants pour les adapter aux besoins du projet.
        </p>
      </div>
      <div :style="{ '--color': colorOpt }" class="chevron h-6"></div>
    </div>

    <div
      class="skillDiv"
      :class="{ animGrand: selectedSkill != 'adm' }"
      @click="toggleSkill('adm')"
    >
      <div :style="{ '--color': colorAdm }" class="chevron h-24">
        <h2>
          <span style="font-weight: 700">Administrer</span> des systèmes communicants complexes
        </h2>
      </div>
      <div :style="{ '--color': colorAdmIn }" class="chevron h-auto" v-if="selectedSkill === 'adm'">
        <p>
          Je suis capable d’installer, de configurer, de maintenir en conditions opérationnelles des
          services et des réseaux. Je peux également optimiser le service informatique d’une
          organisation.
        </p>
        <p>
          Je peux identifier les composants d’un système numérique, et configurer un système
          d’exploitation et des outils pour développer. (Windows, Linux, Vmware)
        </p>
        <p>
          La conception d’application communicante et la sécurisation des services et données d’un
          système font également partie de mes compétences. En effet, je connais des techniques de
          cryptage et de hachage pour masquer des données.
        </p>
        <div class="flex flex-row max-sm:flex-col justify-center items-center">
          <img class="h-96" src="../assets/images/SAEIntroSysteme.png" />
          <p>
            Projet de configuration d'une machine virtuelle et installation des outils de
            développement.
          </p>
        </div>
        <p>
          Durant mon stage j’ai également amélioré une infrastructure existante, en effet, il y
          avait déjà quelques choses de commencé, je l'ai donc analysé, amélioré et adapté aux
          besoins du projet. J'ai également amélioré la sécurité en empêchant l'accès aux pages à
          certains types d'utilisateurs.
        </p>
      </div>
      <div :style="{ '--color': colorAdm }" class="chevron h-6"></div>
    </div>

    <div
      class="skillDiv"
      :class="{ animGrand: selectedSkill != 'ger' }"
      @click="toggleSkill('ger')"
    >
      <div :style="{ '--color': colorGer }" class="chevron h-24">
        <h2><span style="font-weight: 700">Gérer</span> des données de l'information</h2>
      </div>
      <div :style="{ '--color': colorGerIn }" class="chevron h-auto" v-if="selectedSkill === 'ger'">
        <p>Je suis capable de gérer et d'exploiter des données.</p>
        <p>Je maîtrise le SQL, le PL/SQL et No SQL.</p>
        <p>
          Je suis en mesure de concevoir une base de données à partir d'un cahier des charges et de
          communiquer avec cette base à travers une application. (Java ODBC, PHP, Symfony)
        </p>
        <p>
          Je peux également assurer la sécurité des données et les organiser pour les présenter
          (Power BI).
        </p>
        <div class="flex flex-col justify-center items-center">
          <img class="h-96" src="../assets/images/Crazymarket.png" />
          <p>Site web de gestion de liste de courses collaboratives réalisé en Symfony</p>
        </div>
        <p>
          En entreprise, j'ai conçu la structure de la base de données en fonction du cachier des
          charges et des attentes du client.
        </p>
      </div>
      <div :style="{ '--color': colorGer }" class="chevron h-6"></div>
    </div>

    <div
      class="skillDiv"
      :class="{ animGrand: selectedSkill != 'pro' }"
      @click="toggleSkill('pro')"
    >
      <div :style="{ '--color': colorPro }" class="chevron h-24">
        <h2><span style="font-weight: 700">Conduire</span> un projet</h2>
      </div>
      <div :style="{ '--color': colorProIn }" class="chevron h-auto" v-if="selectedSkill === 'pro'">
        <p>Je suis capable d’appréhender les besoins du client et des utilisateurs.</p>
        <p>
          Je peux également planifier le projet (Découpage et répartition des tâches) et élaborer
          les processus à mettre en oeuvre.
        </p>
        <p>
          Je suis en mesure de gérer une équipe (suivi et contrôle afin que le projet reste aligné
          avec ses objectifs) et de communiquer efficacement avec les différents acteurs du projet.
        </p>
        <p>
          De plus, je suis capable de mesurer et de gérer les risques liés au projet (identifier les
          risques potentiels et prendre des mesures pour les minimiser).
        </p>
        <p>Enfin, je sais évaluer les performances et mettre en oeuvre le suivi du projet.</p>
        <div class="flex flex-row justify-center items-center">
          <div class="flex flex-col items-center">
            <img class="h-96 m-4" src="../assets/images/SaePoster.png" />
            <p class="text-justify">
              Poster réalisé en équipe, il fallait creer un poster attirant l'attention, rapide à
              lire mais complet et argéable à la lecture.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img class="h-96 m-4" src="../assets/images/SaeKafetKebab.png" />
            <p>Premier site web responsive que j'ai développé.</p>
          </div>
        </div>
        <p>
          Nous avons également développé une application d'aide à la décision en rédigeant le cahier
          des charges et en analysant les risques potentiels. Il fallait également gérer l'équipe et
          suivre l'avancement du projet.
        </p>
      </div>
      <div :style="{ '--color': colorPro }" class="chevron h-6"></div>
    </div>

    <div
      class="skillDiv"
      :class="{ animGrand: selectedSkill != 'equ' }"
      @click="toggleSkill('equ')"
    >
      <div :style="{ '--color': colorEqu }" class="chevron h-24">
        <h2><span style="font-weight: 700">Collaborer</span> dans une équipe informatique</h2>
      </div>
      <div :style="{ '--color': colorEquIn }" class="chevron h-auto" v-if="selectedSkill === 'equ'">
        <p>Je suis capable de manager une équipe et communiquer avec ses membres.</p>
        <p>
          Je sais appliquer différentes méthodes de développement : méthodes en cascade V, W, AGILE
        </p>
        <p>
          Maîtrise des logiciels GIT et Trello pour organiser mon travail et le travail en équipe
        </p>
        <p>
          En situation professionnelle, j'ai pu lancer un nouveau projet, communiquer avec l'équipe
          pour réaliser au mieux ce qui m'était demandé et faire des réunions régulièrement pour
          suivre l'avancée du projet et l'orienter selon les attentes du client (Trello, Teams).
        </p>
        <div class="flex flex-col justify-center items-center">
          <img class="h-96" src="../assets/images/Crazyno.png" />
          <p class="text-center">
            Page d’accueil d’un casino en ligne. Il a été développé en équipe en méthode AGILE
            durant la deuxième année de mon BUT informatique. C'est un des plus gros projets que
            j'ai réalisés, il fallait réfléchir au sujet, le prévoir et conceptualiser l'application
            et sa base de données. Nous devions ensuite collaborer au sein de l'équipe, se répartir
            les différentes tâches et faire face aux difficultés rencontrées.
          </p>
          <a
            class="bg-gradient-to-b from-amber-400 to-amber-200 rounded-full p-4 hover:from-amber-500 hover:to-amber-300"
            href="https://crazyno.games"
            >Accéder au Crazyno</a
          >
        </div>
      </div>
      <div :style="{ '--color': colorEqu }" class="chevron h-6"></div>
    </div>
  </div>
</template>

<style scoped>
.competencesDiv {
  margin: 0 auto;
  margin-bottom: 5em;
  max-width: 960px;
}

.skillDiv {
  margin-bottom: 6px;
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
  background: var(--color, #ebd480);
  transform: skew(0deg, 3deg);
}

.chevron:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: var(--color);
  transform: skew(0deg, -3deg);
}

h2 {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  font-size: 1.5em;
  font-weight: 500;
  top: 55%;
  transform: translateY(-50%);
}

p,
li,
img,
a {
  font-weight: 300;
  position: relative;
  z-index: 1;
  color: black;
}

p {
  text-align: justify;
  padding: 1em;
}

ul {
  padding-left: 5em;
}

img {
  border-radius: 1%;
}

.animGrand {
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05, 1.05);
  }
}
</style>
