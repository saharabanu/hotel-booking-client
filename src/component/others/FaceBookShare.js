"use client";
import { FacebookIcon, FacebookShareButton } from "react-share";

const FaceBookShare = () => {
    const url= 'https://hotel-booking-rosy.vercel.app/';
    const title = "Check out this awesome website!"
  return <>
<FacebookShareButton url={url} quote={title}>
      <FacebookIcon size={40} round />
    </FacebookShareButton>
    

  </>;
};

export default FaceBookShare;
