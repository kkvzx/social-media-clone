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

// connecting Authentication and firebase by userId (UiD)

// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId: string) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}

export async function getSuggestedProfiles(
  userId: string,
  following: string[]
) {
  const result = await firebase.firestore().collection("users").limit(10).get();

  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile: any) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}
