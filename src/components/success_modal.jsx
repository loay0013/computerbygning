import React from 'react';
import Confetti from 'react-confetti';
import { Button } from 'react-bootstrap';
import { ChevronRight } from 'lucide-react';
import '../styles/success_modal.css';

const SuccessModal = ({ isVisible, onClose, onViewResults }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center"
             style={{
                 position: 'fixed',
                 top: 0,
                 left: 0,
                 right: 0,
                 bottom: 0,
                 backgroundColor: 'rgba(0, 0, 0, 0.75)',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 zIndex: 1050
             }}>
            {/* Konfetti */}
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={300} // Antal konfetti
                gravity={0.3} // Hvor hurtigt konfetti falder
                recycle={false} // Stop konfetti efter én gang
            />

            <div className="p-4 align-items-center d-flex flex-column justify-content-center border-0 text-center"
                 style={{
                     height: '60%',
                     minWidth: '30%',
                     backgroundColor: '#141414',

                 }}>
                <div className="mb-4">
                    <div className="d-flex justify-content-center align-items-center mx-auto mb-3"
                         style={{
                             width: '200px',
                             height: '200px',
                             backgroundColor: '#1A1A1A',
                             borderRadius: '50%'
                         }}>
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="#6C49B4" strokeWidth="2" strokeLinecap="" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 className="text-white mb-3">Success!</h3>
                    <p className="text-white mb-4">
                        Din PC er nu færdigbygget!<br />
                        Se det samlede resultat her.
                    </p>
                </div>
                <Button
                    onClick={onViewResults}
                    className="modal-btn-reset rounded-0 d-flex align-items-center justify-content-center mx-auto"
                >
                    Se resultater <ChevronRight className="ms-2" />
                </Button>
            </div>
        </div>
    );
};

export default SuccessModal;
