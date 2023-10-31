'use client'
import "./globals.css";
import Providers from '../lib/Providers';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

// export const metadata = {
//   title: "Hotel Booking",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <Providers suppressHydrationWarning={true}>
      <html lang="en" >
        <body>{children}</body>
      </html>
    </Providers>
  );
}

