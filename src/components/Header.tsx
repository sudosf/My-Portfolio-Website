import { BsFillMoonStarsFill } from "react-icons/bs";

interface Props {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ darkMode, setDarkMode }: Props) => {
    return (
        <nav className="pt-10 mb-12 flex justify-between dark:text-white dark:bg-gray-900">
            <h1 className="font-burtons text-xl">developedbyed</h1>
            <ul className="flex items-center">
                <li>
                    <BsFillMoonStarsFill
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-2xl"
                    />
                </li>
                <li>
                    <a
                        className="no-underline bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
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
