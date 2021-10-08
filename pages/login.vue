<template>
  <v-col cols="8">
    <login-form />
  </v-col>
</template>

<script>
import LoginForm from "~/components/LoginForm";
export default {
  name: "login",
  components: {LoginForm},
  middleware: 'authenticated',
  mounted() {
    if (this.$store.state.authenticated || this.$store.state.authenticated === 0) {
      this.$router.push(`/${this.$store.state.users[this.$store.state.authenticated].name}`)
    }
  }
}
</script>

<style scoped>

</style>
