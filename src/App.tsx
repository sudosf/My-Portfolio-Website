import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    return (
        <>
            <Routes>
                <Route path="/Home" element={<Home darkMode={darkMode} />} />
            </Routes>
        </>
    );
};

export default App;
