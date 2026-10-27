import { cn } from "cn";

type NavData = {
  path: string;
  display: string;
};

type NavProps = {
  usage?: string;
};

export default function GlobalNav({ usage }: NavProps) {
  const navData: NavData[] = [
    { path: "/", display: "home" },
    { path: "#library", display: "library" },
    { path: "#socials", display: "socials" },
    { path: "#about", display: "who is morty?" },
  ];

  return (
    <nav className="GlobalNav sticky top-0 left-0">
      <ul
        className={cn("flex text-sm gap-7 justify-center md:gap-40 p-5", {
          "flex-col md:gap-10 text-lg max-lg:text-center p-0":
            usage === "footer",
        })}
      >
        {navData.map((link, i) => {
          const { path, display } = link;

          return (
            <li key={i}>
              <a href={path}>{display}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
