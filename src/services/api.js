import axios from "axios";

const BASE_URL = "http://localhost:8091/api/v1";

export const getShoppingPlan = async (items) => {
    try {
        const response = await axios.post(`${BASE_URL}/get-shopping-plan`, items);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error fetching shopping plan");
    }
};
