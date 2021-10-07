<template>
  <v-card elevation="2">
    <v-card-title>S'enregister</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
        v-model="name"
        label="Nom d'utilisateur"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        label="Adresse-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        label="Mot de passe"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        label="Confirmer le mot de passe"
        required
      ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-subtitle>
      <NuxtLink to="/login">Déjà un compte ? Connectez-vous en cliquant ici !</NuxtLink>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "RegisterForm"
}
</script>

<style scoped>

</style>
