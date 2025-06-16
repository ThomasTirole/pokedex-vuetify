<script setup>

import { computed } from 'vue'

import { usePokemonStore } from '@/stores/pokemonStore'
// Import du composant PokemonCard
import PokemonCard from '@/components/PokemonCard.vue'

// On récupère les données du store Pokemon
const pokemonStore = usePokemonStore()
const favoris = computed(() => pokemonStore.getFavorites.length)
</script>

<template>
  <v-container>
    <h1 class="mb-6 text-center">Mes Pokémons Favoris
      <span v-if="favoris > 0">({{ favoris }})</span></h1>
    <v-row v-if="favoris > 0" class="mb-6">
      <v-col
        v-for="pokemon in pokemonStore.getFavorites"
        :key="pokemon.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xl="2"
        xs="12"
      >
        <pokemon-card :pokemon="pokemon" />
      </v-col>
    </v-row>

    <v-alert
      v-else
      class="text-center mt-4"
      type="info">
      Vous n'avez pas encore de Pokémon favoris.<br>
      <v-btn to="/">Retourner à la liste</v-btn>
    </v-alert>
  </v-container>
</template>

<style scoped>

</style>
