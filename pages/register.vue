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
  middleware: ['authenticated'],
}
</script>
