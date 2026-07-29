import AuthActions from "./AuthActions";
import MiniProfile from "./MiniProfile";

export default function Header() {
    return (
        <header className="flex justify-between h-25 items-center sticky top-0">
            <nav className="flex gap-16 items-center">
                <a href="/">
                    <div className="flex gap-4 items-center">
                        <div className="max-w-8"><img src="/logo.png" alt="logo" /></div>
                        <span className="inline-block text-2xl font-bold">C1feEstate</span>
                    </div>
                </a>
                <ul className="flex justify-between w-80">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Agents</a></li>
                </ul>
            </nav>
            <div>
                <MiniProfile/>
                <AuthActions/>
            </div>
        </header>
    )
}