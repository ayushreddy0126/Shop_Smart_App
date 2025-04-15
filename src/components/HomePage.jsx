import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const [items, setItems] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemList = items.split(",").map((item) => item.trim());
        navigate("/shopping-plan", { state: { items: itemList } });
    };

    return (
        <div>
            <h2>Welcome to Shop Smart</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter items (comma-separated):
                    <input
                        type="text"
                        value={items}
                        onChange={(e) => setItems(e.target.value)}
                    />
                </label>
                <button type="submit">Get Shopping Plan</button>
            </form>
        </div>
    );
}

export default HomePage;
