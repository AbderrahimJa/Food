import { Link } from 'react-router-dom';

const Head = () => {
    const Show = () => {
        document.querySelector('#menu-bar').classList.toggle('fa-times');
        document.querySelector('.navbar2').classList.toggle('active');
    }
    window.onscroll = () => {
        document.querySelector('#menu-bar').classList.remove('fa-times');
        document.querySelector('.navbar2').classList.remove('active');
    }
    return(
        <header>
            {/* <Link to="/" className="logo"> */}
                <a href="" className="logo"><i className="fas fa-utensils"></i>food</a>
            {/* </Link> */}
            <div id="menu-bar" className="fas fa-bars" onClick={Show}></div>
            <nav className="navbar2">
                <Link to="/">home</Link>
                {/* <Link to="/"><a href="#home"></a></Link> */}
                {/* <Link to="#speciality"> */}
                    <a href="#speciality">Speciality</a>
                    {/* </Link> */}
                {/* <Link to="/"> */}
                <a href="#gallery">Gallery</a>
                    {/* </Link> */}
                <Link to="/Menu">Menu</Link>
                <Link to="/Connexion">Connexion</Link>
                {/* <a href="#order">order</a> */}
            </nav>
        </header>
    );
}

export default Head;