"use client";
import { EmailIcon, EmailShareButton } from "react-share";

const GmailShare = () => {
    const url= 'https://hotel-booking-rosy.vercel.app/';
    const title = "Check out this awesome website!";
    const emailSubject = 'Check out this link!';
  const emailBody = 'I thought you might find this interesting:';
  const emailSeparator = '\n\n';

    // <EmailShare subject={emailSubject} body={emailBody} separator={emailSeparator} />
  return <>
<EmailShareButton subject={emailSubject} body={emailBody} separator={emailSeparator}>
      <EmailIcon size={40} round />
    </EmailShareButton>
    

  </>;
};

export default GmailShare;
