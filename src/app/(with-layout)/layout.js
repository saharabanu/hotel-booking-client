'use client'
import { Toaster } from "react-hot-toast";
import Subscribe from "../../component/ui/Subscribe";
import UiFooter from "../../component/ui/UiFooter";
import UiHeader from "../../component/ui/UiHeader";


export default function RootLayout({ children }) {
  return (
    
    
     
     <>
     <Toaster/>
<UiHeader/> 

     {children}
     <Subscribe/>
     <UiFooter/>
     </>
      
  )
}
