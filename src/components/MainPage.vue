<template>
  <v-container fluid>
    <v-row justify="center" align-content="center">
      <v-col cols="12" lg="3"><v-card height="33vh">sssssssssss</v-card></v-col>
      <v-col cols="12" lg="3"><v-card height="33vh">sssssssss</v-card></v-col>
      <v-col cols="12" lg="3"><v-card height="33vh">xxxxxxxxxx</v-card></v-col>
    </v-row>
    <v-row
      ><v-col cols="12">
        <v-card height="44vh"
          ><v-btn @click="CreateUser">CreateUser</v-btn></v-card
        ></v-col
      ></v-row
    >
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainPage",
  setup() {
    return {};
  },
});
</script>
