import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ShoppingPlan from "./components/ShoppingPlan";

function App() {
    return (
        <Router>
            <div>
                <h1>Shop Smart</h1>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shopping-plan" element={<ShoppingPlan />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
