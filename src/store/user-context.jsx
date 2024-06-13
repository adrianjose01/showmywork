/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import storage from "../FirebaseConfig";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    const oldUser = localStorage.getItem("currentUser");
    if (oldUser) {
      const currentUser = JSON.parse(oldUser);
      setToken(currentUser.token);
      setUserId(currentUser.userId);
      setIsLoggedIn(true);
    }
    // checkToken();
  }, []);

  // async function checkToken() {
  //   if (!token) return logout();
  //   const response = await fetch(
  //     `http://localhost:3001/api/check-token/${token}`
  //   );
  //   const data = await response.json();
  //   if (data.message !== "Authenticated") {
  //     logout();
  //   }
  // }

  // function logout() {
  //   setToken(null);
  //   setUserId();
  //   setIsLoggedIn(false);
  // }

  const handleImageUpload = async (img) => {
    const imageName = (Math.random() * 10).toString().replace(".", "");
    const imageFirabaseRef = ref(storage, imageName);
    try {
      // FIREBASE IMAGE UPLOADING
      setIsLoading(true);
      await uploadBytes(imageFirabaseRef, img);
      const url = await getDownloadURL(ref(imageFirabaseRef));
      setImageUrl(url);
      setTimeout(() => {
        setIsLoading(false);
        setIsLoaded(true);
      }, 2000);
    } catch (err) {
      alert("Something went Wrong" + err);
    }
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    userId,
    setUserId,
    handleImageUpload,
    isLoading,
    isLoaded,
    imageUrl,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
