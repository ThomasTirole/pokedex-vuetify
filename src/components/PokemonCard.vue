<script setup>
  import { defineProps } from 'vue'
  import { usePokemonStore } from '@/stores/pokemonStore'

  const props = defineProps({
    pokemon: {
      type: Object,
    },
  })
  const pokemonStore = usePokemonStore()

</script>
<template>
  <v-card class="pa-2 transition-swing" elevation="2" hover :to="`/pokemons/${pokemon.id}`">
    <v-img :alt="`${pokemon.name}`" height="200px" :src="`/images/${pokemon.img}`" />
    <v-card-title>{{ pokemon.name }}</v-card-title>
    <v-card-text>
      <span v-for="type in pokemon.type.split(',')" :key="type" class="mr-2">
        <v-chip :color="pokemonStore.getTypeColor(type)">{{ type }}</v-chip>
      </span>
    </v-card-text>
    <v-card-subtitle class="ml-6 mb-4">
      Level: {{ pokemon.level }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        :color="pokemonStore.isFavorite(pokemon) ? 'red' : ''"
        :icon="pokemonStore.isFavorite(pokemon) ? 'mdi-heart' : 'mdi-heart-outline'"
        variant="plain"
        @click.prevent="pokemonStore.toggleFavorite(pokemon)"
      />
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
