"use client";
import {
  AnnounceBar,
  AnnounceBarTag,
  AnnounceBarDescription,
} from "@govtechmy/myds-react/announce-bar";

export default function CommunityAnnounceBar({
  infoTitle,
  myGovOnlyInfo,
}: {
  infoTitle: string;
  myGovOnlyInfo: string;
}) {
  return (
    <AnnounceBar>
      <AnnounceBarTag variant="primary">{infoTitle}</AnnounceBarTag>
      <AnnounceBarDescription>
        {myGovOnlyInfo}
      </AnnounceBarDescription>
    </AnnounceBar>
  );
}
