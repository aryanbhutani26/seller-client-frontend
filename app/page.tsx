"use client";

import Head from "next/head";
import Landing_Hero from "@/app/components/landing-page-components/Landing_Hero";
import Landing_Nav from "@/app/components/landing-page-components/Landing_Nav";
import Landing_Boxes from "@/app/components/landing-page-components/Landing_Boxes";
import Landing_Footer from "@/app/components/landing-page-components/Landing_Footer";
import Landing_Reviews from "@/app/components/landing-page-components/Landing_Reviews";

export default function Home() {
  return (
    <div>
      {/* Dynamic Page Title */}
      <Head>
        <title>Landing Page - ClothBuddy</title>
        <meta
          name="description"
          content="Welcome to the landing page of our application"
        />
      </Head>

      <Landing_Nav />
      <Landing_Hero />
      <Landing_Boxes />
      <Landing_Reviews />
      <Landing_Footer />
    </div>
  );
}
