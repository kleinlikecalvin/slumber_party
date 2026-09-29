type NavData = {
  path: string;
  display: string;
};

export default function GlobalNav() {
  const navData: NavData[] = [
    { path: "/", display: "home" },
    { path: "#library", display: "library" },
    { path: "#socials", display: "socials" },
    { path: "#about", display: "who is morty?" },
  ];

  return (
    <nav className="GlobalNav p-5 sticky top-0 left-0">
      <ul className="flex sm:text-sm gap-7 justify-center md:gap-40">
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
