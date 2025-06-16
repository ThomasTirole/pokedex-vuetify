<script setup>
import { defineProps } from 'vue'

defineProps({
  stats: {
    type: Object,
    required:true,
  },
})

const statColors = {
  hp: '#FF5959', // Rouge doux pour la santé.
  attack: '#C03028', // Rouge sombre pour l'attaque.
  defense: '#6890F0', // Bleu clair pour la défense.
  speed: '#F08030', // Orange vif pour la vitesse.
}
</script>

<template>
  <div class="pokemon-stats">
    <v-list-item v-for="(value, key) in stats" :key="key">
      <v-list-item-title>{{ key.toUpperCase()}}: {{value}}</v-list-item-title>
      <v-progress-linear
        :color="statColors[key] || 'grey'"
        height="25"
        :model-value="value"
      >
       <strong>{{ value }}</strong>
      </v-progress-linear>
    </v-list-item>

  </div>
</template>

<style scoped>
/* Styles locaux pour améliorer la présentation */
.pokemon-stats {
  margin-top: 1rem; /* Ajout d'espace au-dessus du conteneur */
}

.v-list-item {
  margin-bottom: 1rem; /* Ajout d'espace entre les statistiques */
}
</style>
