import { ChevronRight, ChevronLeft } from 'lucide-react';
import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/global.css';




const Navigation = ({ step, setStep, canProceed, onNext }) => {
    const handleNext = () => {
        if (onNext) {
            onNext();
        } else {
            setStep(prev => prev + 1);
        }
    };


    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            {step > 0 && (
                <Button
                    variant="outline-light"
                    className="d-flex align-items-center rounded-0 p-3 px-4"
                    onClick={() => setStep(prev => prev - 1)}
                >
                    <ChevronLeft className="me-2" />
                    Tilbage
                </Button>
            )}


            <Button
                variant="light"
                className="d-flex align-items-center rounded-0 p-3 px-4"
                onClick={handleNext}
                disabled={!canProceed}
            >
                Næste
                <ChevronRight className="ms-2" />
            </Button>
        </div>
    );
};


export default Navigation;

