<template>
  <v-col class="d-flex justify-center align-center">
    <span class="">{{ currencies.currencyExchangeTitle }}&nbsp;&nbsp;</span>
    <span class="green--text font-weight-light"
      >{{ currencies.currencyExchangeRate }}&nbsp;</span
    >
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["currencies"],
  setup() {
    return {};
  },
});
</script>
