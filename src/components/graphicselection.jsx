import React, { useState } from 'react';
import useApi from '../hooks/useapi';
import Navigation from '../components/navigation';
import ProgressBar from './loadingbar'; // Tilføj denne import
import '../styles/graphicselection.css';
import Carousel from './carousel'; // Importer Carousel-komponenten


const GraphicsSelection = ({
                               step,
                               setStep,
                               selectedLevel,
                               setSelectedProcessor,
                               setSelectedKøling,
                               setSelectedBundkort,
                               setSelectedStrømforsyning,
                               setSelectedGraphic,
                           }) => {
    const { loading, data, error } = useApi();
    const [selectedOption, setSelectedOption] = useState('');


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    let hardware = Array.isArray(data?.grafik) ? data.grafik : [];
    let processors = Array.isArray(data?.processor) ? data.processor : [];
    let køling = Array.isArray(data?.køling) ? data.køling : [];
    let bundkort = Array.isArray(data?.bundkort) ? data.bundkort : [];
    let strømforsyning = Array.isArray(data?.strømforsyning) ? data.strømforsyning : [];


    // Filtrer baseret på niveau
    if (selectedLevel) {
        hardware = hardware.filter((grafik) => {
            if (grafik.meta.requirements) {
                const requirement = grafik.meta.requirements.trim().toLowerCase();
                return requirement === selectedLevel.toLowerCase();
            }
            return false;
        });
    }




    const handleSelectGraphicsCard = (grafik) => {
        if (selectedOption === grafik.id) {
            // Hvis det valgte kort klikkes igen, fjern valget
            setSelectedOption('');
            setSelectedGraphic(null);
            setSelectedProcessor(null);
            setSelectedKøling(null);
            setSelectedBundkort(null);
            setSelectedStrømforsyning(null);
            return;
        }
        setSelectedOption(grafik.id);
        setSelectedGraphic(grafik);


        const requirements = grafik.meta.requirements.trim().toLowerCase();
        const classRequirements = grafik.meta.class_requirements;


        // Find og sæt matchende komponenter
        const matchingProcessor = processors.find((processor) =>
            processor.meta.requirements.trim().toLowerCase() === requirements &&
            processor.meta.class_requirements === classRequirements
        );
        if (matchingProcessor) {
            setSelectedProcessor(matchingProcessor);
        }


        const matchingKøling = køling.find((k) =>
            k.meta.requirements.trim().toLowerCase() === requirements
        );
        if (matchingKøling) {
            setSelectedKøling(matchingKøling);
        }


        const matchingBundkort = bundkort.find((b) =>
            b.meta.requirements.trim().toLowerCase() === requirements
        );
        if (matchingBundkort) {
            setSelectedBundkort(matchingBundkort);
        }


        const matchingStrømforsyning = strømforsyning.find((s) =>
            s.meta.requirements.trim().toLowerCase() === requirements
        );
        if (matchingStrømforsyning) {
            setSelectedStrømforsyning(matchingStrømforsyning);
        }
    };


    return (
        <div className="container mt-5 text-center">
            <h2 className="mb-4 text-white">Trin 2 - Grafisk Udseende</h2>
            <div className="d-flex justify-content-center">
                <p className="mb-4 text-white text-center d-flex justify-content-center w-50 text-tlf">
                    Vælg én grafisk indstilling, der passer til dine behov.
                    Dit valg bestemmer den bedste processor og det mest optimale grafikkort til din PC.
                </p>
            </div>
            <p className="text-white mb-5">({selectedOption ? "1" : "0"}/1)</p>


            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mt-5">
                {hardware.map((grafik) => {
                    const isSelected = selectedOption === grafik.id;
                    const isDisabled = selectedOption !== '' && !isSelected;


                    return (
                        <div key={grafik.id} className="col mt-5">
                            <div
                                className={`graphics-card ${isSelected ? 'selected' : ''} ${
                                    isDisabled ? 'disabled' : ''
                                }`}
                                onClick={() => !isDisabled && handleSelectGraphicsCard(grafik)}
                            >
                                <Carousel
                                    images={[grafik.meta.hardware_img1]} // Send billeder som en array
                                    videoUrl="https://eksamen.nordicwebworks.dk/wp-content/uploads/2025/01/HELLDIVERS-2-2025.01.07-10.47.46.02.mp4" // Eksempel-video
                                    altText={grafik.title}
                                />
                                <div className="graphics-content">
                                    <h3 className="graphics-title">{grafik.meta.user_title}</h3>
                                    <p className="graphics-text">{grafik.meta.short_description}</p>
                                    <div className="checkmark">
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
                canProceed={selectedOption !== ''}
            />
            <ProgressBar step={2}/>
        </div>
    );
};


export default GraphicsSelection;

