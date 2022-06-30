<template>
  <card-form-component>
    <template #form>
      <user-form v-model="user">
        <template #bottom>
          <v-row>
            <v-col justify="center" align="center">
              <v-row>
                <v-col>
                  <v-btn size="large" @click="login">login</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <span
                    >If no account go to
                    <v-btn variant="text" color="blue" to="/register"
                      >Register</v-btn
                    >
                  </span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </template>
      </user-form>
    </template>
  </card-form-component>
  <div class="scene">
    <div class="cube">
      <div class="cube__face cube__face--left"></div>
      <div class="cube__face cube__face--right"></div>
      <div class="cube__face cube__face--top"></div>
      <div class="cube__face cube__face--bottom"></div>
      <div class="cube__face cube__face--front"></div>
      <div class="cube__face cube__face--back"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { LoginUser } from "@/models/User";
import UserForm from "../components/UserForm.vue";
import CardFormComponent from "../components/CardFormComponent.vue";
import useAuthorization from "@/services/useAuthorization";
export default defineComponent({
  components: {
    UserForm,
    CardFormComponent,
  },
  setup() {
    const user = ref<LoginUser>(new LoginUser());
    const { loginUserFirebase } = useAuthorization();
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

<style scoped>
.scene {
  width: 100%;
  height: 100%;
  perspective: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cube {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: rotation 10s infinite alternate;
}

@keyframes rotation {
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  100% {
    transform: rotateY(720deg) rotateX(60deg);
  }
}

.cube__face {
  position: absolute;
  width: 200px;
  height: 200px;
}

.cube__face--left {
  background-image: url("https://uploaddeimagens.com.br/images/000/955/232/full/side.jpg?1497835464");
  transform: translateX(-100px) rotateY(90deg);
}

.cube__face--right {
  background-image: url("https://uploaddeimagens.com.br/images/000/955/232/full/side.jpg?1497835464");
  transform: translateX(100px) rotateY(90deg);
}

.cube__face--bottom {
  background-image: url("https://uploaddeimagens.com.br/images/000/955/231/full/bottom.jpg?1497835434");
  transform: translateY(100px) rotateX(90deg);
}

.cube__face--top {
  background-image: url("https://uploaddeimagens.com.br/images/000/955/233/thumb/top.jpg?1497835487");
  transform: translateY(-100px) rotateX(90deg);
}

.cube__face--back {
  background-image: url("https://uploaddeimagens.com.br/images/000/955/232/full/side.jpg?1497835464");
  transform: translateZ(-100px);
}

.cube__face--front {
  background-image: url("https://uploaddeimagens.com.br/images/000/955/232/full/side.jpg?1497835464");
  transform: translateZ(100px);
}
</style>
