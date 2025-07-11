import { defineStore } from 'pinia'

const typeColors = {
  Électrique: '#FFD700',
  Plante: '#78C850',
  Poison: '#A040A0',
  Feu: '#F08030',
  Eau: '#6890F0',
  Normal: '#A8A878',
  Fée: '#EE99AC',
  Spectre: '#705898',
  Combat: '#C03028',
  Vol: '#A890F0',
  Glace: '#98D8D8',
  Roche: '#B8A038',
  Sol: '#E0C068',
  Psy: '#F85888',
}
const pokemons = [
  {
    name: 'Pikachu',
    type: 'Électrique',
    level: 35,
    img: 'pikachu.png',
    description: "Pikachu stocke de l'électricité dans ses joues. Il peut produire des décharges électriques puissantes.",
    height: 0.4,
    weight: 6.0,
    abilities: ['Statik', 'Paratonnerre'],
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      speed: 90,
    },
  },
  {
    name: 'Bulbizarre',
    type: 'Plante,Poison',
    level: 15,
    img: 'bulbizarre.png',
    description: 'Il y a une graine sur son dos depuis sa naissance. Elle grossit un peu chaque jour.',
    height: 0.7,
    weight: 6.9,
    abilities: ['Engrais'],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
    },
  },
  {
    name: 'Salamèche',
    type: 'Feu',
    level: 20,
    img: 'salameche.png',
    description: "La flamme au bout de sa queue indique l'humeur de ce Pokémon. Elle vacille quand Salamèche est content.",
    height: 0.6,
    weight: 8.5,
    abilities: ['Brasier'],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      speed: 65,
    },
  },
  {
    name: 'Carapuce',
    type: 'Eau',
    level: 10,
    img: 'carapuce.png',
    description: 'Carapuce est une petite tortue bipède de couleur bleue. Il possède une carapace majoritairement brune avec un contour blanc.',
    height: 0.5,
    weight: 9.0,
    abilities: ['Torrent'],
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      speed: 43,
    },
  },
  {
    name: 'Rondoudou',
    type: 'Normal,Fée',
    level: 25,
    img: 'rondoudou.png',
    description: "Quand ses grands yeux s'illuminent, il chante une mystérieuse berceuse qui endort ses ennemis.",
    height: 0.5,
    weight: 5.5,
    abilities: ['Joli Sourire', 'Battant'],
    stats: {
      hp: 115,
      attack: 45,
      defense: 20,
      speed: 20,
    },
  },
  {
    name: 'Ectoplasma',
    type: 'Spectre,Poison',
    level: 45,
    img: 'ectoplasma.png',
    description: "Ectoplasma peut hypnotiser son adversaire en le fixant de ses yeux rouges. Il attaque ensuite en se cachant dans l'ombre de l'ennemi.",
    height: 1.5,
    weight: 40.5,
    abilities: ['Lévitation'],
    stats: {
      hp: 60,
      attack: 65,
      defense: 60,
      speed: 110,
    },
  },
  {
    name: 'Évoli',
    type: 'Normal,Combat',
    level: 22,
    img: 'evoli.png',
    description: 'Évoli possède une structure génétique instable qui se transforme selon son environnement.',
    height: 0.3,
    weight: 6.5,
    abilities: ['Adaptabilité', 'Anticipation'],
    stats: {
      hp: 55,
      attack: 55,
      defense: 50,
      speed: 55,
    },
  },
  {
    name: 'Dracaufeu',
    type: 'Feu,Vol',
    level: 50,
    img: 'dracaufeu.png',
    description: "Dracaufeu parcourt les cieux pour trouver des adversaires à sa mesure. Il crache de puissantes flammes capables de faire fondre n'importe quoi.",
    height: 1.7,
    weight: 90.5,
    abilities: ['Brasier'],
    stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      speed: 100,
    },
  },
  {
    name: 'Florizarre',
    type: 'Plante,Poison',
    level: 55,
    img: 'florizarre.png',
    description: 'Sa plante donne une grosse fleur quand elle absorbe les rayons du soleil. Il est toujours à la recherche des endroits les plus ensoleillés.',
    height: 2.0,
    weight: 100.0,
    abilities: ['Engrais'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      speed: 80,
    },
  },
  {
    name: 'Tortank',
    type: 'Eau',
    level: 52,
    img: 'tortank.png',
    description: "Il écrase ses adversaires de tout son poids pour les faire évanouir. Il rentre dans sa carapace s'il se sent en danger.",
    height: 1.6,
    weight: 85.5,
    abilities: ['Torrent'],
    stats: {
      hp: 79,
      attack: 83,
      defense: 100,
      speed: 78,
    },
  },
  {
    name: 'Mélofée',
    type: 'Fée',
    level: 18,
    img: 'melofee.png',
    description: 'On dit que ceux qui voient danser un groupe de Mélofée sous la pleine lune connaîtront un grand bonheur.',
    height: 0.6,
    weight: 7.5,
    abilities: ['Joli Sourire', 'Garde Magik'],
    stats: {
      hp: 70,
      attack: 45,
      defense: 48,
      speed: 35,
    },
  },
  {
    name: 'Raichu',
    type: 'Électrique',
    level: 40,
    img: 'raichu.png',
    description: 'Sa longue queue agit comme une prise de terre pour le protéger du courant à haute tension généré dans son corps.',
    height: 0.8,
    weight: 30.0,
    abilities: ['Statik', 'Paratonnerre'],
    stats: {
      hp: 60,
      attack: 90,
      defense: 55,
      speed: 110,
    },
  },
  {
    name: 'Magicarpe',
    type: 'Eau',
    level: 5,
    img: 'magicarpe.png',
    description: "Un Pokémon pathétiquement faible. Il peut juste faire des ronds dans l'eau ou s'éclabousser.",
    height: 0.9,
    weight: 10.0,
    abilities: ['Glissade'],
    stats: {
      hp: 20,
      attack: 10,
      defense: 55,
      speed: 80,
    },
  },
  {
    name: 'Lokhlass',
    type: 'Eau,Glace',
    level: 35,
    img: 'lokhlass.png',
    description: "Ce Pokémon d'une grande intelligence comprend le langage humain. Il aime transporter les gens sur son dos.",
    height: 2.5,
    weight: 220.0,
    abilities: ['Absorb Eau', 'Coque Armure'],
    stats: {
      hp: 130,
      attack: 85,
      defense: 80,
      speed: 60,
    },
  },
  {
    name: 'Onix',
    type: 'Roche,Sol',
    level: 30,
    img: 'onix.png',
    description: 'Onix vit généralement sous terre. Il cherche de la nourriture en creusant à plus de 80 km/h.',
    height: 8.8,
    weight: 210.0,
    abilities: ['Tête de Roc', 'Fermeté'],
    stats: {
      hp: 35,
      attack: 45,
      defense: 160,
      speed: 70,
    },
  },
  {
    name: 'Ronflex',
    type: 'Normal',
    level: 45,
    img: 'ronflex.png',
    description: "Son estomac peut digérer n'importe quelle sorte de nourriture, même quand elle est moisie.",
    height: 2.1,
    weight: 460.0,
    abilities: ['Immunité', 'Isograisse'],
    stats: {
      hp: 160,
      attack: 110,
      defense: 65,
      speed: 30,
    },
  },
  {
    name: 'Mewtwo',
    type: 'Psy',
    level: 70,
    img: 'mewtwo.png',
    description: "Mewtwo est un Pokémon créé par manipulation génétique. Cependant, bien que les connaissances scientifiques des humains aient réussi à créer son corps, elles n'ont pas pu doter Mewtwo d'un cœur sensible.",
    height: 2.0,
    weight: 122.0,
    abilities: ['Pression'],
    stats: {
      hp: 106,
      attack: 110,
      defense: 90,
      speed: 130,
    },
  },
]

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    typeColors,
    // Ajout d'un identifiant unique pour chaque Pokémon
    pokemons: pokemons.map((pokemon, index) => ({ ...pokemon, id: index + 1 })),
    types: Object.keys(typeColors).map((name, index) => ({ id: index + 1, name })), // Ajouté
    selectedPokemon: null,
    favorites: [],
  }),
  getters: {
    favoritesCount: state => state.favorites.length,
    getFavorites: state => {
      return state.favorites
        .map(id => state.pokemons.find(p => p.id === id))
        .filter(Boolean)
    },
    getPokemonById: state => id => {
      return state.pokemons.find(pokemon => pokemon.id === id)
    },
    getTypeById: state => id => state.types.find(type => type.id === id),
  },

  actions: {
    selectPokemon (id) {
      this.selectedPokemon = this.pokemons.find(p => p.id === id) || null
    },
    toggleFavorite (pokemon) {
      const index = this.favorites.indexOf(pokemon.id)
      if (index === -1) {
        this.favorites.push(pokemon.id)
      } else {
        this.favorites.splice(index, 1)
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    isFavorite (pokemon) {
      return this.favorites.includes(pokemon.id)
    },
    getTypeColor (type) {
      return this.typeColors[type] || '#A8A878' // Couleur par défaut si non trouvée
    },
    loadFavorites () {
      this.favorites = JSON.parse(localStorage.getItem('favorites')) || [] // Récupère les favoris du localStorage ou un tableau vide.
    },
  },
})
