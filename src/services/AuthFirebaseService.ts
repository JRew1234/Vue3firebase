import { auth } from "@/firebase";
import { LoginUser, RegisterUser } from "@/models/User";
import router from "@/router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  AuthErrorCodes,
} from "firebase/auth";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../store/useAuth";

class AuthService {
  async registerUser(propsUser: RegisterUser): Promise<any> {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        propsUser.email!,
        propsUser.password!
      );
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async loginUser(propsUser: LoginUser): Promise<any> {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        propsUser.email!,
        propsUser.password!
      );
      return user;
    } catch (error: any) {
      if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        console.log("Wrong password");
      } else {
        console.log(error);
      }
    }
  }
  async logoutUser() {
    const main = useAuthStore();
    const { isLoggedIn, currentUserUid, isVerified } = storeToRefs(main);
    await signOut(auth);
    isLoggedIn.value = false;
    isVerified.value = false;
    currentUserUid.value = null;
    router.push("/login");
  }

  authStateObserver(user: any, callback: any) {
    if (user) {
      callback();
    }
  }
}
export default new AuthService();
