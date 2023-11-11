import { BsFillMoonStarsFill } from "react-icons/bs";

interface Props {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ darkMode, setDarkMode }: Props) => {
    return (
        <nav className="sticky top-0 z-50 px-10 pt-7 pb-3 mb-12 flex justify-between bg-slate-200 shadow dark:text-white dark:bg-gray-950 md:px-40 lg:px-80">
            <h1 className="font-burtons text-xl"> Developedby Siya </h1>
            <ul className="flex items-center">
                <li>
                    <BsFillMoonStarsFill
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-2xl"
                    />
                </li>
                <li>
                    <a
                        className="no-underline bg-gradient-to-r from-cyan-600 text- to-teal-700 text-white px-4 py-2 border-none rounded-md ml-8"
                        href="#"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
