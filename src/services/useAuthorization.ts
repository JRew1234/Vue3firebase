import { RegisterUser } from "@/models/User";
import router from "@/router";
import AuthFirebaseService from "./AuthFirebaseService";
import FirestoreService from "./FirestoreService";
import firebaseStorage from "./firebaseStorage";
import { useAuthStore } from "../store/useAuth";
import { storeToRefs } from "pinia";

export default function useAuthorization() {
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
  const verifyUserFirebase = async (file: any) => {
    const main = useAuthStore();
    const { currentUserUid, isVerified } = storeToRefs(main);
    await uploadImageToStorage(file);
    await FirestoreService.setVerification(currentUserUid.value!);
    isVerified.value = true;
  };

  return { registerUserFirebase, verifyUserFirebase };
}
