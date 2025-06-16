<script setup>
  import { useRoute } from 'vue-router'
  import { usePokemonStore } from '@/stores/pokemonStore'
  import PokemonTypesChips from '@/components/PokemonTypesChips.vue'
  import PokemonStats from '@/components/PokemonStats.vue'

  const route = useRoute()
  const pokemonStore = usePokemonStore()
  const pokemonId = Number(route.params.id) // variable intermédiaire
  const pokemon = pokemonStore.getPokemonById(pokemonId)
</script>

<template>
  <v-container v-if="pokemon">
    <v-row class="align-start">
      <v-col cols="12" md="4">
        <v-img
          :alt="pokemon.name"
          class="rounded"
          contain
          heigth="300"
          :src="`/images/${pokemon.img}`"
        />
      </v-col>

      <v-col cols="12" md="8">
        <h1 class="text-h2 mb-2">{{ pokemon.name }}</h1>
        <p class="text-subtitle-1 mb-2">Niveau : {{ pokemon.level }}</p>

        <p class="mt-6 text-body-1"> {{ pokemon.description }}</p>


        <pokemon-types-chips :pokemon="pokemon" class="mt-4" />

        <pokemon-stats :stats="pokemon.stats" class="mt-6" />

        <v-btn
          to="/"
          prepend-icon="mdi-arrow-left"
          class="mt-8"
          color="primary"
          variant="tonal"
          text="Retour"
        />
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-alert type="error" class="text-center">
      Pokémon introuvable.
    </v-alert>
  </v-container>
</template>

<style scoped>

</style>
