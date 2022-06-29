// slot na formularz i slot na buttony

<template>
  <v-card elevation="3" class="pa-10 ma-16">
    <v-row>
      <v-col>
        <slot name="form"></slot>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardFormComponent",

  setup() {
    return {};
  },
});
</script>
