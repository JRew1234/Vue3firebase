<template>
  <v-form>
    <v-text-field v-model="inputs.name" label="name"></v-text-field>
    <v-text-field v-model="inputs.lastname" label="lastname"></v-text-field>
    <v-text-field v-model="inputs.age" label="age"></v-text-field>
    <v-text-field v-model="inputs.email" label="email address"></v-text-field>
    <h2>{{ inputs }}</h2>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    const inputs = reactive({
      name: "",
      lastname: "",
      age: "",
      email: "",
    });

    return { inputs };
  },
});
</script>
