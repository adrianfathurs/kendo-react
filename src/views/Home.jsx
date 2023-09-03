import React from "react";
import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
//Import Kendo
import { Button } from "@progress/kendo-react-buttons";
import kendoka from "../kendoka.svg";
Home.propTypes = {};

function Home() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/dashboard')
    };

    return (
        <div className="App">
        <header className="App-header">
            <img src={kendoka} className="App-logo" alt="kendoka" />
            <p>
            Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Button themeColor={"primary"} size={"large"} onClick={handleClick}>
            Learn KendoReact
            </Button>
        </header>
        </div>
    );
}

export default Home;
