import { Link } from 'react-router-dom';
import imge from './images/home-img.png' ;

const Section = () => {
    return(
        <section className="home" id="home">
            <div className="content">
                <h3>delicious food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus cum optio vel sequi quo laborum, ex blanditiis nam mollitia accusamus pariatur explicabo cupiditate hic facere illo temporibus doloremque dolorum aliquam.</p>
                <Link to="/Menu" className="btn">order now</Link>
            </div>
            <div className="image">
                <img src={imge} alt="" />
            </div>
        </section>
    );
}

export default Section;