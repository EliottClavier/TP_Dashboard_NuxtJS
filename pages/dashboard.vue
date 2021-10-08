<template>
    <v-row class="justify-space-around" align="center">
        <v-col cols="5">
          <h1 class="my-5">Informations utilisateur</h1>
          <v-card elevation="2">
            <v-card-text><b>Nom</b> {{ user.name }}</v-card-text>
          <v-divider></v-divider>
          <v-card-text ><b>Adresse email</b> {{ user.mail }}</v-card-text>
          <v-divider></v-divider>
          <v-card-text ><b>Mot de passe</b> {{ user.password }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="5">
          <h1 class="my-5">Gestion du compte</h1>
          <v-btn depressed color="error" @click="logout">
              Se déconnecter
          </v-btn>
          <v-row>
            <v-col cols="12">
              <v-btn class="mt-4" outlined color="error" @click="deleteAccount">
                  Supprimer son compte
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
    </v-row>
</template>

<script>
import {ACTIONS} from "~/store";

export default {
  data: () => ({
    user: {},
  }),
  mounted() {
    this.$store.dispatch(ACTIONS.INIT);
    this.user = this.$store.state.users[this.$store.state.authenticated];
  },
  methods: {
    logout() {
      this.$store.dispatch(ACTIONS.LOGOUT_USER_METHOD);
      this.$cookies.remove('authenticated');
      this.$router.push('/login');
    },
    deleteAccount() {
      this.$store.dispatch(ACTIONS.REMOVE_USER_METHOD);
      this.$cookies.remove('authenticated');
      this.$router.push('/register');
    },
  },
  middleware: ['logged'],
}
</script>
