import Image from "next/image";
import logo from "@/public/logos/party_logo.svg";
import yt from "@/public/icons/youtube_icon_orange.svg";
import ig from "@/public/icons/ig_icon_orange.svg";
import tiktok from "@/public/icons/tiktok_icon_orange.svg";
import mastadon from "@/public/icons/mastadon_icon_orange.svg";
import Link from "next/link";

export default function GlobalFooter() {
  return (
    <footer className="bg-navy m-10 rounded-container p-10 flex flex-col gap-10">
      <div className="top-content lg:flex-row flex flex-col gap-10">
        <div className="left-col lg:flex-1 flex flex-col gap-10">
          <Image
            src={logo}
            width={267}
            height={150}
            alt="Slumber party logo"
            className="ml-3 block"
          />
          <div className="socials-container flex h-10">
            <Link href="tbd🚨">
              <Image
                src={yt}
                width={267}
                height={150}
                alt="Youtube icon"
                className="h-10 w-auto"
              />
            </Link>
            <Link href="tbd🚨">
              <Image
                src={ig}
                width={267}
                height={150}
                alt="Instagram icon"
                className="h-10 w-auto"
              />
            </Link>
            <Link href="tbd🚨">
              <Image
                src={tiktok}
                width={267}
                height={150}
                alt="Tiktok icon"
                className="h-10 w-auto"
              />
            </Link>
            <Link href="tbd🚨">
              <Image
                src={mastadon}
                width={267}
                height={150}
                alt="Mastadon icon"
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </div>
        <div className="right-col flex-2 border ml-4">placeholder</div>
      </div>
      <div className="bottom-content">
        <p className="ml-4">&#169; Ill 2 Thrill Productions 2026</p>
      </div>
    </footer>
  );
}
