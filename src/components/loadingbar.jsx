import React, { useEffect, useState } from 'react';


const ProgressBar = ({ step }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);


    const getProgressForStep = (currentStep) => {
        switch (currentStep) {
            case 1:
                return { start: 0, end: 20 };
            case 2:
                return { start: 20, end: 40 };
            case 3:
                return { start: 40, end: 60 };
            case 4:
                return { start: 60, end: 80 };
            case 5:
                return { start: 80, end: 100 };
            default:
                return { start: 0, end: 0 };
        }
    };


    useEffect(() => {
        const { start, end } = getProgressForStep(step);
        setAnimatedProgress(start);


        const interval = setInterval(() => {
            setAnimatedProgress(prev => {
                if (prev < end) {
                    return Math.min(prev + 1, end);
                }
                clearInterval(interval);
                return prev;
            });
        }, 20);


        return () => clearInterval(interval);
    }, [step]);


    const progressBarStyles = {
        background: `linear-gradient(90deg, #6C49B4 0%, #FB26DE 100%)`,
        width: `${animatedProgress}%`,
        height: '100%',
        transition: 'width 0.3s ease-in-out',
        WebkitBackgroundClip: 'content-box',
        backgroundClip: 'content-box'
    };


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">

                    <div className="mb-5">


                        <div className="ms-3 mb-2"
                             style={{
                                 background: '-webkit-linear-gradient(45deg, #6C49B4, #FB26DE)',
                                 WebkitBackgroundClip: 'text',
                                 WebkitTextFillColor: 'transparent',
                                 minWidth: '3rem',
                                 fontWeight: '600'
                             }}>
                            {animatedProgress}%
                        </div>


                        <div className="flex-grow-1"
                             style={{
                                 height: '15px',
                                 backgroundColor: 'rgba(108, 73, 180, 0.2)',
                             }}>

                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={progressBarStyles}
                                aria-valuenow={animatedProgress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <style>{`
               @keyframes gradientMove {
                   0% {
                       background-position: 0% 50%;
                   }
                   100% {
                       background-position: 100% 50%;
                   }
               }
              
               .progress-bar {
                   background: linear-gradient(90deg, #6C49B4 0%, #FB26DE 100%);
                   background-size: 200% auto;
               }
           `}</style>
        </div>
    );
};


export default ProgressBar;

