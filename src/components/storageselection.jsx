import React, { useState } from 'react';
import useApi from '../hooks/useapi';
import Navigation from '../components/navigation';
import ProgressBar from "../components/loadingbar";
import '../styles/storageselection.css';  // Vi kan genbruge nogle af RAM stylerne


const StorageSelection = ({ step, setStep, onSelectedStorage }) => {
    const { loading, data, error } = useApi();
    const [selectedStorage, setSelectedStorage] = useState("");


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    const hardware = Array.isArray(data?.lagring) ? data.lagring : [];


    const formatDescription = (text) => {
        // Liste over ord der skal være grønne
        const greenWords = ['Minecraft', 'Fortnite','dokumenter','billeder','GTA','Call', 'of','Duty','videoer','programmer','krævende' ,'titler'];
        return text.split(' ').map((word, index) => {
            if (greenWords.some(keyword => word.toLowerCase().includes(keyword.toLowerCase()))) {
                return <span key={index} className="highlight-green">{word} </span>;
            }
            return word + ' ';
        });
    };


    const handleSelectStorage = (lagring) => {
        if (selectedStorage === lagring.id) {
            setSelectedStorage('');
            return;
        }
        setSelectedStorage(lagring.id);
        onSelectedStorage(lagring);
    };


    return (
        <div className="container mt-5 text-center">
            <h2 className="mb-4 text-white">Trin 4 - Valg af lagring</h2>
            <div className="d-flex justify-content-center">
                <p className="mb-4 text-white text-center d-flex justify-content-center w-50 text-tlf">
                    Vælg den lagerplads, der passer til dine behov. Større lagerplads giver dig mulighed for at
                    installere flere spil og have hurtigere loadtider.
                </p>
            </div>


            <p className="text-white mb-5">({selectedStorage ? "1" : "0"}/1)</p>


            <div className="flex-row-reverse row mt-5 row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center">
                {hardware.map((lagring) => {
                    const isSelected = selectedStorage === lagring.id;
                    const isDisabled = selectedStorage !== '' && !isSelected;


                    return (
                        <div key={lagring.id} className="col mt-5">
                            <div
                                className={`ssd-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                                onClick={() => !isDisabled && handleSelectStorage(lagring)}
                            >
                                <div className="image-container-ssd">
                                    <img
                                        src={lagring.meta.hardware_img1}
                                        className="card-img-top-ssd"
                                        alt={lagring.title}
                                    />
                                </div>
                                <div className="ssd-content">
                                    <h5 className="ssd-title">{lagring.meta.user_title}</h5>
                                    <p className="ssd-text">{formatDescription(lagring.meta.short_description)}</p>
                                    <div className="checkmark-ssd">
                                        {isSelected && (
                                            <svg
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
                        </div>
                    );
                })}
            </div>


            <Navigation
                step={step}
                setStep={setStep}
                canProceed={selectedStorage !== ''}
            />
            <ProgressBar step={4}/>
        </div>
    );
};


export default StorageSelection;


