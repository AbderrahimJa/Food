import i1 from './images/pic1.png';
import i2 from './images/pic2.png';
import i3 from './images/pic3.png';

const Review = () => {
    return(
        <section className="review" id="review">
            <h1 className="heading"> our customers <span>reviews</span> </h1>
            <div className="box-container">
                <div className="box">
                    <img src={i1} alt="" />
                    <h3>Someone</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
                </div>
                <div className="box">
                    <img src={i2} alt="" />
                    <h3>Someone</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
                </div>
                <div className="box">
                    <img src={i3} alt="" />
                    <h3>Someone</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
                </div>
            </div>
        </section>
    );
}

export default Review;