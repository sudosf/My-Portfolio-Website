import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
            </Routes>
        </>
    );
};

export default App;
