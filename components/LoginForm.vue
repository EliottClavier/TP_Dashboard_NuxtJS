<template>
  <v-card elevation="2">
    <v-card-title>Se connecter</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="name"
          label="Nom d'utilisateur"
          required
        ></v-text-field>
        <v-text-field
          v-model="name"
          label="Mot de passe"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-subtitle>
      <NuxtLink to="/register">Pas de compte ? Enregistrez-vous en cliquant ici !</NuxtLink>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "LoginForm"
}
</script>

<style scoped>

</style>
