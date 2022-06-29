<template>
  <v-container fluid>
    <card-form-component>
      <template #form>
        <user-form v-model="user">
          <template #top>
            <v-text-field
              v-model="user.firstName"
              label="First name"
              :rules="[(v) => isNameValid(v) || 'Not valid']"
            />
            <v-text-field
              v-model="user.lastName"
              label="Last name"
              :rules="[(v) => isNameValid(v) || 'Not valid']"
            />
          </template>
          <template #bottom="validForm">
            <v-select
              v-model="user.currency"
              name="currency"
              :items="currenciesArray"
              filled
              label="Select currency"
            />
            <v-btn to="/login">Login</v-btn>
            <v-btn :disabled="!validForm.valid" @click="register">submit</v-btn>
            <code>{{ user }}</code>
          </template>
        </user-form>
      </template>
    </card-form-component>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import useValidation from "../services/useValidation";
import { CurrencyByCountries } from "../Enums/curencyByCountries";
import { RegisterUser } from "../models/User";
import CardFormComponent from "../components/CardFormComponent.vue";
import UserForm from "../components/UserForm.vue";
import useAuthorization from "../services/useAuthorization";
export default defineComponent({
  components: { CardFormComponent, UserForm },
  setup() {
    const currenciesArray = Object.values(CurrencyByCountries);
    const user = ref<RegisterUser>(new RegisterUser());
    const { isNameValid } = useValidation();
    const { registerUserFirebase } = useAuthorization();
    const register = async (): Promise<void> => {
      try {
        await registerUserFirebase(user.value);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("success");
      }
    };

    return { user, isNameValid, currenciesArray, register };
  },
});
</script>
