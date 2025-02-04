import '../App.css';
import '../styles/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS with Popper.js








function Navbar() {






    return (


        <div className="pos-f-t navbar-style container-fluid p-0 m-0 nav-font">
            <div className="row m-0 p-0">
                {/* Phone version */}
                <div className="collapse p-0 m-0" id="navbarToggleExternalContent">
                    <div className="navbar-style justify-content-center d-flex pt-5 pb-5">
                        <div className="bg-nav nbg text-center d-flex row m-0 pt-3 pb-3">
                            <h4 className="text-white">Home</h4>
                            <h4 className="text-white pt-2 pb-2">Byg-en-pc</h4>
                            <h4 className="text-white">Om os</h4>
                        </div>
                    </div>
                </div>


                <nav className="navbar navbar-dark bg-dark ">
                    {/* Burger menu: visible only on small screens */}
                    <button
                        className="navbar-toggler d-md-none" // Visible only on small screens
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    {/* Standard navbar links: visible only on medium and larger screens */}
                    <div className="d-none d-md-flex pt-3 pb-3 ms-14 mt-1">
                        <a href="/" className="nav-link text-white ps-5"><i className="bi bi-house-door-fill pe-3"></i>Home</a>
                        <a href="/about" className="nav-link text-white ps-5 pe-5 ">Byg-en-pc</a>
                        <a href="/contact" className="nav-link text-white ">Om os</a>
                    </div>


                </nav>
            </div>
        </div>


    );
}


export default Navbar;


