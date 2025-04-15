import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const ShoppingPlanDisplay = ({ shoppingPlan }) => {
    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Optimized Shopping Plan
            </Typography>
            <List>
                {shoppingPlan.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`${item.itemName} - Aisle ${item.aisle}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ShoppingPlanDisplay;
