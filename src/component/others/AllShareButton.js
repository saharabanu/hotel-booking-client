'use client'
import FaceBookShare from "./FaceBookShare"
import GmailShare from "./GmailShare"
import LinkedInShare from "./LinkedInShare"
import WhatsAppShare from "./WhatsAppShare"


const AllShareButton = () => {
  return (
    <>
<div>
              <FaceBookShare>
              <button className="btn btn_theme btn_md">
                
                Share on Facebook
             
            </button>
              </FaceBookShare>
              
              <LinkedInShare>
              <button className="btn btn_theme btn_md" style={{ margin: "0px 10px" }}>
                LinkedIn
              </button>
              </LinkedInShare>
              <GmailShare>
              <button className="btn btn_theme btn_md">Gmail</button>
              </GmailShare>
              <WhatsAppShare>
              <button className="btn btn_theme btn_md">WhatsApp</button>
              </WhatsAppShare>
            </div>

    </>
  )
}

export default AllShareButton