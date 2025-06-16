<template>
  <v-app>
    <menu-principal />
    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <div class="px-4 text-center w-100">
        2024 - Pokedex
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import MenuPrincipal from '@/components/AppHeader.vue'
import {usePokemonStore} from '@/stores/pokemonStore'
import {onMounted} from 'vue'

const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.loadFavorites()
})
</script>
