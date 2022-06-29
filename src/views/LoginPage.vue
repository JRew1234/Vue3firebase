<template>
  <card-form-component>
    <template #form>
      <user-form v-model="user">
        <template #bottom>
          <v-row>
            <v-col justify="center" align="center">
              <v-row>
                <v-col>
                  <v-btn to="/register">Register</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn @click="login">login</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </template>
      </user-form>
    </template>
  </card-form-component>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { LoginUser } from "../models/User";
import UserForm from "../components/UserForm.vue";
import CardFormComponent from "../components/CardFormComponent.vue";
import AuthFirebaseService from "../services/AuthFirebaseService";
import useLogin from "../services/useLogin";
export default defineComponent({
  components: {
    UserForm,
    CardFormComponent,
  },
  setup() {
    const user = ref<LoginUser>(new LoginUser());
    const { loginUserFirebase } = useLogin();
    const login = async (): Promise<void> => {
      try {
        await loginUserFirebase(user.value);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("success");
      }
    };
    return {
      user,
      login,
    };
  },
});
</script>
