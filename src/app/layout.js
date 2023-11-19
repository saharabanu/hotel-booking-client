'use client'
import "./globals.css";
import Providers from '../lib/Providers';
import ToastProvider from '../lib/ToastProvider'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />



export default function RootLayout({ children }) {
  return (
    <Providers suppressHydrationWarning={true}>
      <html lang="en" >
        <body>
<ToastProvider>
{children}
</ToastProvider>
       
        </body>
      </html>
    </Providers>
  );
}

