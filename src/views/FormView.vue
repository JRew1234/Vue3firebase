<template>
  <h1>{{ date }}</h1>
  <v-btn @click="showDate">show date</v-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DayJS from "../services/dayJsService";

export default defineComponent({
  setup() {
    const date = ref();
    const dateJs = new DayJS();
    const showDate = () => {
      date.value = dateJs.getLocalizedDate();
    };
    return { date, showDate };
  },
});
</script>
