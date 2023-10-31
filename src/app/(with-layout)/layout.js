'use client'
import Subscribe from "../../component/ui/Subscribe";
import UiFooter from "../../component/ui/UiFooter";
import UiHeader from "../../component/ui/UiHeader";


export default function RootLayout({ children }) {
  return (
    
    
     
     <>
<UiHeader/> 

     {children}
     <Subscribe/>
     <UiFooter/>
     </>
      
  )
}
