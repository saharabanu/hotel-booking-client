"use client";
import { EmailIcon, EmailShareButton } from "react-share";

const GmailShare = () => {
    const emailSubject = 'Check out this link!';
  const emailBody = 'I thought you might find this interesting: https://hotel-booking-rosy.vercel.app';
  const emailSeparator = '\n\n';

   
  return <>
<EmailShareButton subject={emailSubject} body={emailBody} separator={emailSeparator}>
      <EmailIcon size={40} round />
    </EmailShareButton>
    

  </>;
};

export default GmailShare;
