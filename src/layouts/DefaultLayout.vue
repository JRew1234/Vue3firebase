<template>
  <v-app fluid>
    <v-navigation-drawer app purple>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="px-2">Jan</v-list-item-title>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list dense>
        <v-list-item link to="/verify"> Verify </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title>Vue3 banking app</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="font-weight-bold text-overline text-uppercase pa-1"
        >updated at:</span
      >
      <span class="font-weight-light text-caption text-uppercase">
        {{ date }}</span
      >
      <v-row>
        <currency-app-bar
          v-for="(currency, index) in currencies"
          :key="index"
          :currencies="currency"
        />
      </v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn @click="logout">logout</v-btn>
    </v-app-bar>
    <slot name="app"></slot>
    <v-footer app> </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import CurrencyAppBar from "../components/CurrencyAppBar.vue";
import { CurrencyByCountries } from "../Enums/curencyByCountries";
import { CurrencyExchange } from "../models/CurrencyExchange";
import AuthFirebaseService from "../services/AuthFirebaseService";
import getCurrencies from "../services/getCurrency";
import DayJS from "../services/dayJsService";
import { Dayjs } from "dayjs";

export default defineComponent({
  components: { CurrencyAppBar },
  setup() {
    const currencies = ref<CurrencyExchange[]>([]);
    const date = ref<null | string>(null);
    const dayJs = new DayJS();

    onMounted(async () => {
      await getCurrencies(currencies.value);
      date.value = await dayJs.getLocalizedDate();
    });
    const firebase = AuthFirebaseService;
    return { currencies, logout: firebase.logoutUser, date };
  },
});
</script>
//ZROBIC DTO Z WALUTAMI
