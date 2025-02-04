import React from 'react';
import '../styles/resultpage.css';
import { IoMdRefresh } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
import { GiCoffeeCup } from "react-icons/gi";




const ResultPage = ({
                        setStep,
                        selectedGames,
                        selectedProcessor,
                        selectedBundkort,
                        selectedGraphic,
                        selectedRam,
                        selectedKøling,
                        selectedStorage,
                        selectedStrømforsyning,
                        selectedKabinet,
                    }) => {
    const renderComponent = (title, component, key, imageSide) => {
        if (!component) return null;

        return (
            <div
                className={`row m-4 component-card ${imageSide === 'right' ? 'flex-row-reverse' : ''}`}
                key={key}
            >
                <div className="col-md-1">
                    <div className="image-wrapper">
                        <img
                            src={component.meta?.hardware_img}
                            alt={component.title}
                            className="img-fluid component-image"
                        />
                    </div>
                </div>
                <div className="col-md-9 d-flex flex-column text-white">
                    <h4 className="mb-3">
                        <strong>{title}</strong> - {component.title}
                    </h4>
                    <p className="">{component.meta?.description}</p>
                    {component.meta?.price_link && (
                        <a
                            href={component.meta.price_link}
                            className="text-white align-self-start"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Se priser på PriceRunner <span className="mx-2"><FaExternalLinkAlt/></span>
                        </a>
                    )}
                </div>
            </div>
        );
    };


    const shareWithFriend = () => {
        const urlToShare = `${window.location.origin}/resultpage?processor=${encodeURIComponent(selectedProcessor?.title || "ukendt")}&ram=${encodeURIComponent(selectedRam?.title || "ukendt")}&gpu=${encodeURIComponent(selectedGraphic?.title || "ukendt")}`;

        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;

        window.open(
            facebookShareUrl,
            '_blank',
            'width=600,height=400,left=200,top=200,scrollbars=no,resizable=no'
        );
    };


    const renderSelectedGames = () => {
        if (!selectedGames || selectedGames.length === 0) return null;

        return (
            <div className="selected-games-section d-flex justify-content-center text-center my-4">
                <div className="row d-flex justify-content-center">
                    {selectedGames.map((game, index) => (
                        <div
                            className="px-0 mx-2 col-md-3 position-relative gameselect-card"
                            key={index}
                        >
                            <img
                                src={game.meta.game_img}
                                alt={game.title}
                                className="img-fluid shadow float-start justify-content-center object-fit-cover game-image"
                            />
                            <div className="overlay">
                                <span className="fps-counter">FPS: 250+ </span>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        );
    };



    return (
        <div className="result-container my-5 d-flex justify-content-center">
            <div className="container-fluid d-flex flex-column align-items-center">
                {/* Overskrift */}
                <h1 className="my-4 text-center text-white"><span className={'text-purple '}>Tillykke!</span> - Her er
                    din perfekte computer!</h1>
                <p className={'text-center text-white fw-light max-w fs-5'}>Vi har samlet <span
                    className={'fw-bold text-purple'}>dine valg</span> for at skabe den bedste <span
                    className={'fw-bold text-purple'}>computer</span> til dig! Dette er de dele vi mener din ønsket
                    computer burde bestå af!</p>

                {/* Spillene øverst */}
                {renderSelectedGames()}

                {/* Komponenter */}
                <div className="row card-container">
                    <div
                        className="row pl-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 d-flex justify-content-center">
                        {renderComponent("Processor", selectedProcessor, "processor", "left")}
                        {renderComponent("Grafikkort", selectedGraphic, "graphic", "right")}
                        {renderComponent("Køling", selectedKøling, "cooling", "left")}
                        {renderComponent("Strømforsyning", selectedStrømforsyning, "power", "right")}
                    </div>

                    <div
                        className="row pl-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 d-flex justify-content-center">
                        {renderComponent("Bundkort", selectedBundkort, "motherboard", "left")}
                        {renderComponent("RAM", selectedRam, "ram", "right")}
                        {renderComponent("Lagring", selectedStorage, "storage", "left")}
                        {renderComponent("Kabinet", selectedKabinet, "cabinet", "right")}
                    </div>
                </div>
                <div className="result-button-container ms-md-3 d-flex justify-content-center mt-4">
                    <button
                        className="fw-medium result-button py-2 d-flex align-items-center ms-3"
                        onClick={() => window.open('mobilepay://send?phone=27211052&amount=20', '_blank')}
                    >
                        Donér en kaffe
                        <div className="ms-2 mb-1 fs-5">
                            <GiCoffeeCup/>
                        </div>
                    </button>
                </div>

                <div className="result-button-container ms-md-3 d-flex justify-content-center mt-4">
                    <button
                        className="fw-medium py-2 result-btn-reset d-flex align-items-center"
                        onClick={() => setStep(1)} // Naviger til GameSelection (første trin)
                    >
                        Byg forfra
                        <div className={'ms-2 fs-5'}>
                            <IoMdRefresh/>
                        </div>
                    </button>
                    <button
                        className="fw-medium result-button py-2 d-flex align-items-center ms-3"
                        onClick={shareWithFriend} // Kald funktionen
                    >
                        Del Med En Ven
                        <div className={'ms-2 mb-1 fs-5'}>
                            <GrShareOption/>
                        </div>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ResultPage;
