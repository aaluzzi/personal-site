export default function Header() {
    return (
        <header className="bg-slate-700 drop-shadow-md">
          <nav className="mx-auto max-w-[1280px] flex-grow flex justify-between p-4">
            <div className="text-xl font-bold">Austin Aluzzi</div>
            <ul className="flex items-center justify-center gap-6">
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#connect">Connect</a></li>
            </ul>
          </nav>
        </header>
    );
}