import '../App.css';
import '../styles/homepage.css';
import Cpu from '../image/cpu.png';
import Gaming from '../image/gaming.png';
import Office from '../image/office.png';
import Office2 from '../image/office2.png';
import ScrollProgressBar from '../components/progressbar';

function Homepage({onStart}) {





    return (
        <div className="container-fluid m-0 p-0">
            <div className="row m-0 p-0">


                <div className="subnav col-1 col-md-1">
                    <div className="social-box position-absolute position-fixed ms-1 bottom-0 mb-3 row d-none d-md-block">
                        {/* md and above version */}
                        <div className="mb-5 socials-box"><i className="bi bi-instagram text-white socials p-2 py-1" style={{fontSize: '1.3rem'}}></i></div>
                        <div className="mb-5 socials-box"><i className="bi bi-linkedin text-white socials p-2 py-1" style={{fontSize: '1.3rem'}}></i></div>
                        <div className="mb-5 socials-box"><i className="bi bi-twitter text-white socials p-2 py-1" style={{fontSize: '1.3rem'}}></i></div>
                    </div>

                </div>


                <div className="main col col-md-7 pt-md-10 pt-6">
                    <div className="social-box d-flex my-4 position-absolute bottom-0 ms-md-6 d-md-none">
                        {/* Phone version */}
                        <div><i className="bi bi-instagram text-white socials p-2 py-1" style={{fontSize: '1.3rem'}}></i></div>
                        <div><i className="bi bi-linkedin text-white mx-md-5 mx-4 socials p-2 py-1" style={{fontSize: '1.3rem'}}></i></div>
                        <div><i className="bi bi-twitter text-white socials p-2 py-1" style={{fontSize: '1.3rem'}}></i></div>
                    </div>


                    <div className="pt-5 ps-md-5 col-md-6 ms-5">
                        {/* Phone version */}
                        <h5 className="pb-2 text-white d-md-none" style={{fontWeight: 'normal'}}><i className="bi bi-wrench-adjustable pe-3"></i>Byg din egen pc nu!</h5>
                        <h2 className="pb-2 text-white d-md-none" style={{fontWeight: 'bold'}}><span style={{color: 'mediumpurple'}}>Pc-Bygning</span> Som Giver Mening </h2>
                        <h6 className="pb-3 text-white d-md-none" style={{fontWeight: 'lighter', lineHeight: '1.6rem'}}>VI fjerner kompleksitet og gør pc-bygnings processen simpel for dig!</h6>
                        <h6 className="text-white d-md-none" style={{fontWeight: 'lighter', lineHeight: '1.6rem'}}>Start din PC-bygning nu</h6>
                        {/* md and above version */}
                        <h5 className="pb-2 text-white d-none d-md-block" style={{fontWeight: 'normal'}}><i className="bi bi-wrench-adjustable pe-3"></i>Byg din egen pc nu!</h5>
                        <h1 className="pb-3 text-white d-none d-md-block" style={{fontWeight: 'bold'}}><span style={{color: 'mediumpurple',lineHeight: '4.4rem'}}>Pc-Bygning</span> Som Giver Mening </h1>
                        <h5 className="pb-3 text-white d-none d-md-block" style={{fontWeight: 'lighter', lineHeight: '2.3rem'}}>VI fjerner kompleksitet og gør pc-bygnings processen simpel for dig!</h5>
                        <h5 className="text-white d-none d-md-block" style={{fontWeight: 'lighter', lineHeight: '2rem'}}>Start din PC-bygning nu</h5>


                        <div className="front-btn m-0 col-md-3 mt-5 mt-md-5">
                            <h6 className="text-center btn-font py-3 py-md-3 m-0 "
                                onClick={onStart}
                                style={{fontSize: '0.9rem', cursor: 'pointer' }}>begynd at bygge! <i className="bi bi-wrench-adjustable btn-font ps-1"></i>
                            </h6>
                        </div>
                    </div>
                </div>


                <div className="submain d-none d-md-block col m-0 p-0">
                    <div className="mt-6">
                        <div className="row m-0 p-0 mt-3 col-9">
                            {/* frontpage-cards */}
                            <div className="image-card-home col position-relative m-0 p-0 me-3 ">
                                <img src={Gaming} alt="image" className="imgs"/>
                            </div>
                            <div className="image-card-home col position-relative m-0 p-0 ">
                                <img src={Office} alt="image" className="imgs"/>
                            </div>
                        </div>


                        <div className="row mt-3 m-0 p-0 col-9 mt-2 ">
                            <div className="image-card-home col position-relative m-0 p-0 me-3">
                                <img src={Cpu} alt="image" className="imgs"/>
                            </div>
                            <div className="image-card-home col position-relative m-0 p-0 ">
                                <img src={Office2} alt="image" className="imgs"/>
                            </div>
                            {/* frontpage-hvem-er-vi */}
                            <div className="p-0">
                                <div className="bg-white col mt-3 m-0">
                                    <div className="rounded-5 ms-2 pt-3"><i className="bi bi-megaphone-fill bg-custom rounded-5 px-3 py-2 text-white" style={{fontSize: '2rem'}}></i></div>
                                    <h3 className="text-center" style={{fontWeight: 'bold'}}>Hvem er vi?</h3>
                                    <h6 className="mt-1 ms-4 me-4 pb-5 color-custom mb-4 text-center" style={{fontWeight: 'normal', lineHeight: '2.2rem'}}>"Vi hjælper dig med at bygge den computer der passer dig
                                        bedst, uden alt den tekniske snak! Anvnd en af vores pc-bygnings guide og samle din nye pc!"</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="rejsebg col-12">
                <div className="row m-0 p-0">
                    {/* Phone version */}
                    <h2 className="pb-2 text-white text-center mt-5 d-md-none" style={{fontWeight: 'bold'}}><span
                        style={{color: 'mediumpurple'}}>Vælg</span> din rejse</h2>

                    <div className="pt-4">
                        <div className="row justify-content-center m-0 p-0">
                            {/* card-1 */}
                            <div className="row m-0 p-0 d-md-none bg-white">
                                <div className="col-10 ">
                                    <div className="rounded-5 mt-4 ms-2"><i
                                        className="bi bi-joystick bg-custom rounded-5 px-3 py-2 text-white"
                                        style={{fontSize: '2rem'}}></i></div>
                                    <h1 className="mt-4 ms-3 me-2 color-custom" style={{fontWeight: 'bolder'}}>Byg din
                                        Workstation</h1>
                                    <h5 className="ms-3 mt-4 color-custom "
                                        style={{fontWeight: 'bold', lineHeight: '1.8rem'}}>Begynd af bygge din egen
                                        arbejds pc nu, ved hjælp af vores guide</h5>
                                </div>

                                <div className="">
                                    <div className="row m-0 p-0">
                                        <div className="col-12 mb-2">
                                            <h5 className="mt-2 ms-3 me-2 color-custom mb-4"
                                                style={{fontWeight: 'normal', lineHeight: '3rem'}}>"Din personliggjort
                                                computer venter dig. Byg din egen computer, ved hjælp at vores
                                                brugerrejse"</h5>
                                        </div>
                                        <div className="col">
                                            <div className="rejse-btn m-0 ms-5 mt-2 mb-3">
                                                <h6 className="text-center btn-font py-3 py-md-3 m-0 " onClick={onStart}
                                                    style={{fontSize: '0.9rem', cursor: 'pointer'}}>BYG NU! ><i
                                                    className="bi bi-wrench-adjustable btn-rejse ps-1"></i></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card-2 */}
                            <div className="row m-0 p-0 d-md-none bg-white mt-3">
                                <div className="col-10 ">
                                    <div className="rounded-5 mt-4 ms-2"><i
                                        className="bi bi-joystick bg-custom rounded-5 px-3 py-2 text-white"
                                        style={{fontSize: '2rem'}}></i></div>
                                    <h1 className="mt-4 ms-3 me-2 color-custom" style={{fontWeight: 'bolder'}}>Byg din
                                        Workstation</h1>
                                    <h5 className="ms-3 mt-4 color-custom "
                                        style={{fontWeight: 'bold', lineHeight: '1.8rem'}}>Begynd af bygge din egen
                                        arbejds pc nu, ved hjælp af vores guide</h5>
                                </div>

                                <div className="">
                                    <div className="row m-0 p-0">
                                        <div className="col-12 mb-2">
                                            <h5 className="mt-2 ms-3 me-2 color-custom mb-4"
                                                style={{fontWeight: 'normal', lineHeight: '3rem'}}>"Din personliggjort
                                                computer venter dig. Byg din egen computer, ved hjælp at vores
                                                brugerrejse"</h5>
                                        </div>
                                        <div className="col">
                                            <div className="rejse-btn m-0 ms-5 mt-2 mb-3">
                                                <h6 className="text-center btn-font py-3 py-md-3 m-0 " onClick={onStart}
                                                    style={{fontSize: '0.9rem', cursor: 'pointer'}}>BYG NU! ><i
                                                    className="bi bi-wrench-adjustable btn-rejse ps-1"></i></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card-3 */}
                            <div className="row m-0 p-0 d-md-none bg-white mt-3">
                                <div className="col-10 ">
                                    <div className="rounded-5 mt-4 ms-2"><i
                                        className="bi bi-joystick bg-custom rounded-5 px-3 py-2 text-white"
                                        style={{fontSize: '2rem'}}></i></div>
                                    <h1 className="mt-4 ms-3 me-2 color-custom" style={{fontWeight: 'bolder'}}>Byg din
                                        Workstation</h1>
                                    <h5 className="ms-3 mt-4 color-custom "
                                        style={{fontWeight: 'bold', lineHeight: '1.8rem'}}>Begynd af bygge din egen
                                        arbejds pc nu, ved hjælp af vores guide</h5>
                                </div>

                                <div className="">
                                    <div className="row m-0 p-0">
                                        <div className="col-12 mb-2">
                                            <h5 className="mt-2 ms-3 me-2 color-custom mb-4"
                                                style={{fontWeight: 'normal', lineHeight: '3rem'}}>"Din personliggjort
                                                computer venter dig. Byg din egen computer, ved hjælp at vores
                                                brugerrejse"</h5>
                                        </div>
                                        <div className="col">
                                            <div className="rejse-btn m-0 ms-5 mt-2 mb-3">
                                                <h6 className="text-center btn-font py-3 py-md-3 m-0 " onClick={onStart}
                                                    style={{fontSize: '0.9rem', cursor: 'pointer'}}>BYG NU! ><i
                                                    className="bi bi-wrench-adjustable btn-rejse ps-1"></i></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card-3 */}
                            <div className="row m-0 p-0 d-md-none bg-white mt-3">
                                <div className="col-10 ">
                                    <div className="rounded-5 mt-4 ms-2"><i
                                        className="bi bi-joystick bg-custom rounded-5 px-3 py-2 text-white"
                                        style={{fontSize: '2rem'}}></i></div>
                                    <h1 className="mt-4 ms-3 me-2 color-custom" style={{fontWeight: 'bolder'}}>Byg din
                                        Workstation</h1>
                                    <h5 className="ms-3 mt-4 color-custom "
                                        style={{fontWeight: 'bold', lineHeight: '1.8rem'}}>Begynd af bygge din egen
                                        arbejds pc nu, ved hjælp af vores guide</h5>
                                </div>

                                <div className="">
                                    <div className="row m-0 p-0">
                                        <div className="col-12 mb-2">
                                            <h5 className="mt-2 ms-3 me-2 color-custom mb-4"
                                                style={{fontWeight: 'normal', lineHeight: '3rem'}}>"Din personliggjort
                                                computer venter dig. Byg din egen computer, ved hjælp at vores
                                                brugerrejse"</h5>
                                        </div>
                                        <div className="col">
                                            <div className="rejse-btn m-0 ms-5 mt-2 mb-3">
                                                <h6 className="text-center btn-font py-3 py-md-3 m-0 " onClick={onStart}
                                                    style={{fontSize: '0.9rem', cursor: 'pointer'}}>BYG NU! ><i
                                                    className="bi bi-wrench-adjustable btn-rejse ps-1"></i></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*Above version */}
                    <h1 className="pb-2 text-white text-center mt-5 d-none d-md-block" style={{fontWeight: 'bold'}}>
                        <span style={{color: 'mediumpurple'}}>Vælg</span> din rejse</h1>

                    <div className="container col-7 mt-4 d-none d-md-block">
                        <div className="row">
                            {/*card gaming */}
                            <div className="col card-rb mt-3 bg-white">
                                <div className="rounded-5 mt-4 ms-2"><i
                                    className="bi bi-joystick bg-custom rounded-5 px-3 py-2 text-white"
                                    style={{fontSize: '2rem'}}></i></div>
                                <h1 className="mt-4 ms-3 me-2 color-custom" style={{fontWeight: 'bolder'}}>Byg din
                                    Gaming PC</h1>
                                <h5 className="ms-3 mt-4 color-custom "
                                    style={{fontWeight: 'bold', lineHeight: '1.8rem'}}>Begynd af bygge din egen gaming
                                    pc nu, ved hjælp af vores guide</h5>
                                <h5 className="mt-4 ms-3 me-2 color-custom "
                                    style={{fontWeight: 'normal', lineHeight: '3rem'}}>"Din personliggjort computer
                                    venter dig.
                                    Byg din egen computer, ved hjælp at vores brugerrejse"</h5>
                                <div className="justify-content-center d-flex">
                                    <div className="rejse-btn mt-5 mb-5">
                                        <h6 className="text-center btn-font py-3 py-md-3 m-0 "
                                            onClick={onStart} style={{fontSize: '0.9rem', cursor: 'pointer'}}>BYG NU!<i
                                            className="bi bi-wrench-adjustable btn-rejse ps-1"></i></h6>
                                    </div>
                                </div>
                            </div>
                            {/*card streaming */}
                            <div className="col card-rb mt-3 mx-3 opacity-75 bg-white">
                                <div className="rounded-5 mt-4 ms-2"><i
                                    className="bi bi-twitch bg-custom rounded-5 px-3 py-2 text-white"
                                    style={{fontSize: '2rem'}}></i></div>
                                <h1 className="mt-4 ms-3 me-2 color-custom" style={{fontWeight: 'bolder'}}>Byg din
                                    Streaming PC</h1>
                                <h5 className="ms-3 mt-4 color-custom "
                                    style={{fontWeight: 'bold', lineHeight: '1.8rem'}}>Begynd af bygge din egen
                                    streaming pc nu, ved hjælp af vores guide</h5>
                                <h5 className="mt-4 ms-3 me-2 color-custom "
                                    style={{fontWeight: 'normal', lineHeight: '3rem'}}>"Din personliggjort computer
                                    venter dig. Byg din egen computer, ved hjælp at vores brugerrejse"</h5>
                                <div className="justify-content-center d-flex">
                                    <div className="rejse-btn mt-5 mb-5">
                                        <h6 className="text-center btn-font py-3 py-md-3 m-0 bg-custom text-white"
                                            onClick={onStart} style={{fontSize: '0.9rem', cursor: 'pointer'}}>Kommer
                                            snart<i className="bi bi-wrench-adjustable btn-rejse ps-1"></i></h6>
                                    </div>
                                </div>
                            </div>
                            {/*card work */}
                            <div className="col card-rb mt-3 opacity-75 bg-white">
                                <div className="rounded-5 mt-4 ms-2"><i
                                    className="bi bi-pc-display bg-custom rounded-5 px-3 py-2 text-white"
                                    style={{fontSize: '2rem'}}></i></div>
                                <h1 className="mt-4 ms-3 me-2 color-custom" style={{fontWeight: 'bolder'}}>Byg din
                                    Workstation</h1>
                                <h5 className="ms-3 mt-4 color-custom "
                                    style={{fontWeight: 'bold', lineHeight: '1.8rem'}}>Begynd af bygge din egen arbejds
                                    pc nu, ved hjælp af vores guide</h5>
                                <h5 className="mt-4 ms-3 me-2 color-custom "
                                    style={{fontWeight: 'normal', lineHeight: '3rem'}}>"Din personliggjort computer
                                    venter dig. Byg din egen computer, ved hjælp at vores brugerrejse"</h5>
                                <div className="justify-content-center d-flex">
                                    <div className="rejse-btn mt-5 mb-5">
                                        <h6 className="text-center btn-font py-3 py-md-3 m-0 bg-custom text-white"
                                            onClick={onStart} style={{fontSize: '0.9rem', cursor: 'pointer'}}>Kommer
                                            snart<i className="bi bi-wrench-adjustable btn-rejse ps-1"></i></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid m-0 p-0">
                            <div className="row ">
                                <div className="bg-white mt-3 mb-5">

                                    <div className="">
                                        <div className="mt-4 ms-2"><i className="bi bi-pc-display bg-custom rounded-5 px-3 py-2 text-white" style={{fontSize: '2rem'}}></i></div>
                                    </div>
                                    {/*card other */}
                                    <div className="row m-0 p-0">
                                        <div className="col-8">
                                            <h1 className="mt-4 ms-3 me-2 color-custom"
                                                style={{fontWeight: 'bolder'}}>Byg din Workstation</h1>
                                            <h5 className="ms-3 mt-4 color-custom "
                                                style={{fontWeight: 'bold', lineHeight: '1.8rem'}}>Begynd af bygge din
                                                egen arbejds pc nu, ved hjælp af vores guide</h5>
                                        </div>

                                        <div className="">
                                            <div className="row m-0 p-0">
                                                <div className="col-8 mb-2">
                                                    <h5 className="mt-2 ms-3 me-2 color-custom mb-4"
                                                        style={{fontWeight: 'normal', lineHeight: '3rem'}}>"Din
                                                        personliggjort computer venter dig.
                                                        Byg din egen computer, ved hjælp at vores brugerrejse"</h5>
                                                </div>

                                                <div className="col-4">
                                                    <div className="rejse-btn m-0 ms-5 mt-5">
                                                        <h6 className="text-center btn-font py-3 py-md-3 m-0 "
                                                            onClick={onStart}
                                                            style={{fontSize: '0.9rem', cursor: 'pointer'}}>BYG NU! ><i
                                                            className="bi bi-wrench-adjustable btn-rejse ps-1"></i></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*card other-end */}
                                </div>
                            </div>
                        </div>


                        <h2 className="pb-2 text-white text-center mt-2 mb-5 d-none d-md-block"
                            style={{fontWeight: 'normal'}}><i className="bi bi-compass-fill pe-3"></i> Din computer din<span
                            style={{color: 'mediumpurple'}}> rejse</span></h2>
                    </div>
                </div>

            </div>
        </div>


    );
}


export default Homepage;







