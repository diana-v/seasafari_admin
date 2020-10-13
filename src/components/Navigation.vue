<template>
  <v-card
          height="100%"
          width="256"
          class="mx-auto"
  >
    <v-navigation-drawer
          absolute
          left
          class="blue lighten-5 px-3 py-3"
          v-model="drawer"
          :permanent="$vuetify.breakpoint.mdAndUp"
  >
      <v-list-item color="light-blue darken-4">
        <v-list-item-content class="title-content">
          <v-list-item-title class="title">
            Sea<b>Safari</b>
          </v-list-item-title>
<!--          <v-list-item-subtitle>-->
<!--            subtext-->
<!--          </v-list-item-subtitle>-->
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
              dense
              nav
      >
        <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    name: 'Navigation',

    data: () => ({
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', path:'/dashboard' },
          { title: 'Reservation Form', icon: 'mdi-file', path:'/reservation' },
          { title: 'Calendar', icon: 'mdi-calendar', path:'/calendar'},
          { title: 'Mailbox', icon: 'mdi-email', path:'/mailbox' },
        ],
        // right: null,
      drawer: null
    }),
  }
</script>

<style>
  .title-content {
    text-align: center;
  }
</style>