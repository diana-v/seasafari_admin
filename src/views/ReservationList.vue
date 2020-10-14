<template>
    <v-card>
        <v-card-title>
            Upcoming reservations
        </v-card-title>
        <v-card-subtitle>
            View upcoming reservations for SeaSafari trips. Unread reservations are highlighted.
        </v-card-subtitle>
        <v-card-text>
            <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-text>
        <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                :items-per-page="5"
        ></v-data-table>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                search: '',
                headers: [
                    {
                        text: 'Name',
                        align: 'start',
                        value: 'name',
                    },
                    {text: 'Email', value: 'email'},
                    {text: 'Phone', value: 'phone'},
                    {text: 'People', value: 'people'},
                    {text: 'Trip', value: 'trip'},
                    {text: 'Date', value: 'date'},
                    {text: 'Time', value: 'time'},
                ],
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        email: 159,
                        phone: 6.0,
                        people: 24,
                        trip: 4.0,
                        date: '1%',
                        time: '12:30',
                    },
                    {
                        name: 'Ice cream sandwich',
                        email: 237,
                        phone: 9.0,
                        people: 37,
                        trip: 4.3,
                        date: '1%',
                        time: '12:30',
                    },
                    {
                        name: 'Eclair',
                        email: 262,
                        phone: 16.0,
                        people: 23,
                        trip: 6.0,
                        date: '7%',
                        time: '12:30',
                    },
                    {
                        name: 'Cupcake',
                        email: 305,
                        phone: 3.7,
                        people: 67,
                        trip: 4.3,
                        date: '8%',
                        time: '12:30',
                    },
                    {
                        name: 'Gingerbread',
                        email: 356,
                        phone: 16.0,
                        people: 49,
                        trip: 3.9,
                        date: '16%',
                        time: '12:30',
                    },
                    {
                        name: 'Jelly bean',
                        email: 375,
                        phone: 0.0,
                        people: 94,
                        trip: 0.0,
                        date: '0%',
                        time: '12:30',
                    },
                    {
                        name: 'Lollipop',
                        email: 392,
                        phone: 0.2,
                        people: 98,
                        trip: 0,
                        date: '2%',
                        time: '12:30',
                    },
                    {
                        name: 'Honeycomb',
                        email: 408,
                        phone: 3.2,
                        people: 87,
                        trip: 6.5,
                        date: '45%',
                        time: '12:30',
                    },
                    {
                        name: 'Donut',
                        email: 452,
                        phone: 25.0,
                        people: 51,
                        trip: 4.9,
                        date: '22%',
                        time: '12:30',
                    },
                    {
                        name: 'KitKat',
                        email: 518,
                        phone: 26.0,
                        people: 65,
                        trip: 7,
                        date: '6%',
                        time: '12:30',
                    },
                ],
            }
        },
    }
</script>