<template>
  <v-img
    max-width="30px"
    max-height="25px"
    class="ma-0"
    :src="require(chosenFlag)"
    alt="EUlogo"
  />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { countriesFlags } from "../Enums/countriesFlags";

export default defineComponent({
  name: "CurrencyFlag",
  props: ["flag"],
  setup(props) {
    const chosenFlag = ref("");
    //if props === "EUR/PLN" chosen  flag = countriesFlags.EUR
    // else if props === "GBP/PLN" chosen flag = countriesFlags.GBP
    onMounted(async () => {
      console.log(props.flag);
      if (props.flag === "EUR/PLN") {
        chosenFlag.value = `${countriesFlags.EUR}`;
        console.log(chosenFlag);
      } else if (props.flag === "GBP/PLN") {
        chosenFlag.value = `${countriesFlags.GBP}`;
      } else {
        chosenFlag.value = `${countriesFlags.USD}`;
      }
    });
    return {
      chosenFlag,
    };
  },
});
</script>
