import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false as boolean,
    currentUserUid: null as string | null,
    isVerified: false as boolean,
  }),
  persist: true,
});

// userDto  user
//
