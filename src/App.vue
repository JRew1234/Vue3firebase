<template>
  <default-layout>
    <template #app>
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </template>
  </default-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default defineComponent({
  name: "App",
  components: { DefaultLayout },
  setup() {
    return {};
  },
});
</script>
