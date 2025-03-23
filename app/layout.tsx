import { Inter } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <html lang="en" className={inter.className}>
      <body>{children}</body>
=======
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} ${robotoCondensed.variable} ${rubikDistressed.variable} ${luckiestGuy.variable} ${sourGummy.variable} ${poppins.variable} ${nunitoSans.variable} antialiased`}
      >

         {/* <NavBar/>  */}
  
        {children}
      </body>
>>>>>>> 6d9ea82c60d8b14736d2051606c6363d7e33ad0e
    </html>
  );
}
