import { Link } from 'react-router-dom';
import i1 from './images/g-1.jpg';
import i2 from './images/g-2.jpg';
import i3 from './images/g-3.jpg';
import i4 from './images/g-4.jpg';
import i5 from './images/g-5.jpg';
import i6 from './images/g-6.jpg';
import i7 from './images/g-7.jpg';
import i8 from './images/g-8.jpg';
import i9 from './images/g-9.jpg';

const Galery = () => {
    return(
        <section className="gallery" id="gallery">
            <h1 className="heading"> our food <span> gallery </span> </h1>
            <div className="box-container">
                <div className="box">
                    <img src={i1} alt="" />
                    <div className="content">
                        <h3>Food</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                        <Link to="/Menu" className="btn">order now</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={i2} alt="" />
                    <div className="content">
                        <h3>Food</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                        <Link to="/Menu" className="btn">order now</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={i3} alt="" />
                    <div className="content">
                        <h3>Food</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                        <Link to="/Menu" className="btn">order now</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={i4} alt="" />
                    <div className="content">
                        <h3>Food</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                        <Link to="/Menu" className="btn">order now</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={i5} alt="" />
                    <div className="content">
                        <h3>Food</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                        <Link to="/Menu" className="btn">order now</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={i6} alt="" />
                    <div className="content">
                        <h3>Food</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                        <Link to="/Menu" className="btn">order now</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={i7} alt="" />
                    <div className="content">
                        <h3>Food</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                        <Link to="/Menu" className="btn">order now</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={i8} alt="" />
                    <div className="content">
                        <h3>Food</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                        <Link to="/Menu" className="btn">order now</Link>
                    </div>
                </div>
                <div className="box">
                    <img src={i9} alt="" />
                    <div className="content">
                        <h3>Food</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                        <Link to="/Menu" className="btn">order now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Galery;