<template>
  <card-form-component>
    <template #form>
      <v-row class="ma-16">
        <v-col>
          <v-card-title class="justify-center"
            >Verify your account</v-card-title
          >
          <v-card-text class="justify-center"
            >In order to access your panel functionality you need to be
            verified. To do that upload photo of your valid ID.</v-card-text
          >
          <v-spacer></v-spacer>
          <v-form>
            <v-file-input
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Upload your ID to get verification"
              prepend-icon="mdi-camera"
              label="ID"
              ref="file"
              v-on:change="onFileChange"
            ></v-file-input>
            <v-row>
              <v-col>
                <v-btn depressed color="primary" @click="handleFileUpload">
                  Verify
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </template>
  </card-form-component>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CardFormComponent from "./CardFormComponent.vue";
import useAuthorization from "../services/useAuthorization";

export default defineComponent({
  name: "IdVerification",
  components: { CardFormComponent },
  setup() {
    const file = ref(null);
    // const rules = [
    //   (value: any) =>
    //     !value || value.size < 10000000 || "ID size should be less than 5 MB!",
    // ];
    const { verifyUserFirebase } = useAuthorization();
    const onFileChange = (e: any) => {
      file.value = e.target.files[0];
    };
    const handleFileUpload = async () => {
      if (file.value) {
        await verifyUserFirebase(file.value);
      }
    };
    return { handleFileUpload, file, onFileChange };
  },
});
</script>
