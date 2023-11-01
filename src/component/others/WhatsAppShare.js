"use client";
import { WhatsappIcon,WhatsappShareButton } from "react-share";

const WhatsAppShare = () => {
    const url= 'https://hotel-booking-rosy.vercel.app/';
    const title = "Check out this awesome website!"
  return <>
<WhatsappShareButton url={url} quote={title}>
      <WhatsappIcon size={40} round />
    </WhatsappShareButton>
    

  </>;
};

export default WhatsAppShare;
