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
    (this.$store.state.authenticated || this.$store.state.authenticated === 0) && (this.$router.push('/dashboard'))
  }
}
</script>

<style scoped>

</style>
