<template>
  <v-form ref="form" v-model="valid">
    <slot name="top" />
    <v-row>
      <v-col>
        <v-text-field
          v-model="model.email"
          label="email address"
          :rules="[(v) => isEmailValid(v) || 'Not valid']"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          v-model="model.password"
          type="password"
          label="Password"
          :rules="[(v) => isPasswordValid(v) || 'Not valid']"
        ></v-text-field>
      </v-col>
    </v-row>

    <slot name="bottom" :valid="valid" />
    <v-btn @click="test">Test</v-btn>
  </v-form>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import useValidation from "../services/useValidation";
import { LoginUser } from "../models/User";
export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<LoginUser | null>,
      required: true,
    },
  },
  setup(props, context) {
    const valid = ref<boolean>(false);
    const { isEmailValid, isPasswordValid } = useValidation();
    const model = computed({
      get: () => props.modelValue,
      set: (value) => context.emit("update:modelValue", value),
    });
    // const checkValidity = (props) => {
    //   if (valid && typeof props.user.firstName === 'string' && typeof props.user.lastName === 'string' && typeof props.user.email === 'string' && typeof props.user.password === 'string') {
    //     console.log("valid")
    //     return true
    //   }
    // }
    return {
      valid,
      isEmailValid,
      isPasswordValid,
      model,
    };
  },
});
</script>
