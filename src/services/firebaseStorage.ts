import { storage } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useAuthStore } from "../store/useAuth";
import { storeToRefs, mapActions } from "pinia";
export default function firebaseStorage() {
  const uploadImageToStorage = async (file: any) => {
    const main = useAuthStore();
    const { currentUserUid, isVerified } = storeToRefs(main);
    const imageToUpload = file;
    const metaData = {
      contentType: imageToUpload.type,
    };
    // 6. Komunikacja ze Storage w celu dodania tego pliku
    const storageRef = ref(
      storage,
      `${currentUserUid.value}/` + "ID/" + file.name
    );
    const uploadTask = uploadBytesResumable(
      storageRef,
      imageToUpload,
      metaData
    );

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        console.warn(error);
      }
    );
  };
  return { uploadImageToStorage };
}
