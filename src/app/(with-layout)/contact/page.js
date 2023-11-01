import CommonBanner from "../../../component/ui/CommonBanner"
import FeedBackForm from "../../../component/ui/FeedBackForm"

export const metadata = {
    title:'Contact'
}

const ContactPage = () => {
  const bannerLinks = [
    {text: "Contact"}
  ]
  return (
    <>
    <CommonBanner title="Contact" links={bannerLinks}/>
      <div className="container" style={{margin: '20px 0'}}>
        <FeedBackForm/>
    </div>
    </>
  )
}

export default ContactPage