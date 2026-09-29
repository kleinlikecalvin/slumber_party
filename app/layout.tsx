import type { Metadata } from "next";
import { IBM_Plex_Sans, Tilt_Warp } from "next/font/google";
import "./globals.css";
import GlobalNav from "./components/GlobalNav";

const ibmSans = IBM_Plex_Sans({ weight: "400", variable: "--font-ibm-sans" });
const tiltWarp = Tilt_Warp({
  weight: "400",
  variable: "--font-tilt-warp",
});

export const metadata: Metadata = {
  title: "Slumber Party",
  description: "Watch movies with Morty Day!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmSans.variable} ${tiltWarp.variable} h-full antialiased`}
    >
      <body>
        <p className="font-headers tracking-[2px] text-9xl p-10 lg:text-center">
          LET'S PARTY!
        </p>
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
