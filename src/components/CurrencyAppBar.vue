<template>
  <v-col class="d-flex justify-center align-center">
    <v-img
      max-width="30px"
      max-height="25px"
      class="ma-0"
      :src="require('../assets/imgs/europeanUnionFlag.svg')"
      alt="EUlogo"
    />
    <span class="">{{ currencies.currencyExchangeTitle }}&nbsp;&nbsp;</span>
    <span class="green--text font-weight-light"
      >{{ currencies.currencyExchangeRate }}&nbsp;</span
    >
    <span class="success--text font-weight-light"
      >(+{{ currencies.currencyExchangeRatePercentage }}%)</span
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
