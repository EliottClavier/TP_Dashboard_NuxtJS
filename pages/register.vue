<template>
  <v-col cols="8">
    <register-form />
  </v-col>
</template>

<script>
import RegisterForm from "~/components/RegisterForm";
export default {
  name: "register",
  components: {RegisterForm},
  middleware: 'authenticated',
  mounted() {
    (this.$store.state.authenticated || this.$store.state.authenticated === 0) && (this.$router.push('/dashboard'))
  }
}
</script>

<style scoped>

</style>
