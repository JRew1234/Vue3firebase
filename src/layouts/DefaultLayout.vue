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
      <v-row>
        <currency-app-bar
          v-for="currency in currencies"
          :key="currency.exchangeRate"
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
import { defineComponent, ref } from "vue";
import CurrencyAppBar from "../components/CurrencyAppBar.vue";
import { CurrencyByCountries } from "../Enums/curencyByCountries";
import { CurrencyExchange } from "../models/CurrencyExchange";
import AuthFirebaseService from "../services/AuthFirebaseService";

export default defineComponent({
  components: { CurrencyAppBar },
  setup() {
    const currenciesMock = [
      {
        currencyExchangeTitle: CurrencyByCountries.POLISH,
        currencyExchangeRate: 123,
        currencyExchangeRatePercentage: 15,
      },
      {
        currencyExchangeTitle: CurrencyByCountries.GREAT_BRITAIN,
        currencyExchangeRate: 5,
        currencyExchangeRatePercentage: 15,
      },
      {
        currencyExchangeTitle: CurrencyByCountries.UNITED_STATES,
        currencyExchangeRate: 12,
        currencyExchangeRatePercentage: 10,
      },
    ];

    const currencies = ref<CurrencyExchange[]>(
      currenciesMock.map((item) => new CurrencyExchange(item))
    );

    const logout = AuthFirebaseService;

    return { currencies, logout: logout.logoutUser };
  },
});
</script>
