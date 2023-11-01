import LoginPage from '../../../component/LogIn/LoginPage';
import CommonBanner from '../../../component/ui/CommonBanner';
export const metadata = {
  title: "Signin",
  
};

const Login = () => {
  const bannerLinks = [
    {text: "Login"}
  ]
  return (
    <>
    <CommonBanner title="Login" links={bannerLinks}/>
     <div style={{margin: '20px 0'}}>
     <LoginPage/>
     </div>
    </>
  )
}

export default Login