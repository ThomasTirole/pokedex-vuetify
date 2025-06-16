<script setup>
  import { computed, defineProps } from 'vue'
  import { usePokemonStore } from '@/stores/pokemonStore'
  const props = defineProps({
    pokemon: {
      type: Object,
      required: true,
    },
  })

  const pokemonStore = usePokemonStore()

  const pokemonTypes = computed(() =>
    props.pokemon.type
      .split(',')
      .map(t => t.trim())
      .map(typeName => pokemonStore.types.find(type => type.name === typeName))
  )
</script>

<template>
  <div>
    <v-chip
      v-for="type in pokemonTypes"
      :key="type.id"
      class="ma-1"
      :color="pokemonStore.getTypeColor(type?.name || type)"
      text-color="white"
    >
      {{ type?.name || type || 'Inconnu' }}
    </v-chip>
  </div>
</template>

<style scoped>

</style>
