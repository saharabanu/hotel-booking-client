'use client'
import UiFooter from "../../component/ui/UiFooter";
import UiHeader from "../../component/ui/UiHeader";


export default function RootLayout({ children }) {
  return (
    
    
     
     <>
<UiHeader/> 

     {children}
     <UiFooter/>
     </>
      
  )
}
