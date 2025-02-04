import React, { useState } from 'react';
import useApi from '../hooks/useapi';
import Navigation from '../components/navigation';
import ProgressBar from "../components/loadingbar";
import '../styles/ramselection.css';


const RamSelection = ({ step, setStep, onSelectedRam }) => {
    const { loading, data, error } = useApi();
    const [selectedRam, setSelectedRam] = useState("");
    const [hoveredRam, setHoveredRam] = useState(null);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    const hardware = Array.isArray(data?.ram) ? data.ram : [];
    const getGameImages = (ram) => {
        const ramSize = ram.title.toLowerCase();


        if (ramSize.includes("8")) {
            return {
                image1: "http://eksamen.nordicwebworks.dk/wp-content/uploads/2024/12/CS2_Cover_Art.jpg",
                image2: "http://eksamen.nordicwebworks.dk/wp-content/uploads/2024/12/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg"
            };
        } else if (ramSize.includes("16")) {
            return {
                image1: "http://eksamen.nordicwebworks.dk/wp-content/uploads/2024/12/GTA-5-1.png",
                image2: "http://eksamen.nordicwebworks.dk/wp-content/uploads/2024/12/fortnite-keyart-01-en-30nov23.webp"
            };
        } else if (ramSize.includes("32")) {
            return {
                image1: "http://eksamen.nordicwebworks.dk/wp-content/uploads/2024/12/QMPJ4G7o9t6zHXzL1alU0YqErGRCbQh7W7cBx3Dp.jpg",
                image2: "http://eksamen.nordicwebworks.dk/wp-content/uploads/2024/12/2c253de3117182b4a09d02ad16ebc51a25d4ea9208a5d057.png"
            };
        }


        return {
            image1: ram.meta.additionalImage1,
            image2: ram.meta.additionalImage2
        };
    };






    const handleSelectRam = (ram) => {
        if (selectedRam === ram.id) {
            setSelectedRam('');
            return;
        }
        setSelectedRam(ram.id);
        onSelectedRam(ram);
    };


    return (
        <div className="container mt-5 text-center">
            <h2 className="mb-4 text-white">Trin 3 - Valg af hukommelse</h2>
            <div className="d-flex justify-content-center">
                <p className="mb-4 text-white text-center d-flex justify-content-center w-50 text-tlf">
                    Vælg én RAM-konfiguration, der passer til din gamingstil. RAM hjælper din computer med at håndtere
                    krævende spil, og jo mere RAM, desto bedre kan den klare store spil.
                </p>
            </div>


            <p className="text-white mb-5">({selectedRam ? "1" : "0"}/1)</p>


            <div className="row flex-row-reverse mt-5 row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center">
                {hardware.map((ram) => {
                    const isSelected = selectedRam === ram.id;
                    const isDisabled = selectedRam !== '' && !isSelected;
                    const gameImages = getGameImages(ram);  // Her aktiverer vi getGameImages


                    return (
                        <div
                            key={ram.id}
                            className="col mt-5"
                            onMouseEnter={() => setHoveredRam(ram.id)}
                            onMouseLeave={() => setHoveredRam(null)}
                        >
                            <div
                                className={`ram-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                                onClick={() => !isDisabled && handleSelectRam(ram)}
                            >
                                <div className="image-container-ram">
                                    <img
                                        src={ram.meta.hardware_img1}
                                        className="ram-img-top"
                                        alt={ram.title}
                                    />
                                </div>


                                <div className="ram-body">
                                    {hoveredRam === ram.id ? (
                                        <div className="hover-state">
                                            <h5 className="ram-title mb-4">Fungerer godt til</h5>
                                            <div className="game-images-ram">
                                                <img
                                                    src={gameImages.image1}
                                                    alt="Game 1"
                                                    className="game-image-ram"
                                                />
                                                <img
                                                    src={getGameImages(ram).image2}
                                                    alt="Game 2"
                                                    className="game-image-ram"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <h5 className="ram-title">{ram.meta.user_title}</h5>
                                            <p className="ram-text">{ram.meta.short_description}</p>
                                        </>
                                    )}
                                    <div className="checkmark-ram">
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
                canProceed={selectedRam !== ''}


            />
            <ProgressBar step={3} />
        </div>
    );
};


export default RamSelection;

