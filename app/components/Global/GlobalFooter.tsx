import Image from "next/image";
import logo from "@/public/logos/party_logo_real_googly.svg";
import yt from "@/public/icons/youtube_icon_orange.svg";
import ig from "@/public/icons/ig_icon_orange.svg";
import tiktok from "@/public/icons/tiktok_icon_orange.svg";
import mastadon from "@/public/icons/mastadon_icon_orange.svg";
import bigGoogly from "@/public/decorations/big_googly_left.png";
import Link from "next/link";
import GlobalNav from "./GlobalNav";

export default function GlobalFooter() {
  return (
    <footer className="GlobalFooter bg-navy m-10 rounded-container p-10 flex flex-col gap-10">
      <div className="top-content flex max-md:flex-col gap-10 md:justify-between max-md:items-center">
        <div className="left-col flex flex-col gap-10">
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
        <div className="center-col flex-2 max-md:border-t max-md:border-b max-md:py-5 border-foreground md:border-l md:pl-15">
          <GlobalNav usage="footer" />
        </div>
        <div className="right-col flex-1 max-w-40">
          <Image
            src={bigGoogly}
            width={414}
            height={410}
            alt="Googly eye"
            className="h-auto w-full"
          />
        </div>
      </div>
      <p className="bottom-content ml-4 max-md:text-center">
        &#169; Ill 2 Thrill Productions 2026
      </p>
    </footer>
  );
}
