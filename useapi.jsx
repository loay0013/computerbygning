import { useState, useEffect } from "react";
import { fetchHardware, fetchGames } from "../api/service";

export const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        processor: [],
        games: [],
        grafik: [],
        ram: [],
        lagring: [],
        kabinet: [],
        køling: [],
        strømforsyning: [],
        bundkort: [],
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [processor, games, grafik, ram, lagring, kabinet, køling, strømforsyning, bundkort] = await Promise.all([
                    fetchHardware('processor'),
                    fetchGames(),
                    fetchHardware('grafik'),
                    fetchHardware('ram'),
                    fetchHardware('lagring'),
                    fetchHardware('kabinet'),
                    fetchHardware('køling'),
                    fetchHardware('strømforsyning'),
                    fetchHardware('bundkort'),
                ]);
                setData({ processor, games, grafik, ram, lagring, kabinet, køling, strømforsyning, bundkort });
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []); // Kør kun ved komponentens mount

    return { loading, data, error };
};

export default useApi;
