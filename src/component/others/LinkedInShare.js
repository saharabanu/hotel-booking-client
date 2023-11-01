"use client";
import { LinkedinIcon, LinkedinShareButton } from "react-share";

const LinkedInShare = () => {
  const url = "https://hotel-booking-rosy.vercel.app/";

  const shareTitle = "Check out this awesome website!";
  const shareSummary = "This  is a hotel booking amazing website created by me!";
  return (
    <>
      <LinkedinShareButton url={url} title={shareTitle} summary={shareSummary}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </>
  );
};

export default LinkedInShare;
