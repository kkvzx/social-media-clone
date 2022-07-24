import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";

export const useAuthListener = () => {
  const [user, setUser] = useState<null>(
    JSON.parse((localStorage as any).getItem("authUser"))
  );
  const { firebase }: any = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser: any) => {
      // if we have a user then we can store him in localstorage
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // we dont have an authUser -> clear the local storage
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    // clean up
    return () => listener();
  }, [firebase]);

  return { user };
};
