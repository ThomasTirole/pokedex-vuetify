<template>
  <v-container>
    <h1 class="mb-6 text-center">Pokédex</h1>

    <v-text-field
      clearable
      label="Rechercher un Pokémon"
      prepend-icon="mdi-magnify"
      v-model="searchQuery"
    />
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
        <v-card>
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
              color="red"
              :icon="pokemonStore.isFavorite(pokemon) ? 'mdi-heart' : 'mdi-heart-outline'"
              @click="pokemonStore.toggleFavorite(pokemon)"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { usePokemonStore } from '@/stores/pokemonStore'

  // On récupère les données du store Pokemon
  const pokemonStore = usePokemonStore()

  const searchQuery = ref('')

  // Filtrer les Pokémon en fonction de la requête de recherche
  const filteredPokemons = computed(() => {
    const query = searchQuery.value.toLowerCase().trim()
    return pokemonStore.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query)
    )
  })
</script>
