import { ComputerDesktopIcon, UserIcon } from "@heroicons/react/24/solid";

export default function Header() {
    return (
        <header className="bg-sky-950 border-sky-900 border-b-[1px]">
          <nav className="mx-auto max-w-[1280px] flex-grow flex justify-between p-4 tracking-wide">
            <div className="text-xl font-bold">Austin Aluzzi</div>
            <ul className="flex items-center justify-center gap-6 ">
              <li><a href="#about-me"><UserIcon className="h-6 w-6 block md:hidden"/><span className="hidden md:block font-bold hover:underline">About Me</span></a></li>
              <li><a href="#portfolio"><ComputerDesktopIcon className="h-6 w-6 block md:hidden"/><span className="hidden md:block font-bold hover:underline">Portfolio</span></a></li>
      
            </ul>
          </nav>
        </header>
    );
}