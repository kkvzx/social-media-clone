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

export async function getUserByUsername(username: string | undefined) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
}
export async function getPhotosByUserId(userId: string | undefined) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "==", userId)
    .get();

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
}
export async function getPhotoByPhotoId(photoId: string | undefined) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("photoId", "==", photoId)
    .get();

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
}

export async function editDecriptionByDocId(
  docId: string,
  description: string | undefined
) {
  const result = await firebase
    .firestore()
    .collection("users")
    .doc(docId)
    .update({
      description: description,
    });
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

// takes users data from the firebase
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
export async function updateLoggedInUserFollowing(
  loggedInUserDocId: string, //currently logged in user document id
  profileId: string, //the user that I'm requesting to follow
  isFollowingProfile: boolean //Am i currently following?
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateFollowedUserFollowers(
  spDocId: string, //Suggested person docId
  loggedInUserDocId: string, //My id (the one who follows)
  isFollowingProfile: boolean
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(spDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId),
    });
}
// takes photos from firebase
export async function getPhotos(userId: string, following: string[]) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", following)
    .get();

  const userFollowedPhotos = result.docs.map((photo: any) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo: any) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const user: any = await getUserByUserId(photo.userId);
      const { username } = user[0];
      return { ...photo, userLikedPhoto, username };
    })
  );

  return photosWithUserDetails;
}

export async function updateCommentsArray(
  loggedInUser: string,
  commentValue: string,
  photoId: string
) {
  return firebase
    .firestore()
    .collection("photos")
    .doc(photoId)
    .update({
      comments: FieldValue.arrayUnion(commentValue),
    });
}
