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
}
</script>

<style scoped>

</style>
