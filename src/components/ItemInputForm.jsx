import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const ItemInputForm = ({ onGeneratePlan }) => {
    const [items, setItems] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemList = items.split(",").map((item) => item.trim());
        onGeneratePlan(itemList);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
                label="Enter items (comma-separated)"
                fullWidth
                value={items}
                onChange={(e) => setItems(e.target.value)}
                variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Generate Plan
            </Button>
        </Box>
    );
};

export default ItemInputForm;
