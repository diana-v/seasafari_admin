<template>
  <v-app>
    <v-navigation-drawer app>
      <Navigation></Navigation>
    </v-navigation-drawer>

    <v-app-bar app>
      <AppBar></AppBar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
import AppBar from './components/AppBar';

export default {
  name: 'App',

  components: {
    Navigation,
    AppBar
  },

  data: () => ({
    //
  }),
};
</script>
