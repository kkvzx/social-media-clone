import { firebase, FieldValue } from "../lib/firebase";

// checks if the username already exists in firebase
export async function doesUsernameExist(username: string) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}
