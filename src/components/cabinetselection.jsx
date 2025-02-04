import React, { useState } from 'react';
import useApi from '../hooks/useapi';
import Navigation from '../components/navigation';
import SuccessModal from '../components/success_modal'
import ProgressBar from "../components/loadingbar";
import '../styles/cabinetselection.css';


const CabinetSelection = ({ step, setStep, onSelectedKabinet }) => {
    const { loading, data, error } = useApi();
    const [selectedKabinet, setSelectedKabinet] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);



    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const hardware = Array.isArray(data?.kabinet) ? data.kabinet : [];

    const handleSelectKabinet = (kabinet) => {
        if (selectedKabinet === kabinet.id){
            setSelectedKabinet('');
            return;
        }
        setSelectedKabinet(kabinet.id);
        onSelectedKabinet(kabinet); // Opdater også `App`'s state i App.js'
        console.log("Valgt Kabinet:", kabinet);
    };

    const handleViewResults = () => {
        setShowSuccessModal(false);
        setStep(step + 1);
    };

    const handleNext = () => {
        setShowSuccessModal(true);
    };

    return (
        <div className="container-fluid mt-5 mb-5 text-center">
            <h2 className="mb-4 text-white">Trin 5 - Valg af Udseende.</h2>
            <div className="d-flex mb-5 justify-content-center">
                <p className="mb-4 text-white text-center d-flex justify-content-center w-50 text-tlf">
                    Vælg ét kabinet, der passer til din PC. Kabinettet sætter stilen for din computer
                    og giver den et unikt udseende, samtidig med at det beskytter dine komponenter
                    og sikrer stabil ydeevne.
                </p>
            </div>

            <div className="row my-0 row-cols-1 row-cols-md-3 row-cols-xl-4 row-cols-xxl-6 justify-content-center">
            {hardware.map((kabinet) => {
                    const isSelected = selectedKabinet === kabinet.id;
                    const isDisabled = selectedKabinet !== '' && !isSelected;

                    return (
                        <div key={kabinet.id} className="m-2">
                            <div
                                className={`cabinet-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                                onClick={() => !isDisabled && handleSelectKabinet(kabinet)}

                            >
                                <div className="image-container-cabinet">
                                    <img

                                        src={kabinet.meta.hardware_img}
                                        className="cabinet-img-top p-4"
                                        alt={kabinet.title}
                                    />
                                </div>
                                <div className="cabinet-body mt-3">
                                    <div className="cabinet-content pb-3">
                                        <h5 className="cabinet-title">{kabinet.title}</h5>
                                        <p className="cabinet-text">{kabinet.meta.description}</p>


                                    </div>
                                    <div className="cabinet-checkmark">
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
                canProceed={selectedKabinet !== ''}
                onNext={handleNext}
            />

            <SuccessModal
                isVisible={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                onViewResults={handleViewResults}
            />

            <ProgressBar step={5}/>
        </div>
    );
}


export default CabinetSelection;