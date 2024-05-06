import { HiComputerDesktop, HiUser } from "react-icons/hi2";

export default function Header() {
    return (
        <header className="bg-sky-950 border-sky-900 border-b-[1px]">
          <nav className="mx-auto max-w-[1280px] flex-grow flex justify-between p-4 tracking-wide">
            <div className="text-xl font-bold">Austin Aluzzi</div>
            <ul className="flex items-center justify-center gap-6 ">
              <li><a href="#about-me"><HiUser className="h-6 w-6 block md:hidden"/><span className="hidden md:block font-bold hover:underline">About Me</span></a></li>
              <li><a href="#portfolio"><HiComputerDesktop className="h-6 w-6 block md:hidden"/><span className="hidden md:block font-bold hover:underline">Portfolio</span></a></li>
            </ul>
          </nav>
        </header>
    );
}