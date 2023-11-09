import { Button } from "react-bootstrap";
import "./App.css";

/** Environment variables */
// import.meta.env.PORT

function App() {
    return (
        <>
            <h1 className="text-5xl font-bold underline">Hello world!</h1>
            <Button variant="warning"> Hello Bootstrap </Button>
        </>
    );
}

export default App;
