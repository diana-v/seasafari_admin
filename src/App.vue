<template>
    <v-app>
        <v-navigation-drawer
                app
                left
                class="blue-grey lighten-4 px-3 py-3"
                v-model="drawer"
                :permanent="$vuetify.breakpoint.mdAndUp"
                height="100%"
        >
            <v-list-item color="light-blue darken-4">
                <v-list-item-content class="title-content">
                    <v-list-item-title class="title">
                        Sea<b>Safari</b> Admin
                    </v-list-item-title>
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

        <v-app-bar app
                   absolute
                   right
                   color="blue-grey darken-2"
                   elevate-on-scroll
                   dark
        >
            <v-app-bar-nav-icon
                    class="hidden-md-and-up"
                    v-on:click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer></v-spacer>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon>

                        <v-badge
                                color="red"
                                content="6"
                                overlap
                        >
                            <v-icon v-bind="attrs"
                                    v-on="on"
                            >mdi-view-list
                            </v-icon>
                        </v-badge>
                    </v-btn>
                </template>
                <span>Reservations</span>
            </v-tooltip>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                </template>
                <span>Logout</span>
            </v-tooltip>
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
    export default {
        name: 'App',

        data: () => ({
            drawer: null,
            items: [
                {title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard'},
                {title: 'Reservation Form', icon: 'mdi-file', path: '/reservation'},
                {title: 'Calendar', icon: 'mdi-calendar', path: '/calendar'},
                {title: 'Upcoming Reservations', icon: 'mdi-view-list', path: '/reservation-list'},
            ],
        })
    };
</script>

<style>
    .title-content {
        text-align: center;
    }

    .badge {
        position: absolute;
        top: -8px;
        right: -0.5px;
        padding: 2px 5px;
        border-radius: 50%;
        background: red;
        color: white;
    }
</style>
