import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ShoppingPlan() {
    const location = useLocation();
    const { items } = location.state || { items: [] };
    const [plan, setPlan] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPlan = async () => {
            try {
                const response = await axios.post("http://localhost:8091/api/v1/get-shopping-plan", items);
                setPlan(response.data);
            } catch (err) {
                setError("Error fetching shopping plan.");
                console.error(err);
            }
        };

        if (items.length) {
            fetchPlan();
        }
    }, [items]);

    return (
        <div>
            <h2>Optimized Shopping Plan</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {plan.map((item, index) => (
                    <li key={index}>
                        {item.itemName} - Aisle {item.aisle}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingPlan;
