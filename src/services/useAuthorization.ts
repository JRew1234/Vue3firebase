import { LoginUser, RegisterUser } from "@/models/User";
import router from "@/router";
import AuthFirebaseService from "./AuthFirebaseService";
import FirestoreService from "./FirestoreService";
import firebaseStorage from "./firebaseStorage";
import { useAuthStore } from "../store/useAuth";
import { storeToRefs } from "pinia";

export default function useAuthorization() {
  const main = useAuthStore();
  const { isLoggedIn, currentUserUid, isVerified } = storeToRefs(main);
  const { uploadImageToStorage } = firebaseStorage();
  const registerUserFirebase = (user: RegisterUser) => {
    AuthFirebaseService.registerUser(user).then((registeredUser) => {
      FirestoreService.createUserFirestore(registeredUser.user.uid, user).then(
        () => {
          router.push("/login");
        }
      );
    });
  };
  const verifyUserFirebase = async (file: File) => {
    const main = useAuthStore();
    const { currentUserUid } = storeToRefs(main);
    await uploadImageToStorage(file);
    await FirestoreService.setVerification(currentUserUid.value!);
  };

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

  return { registerUserFirebase, verifyUserFirebase, loginUserFirebase };
}
