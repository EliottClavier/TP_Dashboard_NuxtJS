<template>
  <v-card elevation="2">
    <v-card-title>Se connecter</v-card-title>
    <v-card-text>
      <v-alert type="error" v-if="alert">
        Identifiant ou mot de passe invalide
      </v-alert>
      <v-form ref="loginForm">
        <v-text-field
          v-model="name"
          label="Nom d'utilisateur"
          required
          @change="resetValidation"
        ></v-text-field>
        <v-text-field
          type="password"
          v-model="password"
          label="Mot de passe"
          required
          @change="resetValidation"
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Envoyer
        </v-btn>
      </v-form>
    </v-card-text>
    <v-card-subtitle>
      <NuxtLink to="/register">Pas de compte ? Enregistrez-vous en cliquant ici !</NuxtLink>
    </v-card-subtitle>
  </v-card>
</template>

<script>
import {ACTIONS} from "~/store";

export default {
  name: "LoginForm",
  data: () => ({
    users: [],
    valid: true,
    alert: false,
    name: '',
    password: '',
  }),
  mounted() {
    this.$store.dispatch(ACTIONS.INIT);
    this.users = this.$store.state.users;
  },
  methods: {
    validate() {
      this.valid = this.$refs.loginForm.validate();
      this.valid = this.users && this.users.some((u) => u.name === this.name && u.password === this.password);
      if (this.valid) {
        this.$store.dispatch(ACTIONS.LOGIN_USER_METHOD, {
          name: this.name,
        });
        this.$router.push(`/${this.$store.state.users[this.$store.state.authenticated].name}`)
      } else {
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 3000)
      }
    },
    resetValidation() {
      this.$refs.loginForm.resetValidation();
      this.valid = true;
    },
  }
}
</script>

<style scoped>

</style>
