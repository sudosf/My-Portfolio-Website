import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
} from "react-icons/ai"
import portfolio from "../assets/portfolio.png"
import code from "../assets/code.png";
import design from "../assets/design.png";
import consulting from "../assets/consulting.png";
import Header from "../components/Header";

interface Props {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<Props> = ({darkMode, setDarkMode}: Props) => {
    return (
        <>
            <div className={darkMode ? "dark" : ""}>
                <main className="bg-slate-50 dark:bg-gray-900 px-10 md:px-20 lg:px-40">
                    <section className="min-h-screen">
                        
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

                        <div className="text-center p-">
                            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                                Dimitri Marco
                            </h2>
                            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                                Developer and designer.
                            </h3>
                            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                                Freelancer providing services for programming
                                and design content needs. Join me down below and
                                let's get cracking!
                            </p>
                            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                                <AiFillTwitterCircle />
                                <AiFillLinkedin />
                                <AiFillYoutube />
                            </div>
                            <div className="mx-auto bg-gradient-to-b from-slate-400 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                                <img
                                    src={portfolio}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h3 className="text-3xl py-1 dark:text-white ">
                                Services I offer
                            </h3>
                            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                                Since the beginning of my journey as a freelance
                                designer and developer, I've done remote work
                                for
                                <span className="text-teal-500">
                                    {" "}
                                    agencies{" "}
                                </span>
                                consulted for{" "}
                                <span className="text-teal-500">startups </span>
                                and collaborated with talanted people to create
                                digital products for both business and consumer
                                use.
                            </p>
                            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                                I offer from a wide range of services, including
                                brand design, programming and teaching.
                            </p>
                        </div>
                        <div className="lg:flex gap-10">
                            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                                <img src={design} className="mx-auto" />
                                <h3 className="text-lg font-medium pt-8 pb-2  ">
                                    Beautiful Designs
                                </h3>
                                <p className="py-2">
                                    Creating elegant designs suited for your
                                    needs following core design theory.
                                </p>
                                <h4 className="py-4 text-teal-600">
                                    Design Tools I Use
                                </h4>
                                <p className="text-gray-800 py-1">Photoshop</p>
                                <p className="text-gray-800 py-1">
                                    Illustrator
                                </p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Indesign</p>
                            </div>
                            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                                <img src={code} className="mx-auto" />
                                <h3 className="text-lg font-medium pt-8 pb-2 ">
                                    Code your dream project
                                </h3>
                                <p className="py-2">
                                    Do you have an idea for your next great
                                    website? Let's make it a reality.
                                </p>
                                <h4 className="py-4 text-teal-600">
                                    Design Tools I Use
                                </h4>
                                <p className="text-gray-800 py-1">Photoshop</p>
                                <p className="text-gray-800 py-1">
                                    Illustrator
                                </p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Indesign</p>
                            </div>
                            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                                <img src={consulting} className="mx-auto" />
                                <h3 className="text-lg font-medium pt-8 pb-2 ">
                                    Consulting
                                </h3>
                                <p className="py-2">
                                    Are you interested in feedback for your
                                    current project? I can give you tips and
                                    tricks to level it up.
                                </p>
                                <h4 className="py-4 text-teal-600">
                                    Design Tools I Use
                                </h4>
                                <p className="text-gray-800 py-1">Photoshop</p>
                                <p className="text-gray-800 py-1">
                                    Illustrator
                                </p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Indesign</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div> 
        </>
    );
};

export default Home;
