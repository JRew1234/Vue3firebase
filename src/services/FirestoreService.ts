import { RegisterUser } from "@/models/User";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/useAuth";

class FireStoreService {
  createUserFirestore = async (uid: string, user: RegisterUser) => {
    console.log(uid);
    try {
      await setDoc(doc(db, "users", uid), {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        currency: user.currency,
        verified: false,
        accountBalance: 0,
        transactions: {
          deposits: 0,
          withdrawals: 0,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  getVerification = async (uIdForVerification: string) => {
    const docRef = doc(db, "users", uIdForVerification);
    const snapShot = await getDoc(docRef);
    try {
      const data = snapShot.data();
      return data!.verified;
    } catch (err) {
      console.log(err);
    }
  };

  setVerification = async (uIdForVerification: string) => {
    const docRef = doc(db, "users", uIdForVerification);
    const main = useAuthStore();
    const { isVerified } = storeToRefs(main);
    await updateDoc(docRef, {
      verified: true,
    });
    isVerified.value = true;
  };
}
export default new FireStoreService();
