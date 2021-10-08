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
    if (this.$store.state.authenticated || this.$store.state.authenticated === 0) {
       this.$router.push(`/${this.$store.state.users[this.$store.state.authenticated].name}`)
    }
  }
}
</script>

<style scoped>

</style>
