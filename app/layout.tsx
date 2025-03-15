import { Geist, Geist_Mono } from "next/font/google";
import {
  Permanent_Marker,
  Roboto_Condensed,
  Rubik_Distressed,
  Luckiest_Guy,
  Sour_Gummy,
  Poppins,
  Nunito_Sans,
} from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400", // ✅ Permanent Marker only supports 400
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
});

const rubikDistressed = Rubik_Distressed({
  variable: "--font-rubik-distressed",
  subsets: ["latin"],
  weight: "400", // ✅ Only supports 400
  style: "normal",
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  weight: "400", // ✅ This font only supports 400
});

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
  weight: "400", // ✅ Only 400 is available
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // ✅ Ensure correct weights are provided
  style: "normal",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["200", "400", "600"], // ✅ Ensure available weights
  style: "normal",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} ${robotoCondensed.variable} ${rubikDistressed.variable} ${luckiestGuy.variable} ${sourGummy.variable} ${poppins.variable} ${nunitoSans.variable} antialiased bg-gray-100`}
      >
        <div className="flex h-screen">
          
          <main className="flex-1 p-6 overflow-auto" style={{marginTop:"10px"}}>{children}</main>
        </div>
      </body>
    </html>
  );
}
