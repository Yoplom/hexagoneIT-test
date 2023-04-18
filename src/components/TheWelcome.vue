<script>
import axios from 'axios'
import Loader from './Loader.vue'
import json from '../excuses.json'
export default {
  data() {
    return {
      excusesArray: [],
      excusesArrayChecked: [],
      isLoading: false,
    };
  },
  components: {
    Loader,
  },
  // appeler un message avant que le composant soit monté
  beforeMount() {
    // si le code dans l'url existe, lancer la fonction checkUrl sinon getRandomData
    if (this.$route.params.http_code) {
      this.checkUrl();
    } else {
      this.getRandomData();
    }
  },
  // vider le 2ème tableau après que le composant ait été monté
  mounted() {
    const excusesArrayCheckedParsed = JSON.parse(JSON.stringify(this.excusesArrayChecked));
    excusesArrayCheckedParsed.pop();
    this.addClass();
  },
  computed: {
    getRandomItem() {
      // Générer aléatoirement un index parmi la liste des excuses
      const randomIndex = Math.floor(Math.random() * this.excusesArray.length);
      // vérifie si l'index existe dans la liste des excuses
      if (this.excusesArray[randomIndex]) {
        // transforme le proxy array en array du tableau d'origine 
        const excusesArrayParsed = JSON.parse(JSON.stringify(this.excusesArray));
        // transforme le proxy array en array du tableau copié
        const excusesArrayCheckedParsed = JSON.parse(JSON.stringify(this.excusesArrayChecked));
        // si l'index généré aléatoirement n'est pas dans le 2ème tableau
        if (excusesArrayCheckedParsed.includes(randomIndex) === false) {
          // copier cet index dans le 2ème tableau
          this.excusesArrayChecked.push(randomIndex);
          // renvoyer le message correspondant à cet index 
          return this.excusesArray[randomIndex].message;
          // sinon si l'index généré aléatoirement est dans le 2ème tableau
        } else {
          // soit le tableau d'origine s'est complétement copié dans le 2ème tableau
          if (excusesArrayParsed.length === excusesArrayCheckedParsed.length) {
            // vider le 2ème tableau pour le reset
            this.excusesArrayChecked.splice(0);
            // regénérer l'index aléatoirement
            this.getRandomData();
          // soit le tableau d'origine n'a pas fini de se copier dans le 2ème tableau
          } else {
            // regénérer l'index aléatoirement
            this.getRandomData();
          }
        }
      }
    },
    getHttpMessage() {
      // récupération du code ajouté dans l'url (ex: http://localhost:5173/code=701)
      const http_in_url = this.$route.params.http_code;
      // pour chaque excuse de la liste,
      let i;
      for (i = 0; i < json.length; i++) {
        const http_code_json = json[i].http_code;
        // si le http_code existe dans l'url, comparer les http_code de la liste des excuses avec le code ajouté dans l'url
        if (http_in_url) {
          if (http_in_url == http_code_json) {
            // s'il y a correspondance, renvoyer le message concerné
            return json[i].message;
          } else {
            return "Désolé, le code HTTP " + http_in_url + " ne correspond à aucun message dans la BDD."
          }
        } else {
          ""
        }
      };
    },
  },
  methods: {    
    getRandomData() {
      axios.get("../src/excuses.json").then(response => {
        // redirection vers la homepage dans le cas où un http_code aurait été ajouté dans l'URL 
        // et ainsi éviter d'avoir le message généré depuis le http_code de l'url
        // et le message généré aléatoirement avec le bouton
        this.$router.push({ path: '/'})
        this.excusesArray = response.data;
      }).catch(err=>{
        console.log(err)
      });
    },
    toggleLoader() {
      function delay(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false; 
      }, delay(1000, 5000));
    },
    addClass() {
      setTimeout(() => {
        this.$refs.animation.classList.add('animate')
      }, 2000);
    },
    checkUrl() {
      const http_in_url = this.$route.params.http_code;
    },
  }
};
</script>
<template>
  <div v-if="isLoading" class="loader-wrapper">
    <Loader />
  </div>
  <div v-else>
    <p class="excuse">{{ getRandomItem }}</p>
    <p class="excuse">{{ getHttpMessage }}</p>
  </div>
  <button ref="animation" v-on:click="getRandomData(), toggleLoader()">Bouton</button>
</template>
<style>

</style>