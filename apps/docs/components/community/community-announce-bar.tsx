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
    <div className="w-full border-b border-gray-200">
      <div className="max-w-container container mx-auto md:px-6">
        <AnnounceBar className="border-0 md:mx-0">
          <div className="flex items-center gap-3">
            <AnnounceBarTag variant="primary">{infoTitle}</AnnounceBarTag>
            <AnnounceBarDescription>{myGovOnlyInfo}</AnnounceBarDescription>
          </div>
        </AnnounceBar>
      </div>
    </div>
  );
}
