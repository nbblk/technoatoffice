import Link from "next/link";

const menu = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "search",
    url: "/search",
  },
  {
    title: "favorites",
    url: "/favorites",
  },
];
export default function Sidebar() {
  return (
    <aside className="w-[200px] h-full bg-black">
      <nav className="h-screen pt-20 px-4 border border-white">
        <ul className="flex flex-col gap-4 items-end text-white">
          {menu.map((item) => (
            <li key={item.title} className="hover:underline">
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
