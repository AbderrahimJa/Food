import i1 from './images/step-1.jpg';
import i2 from './images/step-2.jpg';
import i3 from './images/step-3.jpg';
import i4 from './images/step-4.jpg';

const Steps = () => {
    return(
        <div className="step-container">
            <h1 className="heading">how it <span>works</span></h1>
            <section className="steps">
                <div className="box">
                    <img src={i1} alt="" />
                    <h3>choose your favorite food</h3>
                </div>
                <div className="box">
                    <img src={i2} alt="" />
                    <h3>free and fast delivery</h3>
                </div>
                <div className="box">
                    <img src={i3} alt="" />
                    <h3>easy payments methods</h3>
                </div>
                <div className="box">
                    <img src={i4} alt="" />
                    <h3>and finally, enjoy your food</h3>
                </div>
            </section>
        </div>
    );
}

export default Steps;