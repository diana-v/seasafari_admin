<template>
        <v-app-bar
                absolute
                color="light-blue darken-2"
                elevate-on-scroll
        >
<!--            <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

<!--            <v-toolbar-title>Title</v-toolbar-title>-->
            <v-app-bar-nav-icon
                    class="hidden-md-and-up"
                    onclick="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
        })
    }
</script>
