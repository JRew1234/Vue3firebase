import { LoginUser } from "@/models/User";
import AuthFirebaseService from "./AuthFirebaseService";
import { useAuthStore } from "../store/useAuth";
import { storeToRefs, mapActions } from "pinia";
import router from "@/router";
import FirestoreService from "./FirestoreService";

export default function useAuthorization() {
  const main = useAuthStore();
  const { isLoggedIn, currentUserUid, isVerified } = storeToRefs(main);
  const loginUserFirebase = (user: LoginUser) => {
    AuthFirebaseService.loginUser(user)
      .then((loggedInUser) => {
        if (loggedInUser) {
          isLoggedIn.value = true;
          currentUserUid.value = loggedInUser.user.uid;
        }
      })
      .then(() => {
        FirestoreService.getVerification(currentUserUid.value!).then(
          (verification) => {
            isVerified.value = verification;
            if (isVerified.value) router.push("/");
            else {
              router.push("/verify");
            }
          }
        );
      });
  };
  return { loginUserFirebase };
}

// protected routes
// verified
// ?refactor nazwenictwa?
