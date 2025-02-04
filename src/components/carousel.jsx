import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Carousel = ({ images, videoUrl, altText }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);


    // Handle previous image/video
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setShowVideo(false); // Reset to image when navigating
    };


    // Handle next image/video
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setShowVideo(true); // Switch to video when navigating
    };


    return (
        <div className="image-container position-relative w-100 h-100">
            {showVideo ? (
                <iframe
                    height="314px"
                    width="80%"
                    src={videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={altText}
                />
            ) : (
                <img className="graphics-image" src={images[currentIndex]} alt={altText} />
            )}


            {/* Navigation arrows */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                }}
                className="position-absolute top-50 start-0 translate-middle-y bg-transparent border-0 text-white"
                style={{ zIndex: 2 }}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                }}
                className="position-absolute top-50 end-0 translate-middle-y bg-transparent border-0 text-white"
                style={{ zIndex: 2 }}
            >
                <ChevronRight size={24} />
            </button>


            {/* Dots navigation */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 d-flex gap-2">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowVideo(false);
                    }}
                    className={`rounded-circle border-0 ${!showVideo ? 'bg-white' : 'bg-white opacity-50'}`}
                    style={{ width: '10px', height: '10px' }}
                />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowVideo(true);
                    }}
                    className={`rounded-circle border-0 ${showVideo ? 'bg-white' : 'bg-white opacity-50'}`}
                    style={{ width: '10px', height: '10px' }}
                />
            </div>
        </div>
    );
};


export default Carousel;

