<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
              v-for="n in 3"
              :key="n"
              cols="12"
              sm="4"
      >
        <v-card
                class="pa-2"
                outlined
                tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Dashboard',
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }),
  }
</script>
