const API_URL = 'https://eksamen.nordicwebworks.dk/wp-json/pc-builder/v1';

export const fetchGames = async () => {
    try {
        const response = await fetch(`${API_URL}/games`);
        if (!response.ok) {
            throw new Error(`Error fetching games: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in fetchGames:", error);
        throw error;
    }
};

export const fetchHardware = async (type) => {
    try {
        const response = await fetch(`${API_URL}/hardware?type=${type}`);
        if (!response.ok) {
            throw new Error(`Error fetching hardware: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in fetchHardware:", error);

        throw error;
    }
};
