import React from 'react';
import '../styles/intro.css';
import { ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";

const IntroPage = ({ onStart }) => {


    return (
        <motion.div
            className="container-fluid d-flex justify-content-center align-items-center vh-100"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <h1 className="text-white mb-4">Velkommen til Gaming Guiden</h1>
                    <p className="text-white mb-4 mx-auto fs-5">
                        Her hjælper vi dig med at bygge din drømme-PC i fem enkle trin. Vi guider dig igennem
                        valget af de nødvendige komponenter baseret på dine ønsker og behov.
                    </p>
                    <div
                        className="row mt-5 d-flex justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
                        {/* Step 1 */}
                        <div className="col d-flex justify-content-center">
                            <div className="step-card p-2">
                                <div className="step-icon">🎮</div>
                                <h5 className="text-white mt-3">Trin 1</h5>
                                <p className="text-white">
                                    Vælg de spil, du vil spille, så vi kan finde de bedste komponenter til dig.
                                </p>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="col d-flex justify-content-center">
                            <div className="step-card p-2">
                                <div className="step-icon">🖥️</div>
                                <h5 className="text-white mt-3">Trin 2</h5>
                                <p className="text-white">
                                    Vælg din grafiske kvalitet for at finde det rette grafikkort og processor.
                                </p>
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="col d-flex justify-content-center">
                            <div className="step-card p-2">
                                <div className="step-icon">💾</div>
                                <h5 className="text-white mt-3">Trin 3</h5>
                                <p className="text-white">
                                    Vælg den rigtige mængde RAM, så din PC kan håndtere dine spil.
                                </p>
                            </div>
                        </div>
                        {/* Step 4 */}
                        <div className="col d-flex justify-content-center">
                            <div className="step-card p-2">
                                <div className="step-icon">🛠️</div>
                                <h5 className="text-white mt-3">Trin 4</h5>
                                <p className="text-white">
                                    Vælg din lagerplads for at sikre nok plads til dine spil og filer.
                                </p>
                            </div>
                        </div>
                        {/* Step 5 */}
                        <div className="col d-flex justify-content-center">
                            <div className="step-card p-2">
                                <div className="step-icon">🖌️</div>
                                <h5 className="text-white mt-3">Trin 5</h5>
                                <p className="text-white">
                                    Vælg det kabinet, der passer til din stil og dine behov.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="result-btn-reset py-2 ps-3 btn-lg mt-5 mx-auto"
                        onClick={() => {
                            console.log("Start Guide button clicked"); // Debugging
                            onStart();
                        }}
                    >
                        Start Guiden <ChevronRight className="ms-2"/>
                    </button>

                </div>
            </div>
        </motion.div>
    );
};

export default IntroPage;
