<template>
  <v-card elevation="2">
    <v-card-title>S'enregister</v-card-title>
    <v-card-text>
      <v-form ref="registerForm">
        <v-text-field
        v-model="name"
        :rules="[nameRules, alreadyExistingUserRule(name, users)]"
        label="Nom d'utilisateur"
        required
        @change="resetValidation"
      ></v-text-field>
      <v-text-field
        v-model="mail"
        :rules="[mailRules, alreadyExistingMailRule(mail, users)]"
        label="Adresse-mail"
        required
        @change="resetValidation"
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="password"
        :rules="passwordRules"
        label="Mot de passe"
        required
        @change="resetValidation"
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="confirmedPassword"
        :rules="[confirmedPasswordRules, passwordConfirmationRule]"
        label="Confirmer le mot de passe"
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
      <NuxtLink to="/login">Déjà un compte ? Connectez-vous en cliquant ici !</NuxtLink>
    </v-card-subtitle>
  </v-card>
</template>

<script>
import {ACTIONS} from "~/store";

export default {
  name: "RegisterForm",
  data: () => ({
    users: [],
    valid: true,
    name: '',
    mail: '',
    password: '',
    confirmedPassword: '',
    nameRules: [
      v => !!v || "Le champ Nom est obligatoire",
    ],
    mailRules: [
      v => !!v || 'Le champ E-mail est obligatoire',
      v => /.+@.+\..+/.test(v) || 'Le champ E-mail doit être valide',
    ],
    passwordRules: [
      v => !!v || "Le champ Mot de passe est obligatoire"
    ],
    confirmedPasswordRules: [
      v => !!v || "Le champ Confirmer le mot de passe est obligatoire",
    ]
  }),
  mounted() {
    this.$store.dispatch(ACTIONS.INIT);
    this.users = this.$store.state.users;
  },
  methods: {
    passwordConfirmationRule() {
      return (this.password === this.confirmedPassword) || "Les champs mots de passe doivent être similaires"
    },
    alreadyExistingUserRule(value, array) {
      return !(array && array.some((u) => u.name === value)) || 'Utilisateur déjà existant'
    },
    alreadyExistingMailRule(value, array) {
      return !(array && array.some((u) => u.mail === value)) || 'E-mail déjà existant'
    },
    validate() {
      this.valid = this.$refs.registerForm.validate();
      if (this.valid) {
        this.$store.dispatch(ACTIONS.ADD_USER_METHOD, { name: this.name, password: this.password, mail: this.mail });
        this.$router.push(`/${this.$store.state.users[this.$store.state.authenticated].name}`)
      }
    },
    resetValidation() {
      this.$refs.registerForm.resetValidation();
      this.valid = true;
    }
  }
}
</script>

<style scoped>

</style>
