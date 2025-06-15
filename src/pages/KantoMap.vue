<script setup>
const dialog = ref(false);
</script>

<template>
  <v-container class="align-center" max-width="600px">
    <h1 class="mb-6 text-center">Monde Pokémon</h1>
    <!-- Miniature cliquable hors du dialog -->
    <v-img
      src="/images/pokemon-map.png"
      @click="dialog = true"
    />

    <v-dialog v-model="dialog">
      <v-card>
        <v-img
          src="/images/pokemon-map.png"
        />
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Fermer"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>

    </v-dialog>

    <v-card class="my-8">
      <v-card-text>
        <h2>Un univers fascinant à découvrir</h2>
        <p>Le monde Pokémon est un vaste et merveilleux univers peuplé de créatures extraordinaires appelées Pokémon. Cette carte représente les différentes régions que les dresseurs peuvent explorer, chacune offrant ses propres défis, Pokémon uniques et aventures palpitantes.</p>

        <h2>Des régions diversifiées</h2>
        <p>De Kanto à Galar, en passant par Johto, Hoenn, Sinnoh, Unova, Kalos et Alola, chaque région du monde Pokémon possède sa propre identité, sa culture et son écosystème unique. Les paysages varient des montagnes enneigées aux îles tropicales, offrant une diversité incroyable d'habitats pour les différentes espèces de Pokémon.</p>

        <h2>Un monde en constante évolution</h2>
        <p>Le monde Pokémon est en perpétuelle expansion, avec de nouvelles régions, de nouvelles espèces de Pokémon et de nouvelles aventures qui sont régulièrement découvertes. Cette carte n'est qu'un aperçu d'un univers riche et en constante évolution, prêt à être exploré par les dresseurs audacieux.</p>

        <h2>Un appel à l'aventure</h2>
        <p>Que vous soyez un dresseur débutant ou expérimenté, le monde Pokémon vous invite à partir à l'aventure. Capturez de nouveaux Pokémon, affrontez des champions d'arènes, déjouez les plans des équipes malveillantes et devenez peut-être le prochain Maître Pokémon. L'aventure commence ici, sur cette carte, mais où vous mènera-t-elle ?</p>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<style scoped>
h2 {
  margin-top: 1em;
  margin-bottom: .5em;
}
</style>
