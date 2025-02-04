import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useapi';
import Navigation from '../components/navigation';
import ProgressBar from '../components/loadingbar';
import '../styles/gameselection.css';

const GameSelection = ({ step, setStep, setSelectedLevel, setSelectedGames, routes  }) => {
    const { loading, data, error } = useApi();
    const [level, setLevel] = useState('');
    const [localSelectedGames, setLocalSelectedGames] = useState([]); // Lokalt state til at håndtere valgene


    const handleGameSelect = (game) => {
        setLocalSelectedGames((prev) => {
            if (prev.find((g) => g.id === game.id)) {
                return prev.filter((g) => g.id !== game.id);
            }
            if (prev.length === 2) {
                return [...prev.slice(1), game];
            }
            return [...prev, game];
        });
    };

    useEffect(() => {
        if (localSelectedGames.length === 2) {
            const requirements = localSelectedGames.map((game) => game.meta.requirements);

            const priorityCount = {
                high: requirements.filter((r) => r === 'high').length,
                medium: requirements.filter((r) => r === 'medium').length,
                low: requirements.filter((r) => r === 'low').length,
            };

            let winningLevel = '';
            if (priorityCount.high > 0) {
                winningLevel = 'High';
            } else if (priorityCount.medium > 0) {
                winningLevel = 'Medium';
            } else if (priorityCount.low > 0) {
                winningLevel = 'Low';
            }

            setLevel(winningLevel);
            setSelectedLevel(winningLevel); // Opdater niveauet i App.js
        } else {
            setLevel('');
            setSelectedLevel(''); // Nulstil niveauet, hvis der ikke er to spil valgt
        }

        // Overfør valgte spil til App.js
        setSelectedGames(localSelectedGames);
    }, [localSelectedGames, setSelectedLevel, setSelectedGames]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const games = data?.games || [];

    return (
        <div className="container mt-5 text-center align-content-center">
            <h2 className="mb-4 text-white">Trin 1 – Valg af Spil</h2>
            <div className="d-flex justify-content-center">
                <p className="mb-4 text-white text-center d-flex justify-content-center w-50">
                    Vælg to spil fra listen. Disse valg giver os mulighed for at anbefale
                    den optimale konfiguration til en fantastisk spiloplevelse.
                </p>
            </div>
            <p className="text-white">({localSelectedGames.length}/2)</p>

            <div className="game-grid mt-5">
                {games.map((game) => {
                    const isSelected = localSelectedGames.find((g) => g.id === game.id);
                    const isDisabled = localSelectedGames.length === 2 && !isSelected;

                    return (
                        <div key={game.id} className="col d-flex justify-content-center">
                            <div
                                className={`game-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                                onClick={isDisabled ? undefined : () => handleGameSelect(game)}
                            >
                                <img
                                    src={game.meta.game_img}
                                    className="game-image"
                                    alt={game.title}
                                />
                                <div className="checkbox-container">
                                    {isSelected && (
                                        <svg
                                            className=""
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Navigation
                step={step}
                setStep={setStep}
                canProceed={localSelectedGames.length === 2}
                routes={routes}
            />
            <ProgressBar step={1}/>
        </div>
    );
};

export default GameSelection;
