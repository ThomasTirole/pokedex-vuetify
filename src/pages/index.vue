<template>
  <v-container>
    <h1 class="mb-6 text-center">Pokédex</h1>

    <v-row>
      <v-col>
        <v-text-field
          v-model="searchQuery"
          clearable
          label="Rechercher un Pokémon"
          prepend-icon="mdi-magnify"
        />
      </v-col>
      <v-col cols="2">
        <v-select
          v-model="sortDirection"
          :items="sortOptions"
          item-title="text"
          item-value="value"
          label="Trier par"
        />
      </v-col>
    </v-row>


    <!-- V-SELECT A FAIRE POUR TRI ASC/DESC -->


    <v-alert v-if="filteredPokemons.length === 0" type="warning" class="text-center mt-4">
      Aucun Pokémon ne correspond à votre recherche.
    </v-alert>
    <v-row class="mb-6">
      <v-col
        v-for="pokemon in filteredPokemons"
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
  </v-container>
</template>

<script setup>
  import { usePokemonStore } from '@/stores/pokemonStore'
  // Import du composant PokemonCard
  import PokemonCard from '@/components/PokemonCard.vue'

  // On récupère les données du store Pokemon
  const pokemonStore = usePokemonStore()

  const searchQuery = ref('')
  const sortDirection = ref('asc')
  const sortOptions = [
    { text: 'Nom (A-Z)', value: 'asc' },
    { text: 'Nom (Z-A)', value: 'desc' }
  ]

  const sortedPokemons = computed(() => {
    return [...pokemonStore.pokemons].sort((a, b) =>
      sortDirection.value === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
  })

  // Filtrer les Pokémon en fonction de la requête de recherche
  const filteredPokemons = computed(() => {
    const query = searchQuery.value.toLowerCase().trim()
    return sortedPokemons.value.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query)
    )
  })
</script>

<style scoped>
:deep(.mdi-heart) {
  animation:heartbeat 1s ease-in-out;
}
</style>
