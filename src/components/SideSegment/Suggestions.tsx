import React, { useState, useEffect } from "react";
import { getSuggestedProfiles } from "../../services/firebase";
import SuggestedProfile from "../SuggestedProfile";
import { LocationBig, SugestionsWrapper } from "./SideSegmentElements";

const Suggestions = ({
  userId,
  following,
  LoggedInUserDocId,
}: suggestionsProps) => {
  const [profiles, setProfiles] = useState<any>();
  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }
    if (userId) {
      suggestedProfiles();
    }
  }, [userId]);
  return (
    <SugestionsWrapper>
      <LocationBig>Suggestions For You</LocationBig>
      {!(
        profiles &&
        Object.keys(profiles).length === 0 &&
        Object.getPrototypeOf(profiles) === Object.prototype
      ) &&
        profiles?.map((singleProfile: any) => (
          <SuggestedProfile
            key={singleProfile.docId}
            username={singleProfile.username}
            fullName={singleProfile.fullName}
            spDocId={singleProfile.docId}
            loggedInUserDocId={LoggedInUserDocId}
            profileId={singleProfile.userId}
            userId={userId}
          />
        ))}
    </SugestionsWrapper>
  );
};

export default Suggestions;

interface suggestionsProps {
  userId: string;
  following: string[];
  LoggedInUserDocId: string;
}
