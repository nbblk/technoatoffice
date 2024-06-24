import Link from "next/link"


export default function Header() {
    return (
        <header className="w-full p-4 flex justify-between items-center fixed bg-black text-white border border-white">
        <Link href="/">technoatoffice</Link>
        <nav>
            <ul className="flex gap-4">
            <li>
                <Link href="/login">login</Link>
            </li>
            <li>
                <Link href="/signup">signup</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
    }