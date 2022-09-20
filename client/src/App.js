import React from "react";
import Foot from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import Homepage from "./components/Guest/Homepage";

function App() {
    return (
        <div>
            <Navbar />
            <Homepage />
            <Foot />
        </div>
    );
}

export default App;
