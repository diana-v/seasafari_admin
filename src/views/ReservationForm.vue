<template>
    <v-form
            ref="form"
            v-model="valid"
            lazy-validation
    >
        <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
        ></v-text-field>

        <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
        ></v-text-field>
        <v-text-field
                label="Phone"
                required
        ></v-text-field>
        <v-select
                v-model="select"
                :items="trips"
                :rules="[v => !!v || 'Item is required']"
                label="Trip"
                required
        ></v-select>
        <v-text-field
                label="Number of people"
                required
        ></v-text-field>
        <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                max-width="50%"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
                    v-model="date"
                    label="Picker in menu"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
            ></v-text-field>
        </template>
        <v-date-picker
                v-model="date"
                no-title
                scrollable
        >
            <v-spacer></v-spacer>
            <v-btn
                    text
                    color="primary"
                    @click="menu = false"
            >
                Cancel
            </v-btn>
            <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(date)"
            >
                OK
            </v-btn>
        </v-date-picker>
        </v-menu>

        <v-menu
                ref="menu"
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                        v-model="time"
                        label="Picker in menu"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                ></v-text-field>
            </template>
            <v-time-picker
                    v-if="menu2"
                    v-model="time"
                    full-width
                    @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
        </v-menu>
        <v-text-field
                label="Price"
                disabled
        ></v-text-field>
        <v-textarea
                label="Message (optional)"
                rows="1"
                auto-grow
        ></v-textarea>

        <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
        >
            Validate
        </v-btn>

        <v-btn
                color="error"
                class="mr-4"
                @click="reset"
        >
            Reset Form
        </v-btn>

        <v-btn
                color="warning"
                @click="resetValidation"
        >
            Reset Validation
        </v-btn>
    </v-form>
</template>

<script>
    export default {
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            trips: [
                'Jūra',
                'Juodkrantė',
                'Nida',
                'Mingės kaimas',
                'Vandens taksi',
                'Privatus vakarėlis'
            ],
            checkbox: false,
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            time: null,
            menu2: false,
        }),

        methods: {
            validate() {
                this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>