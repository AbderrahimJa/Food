import { useState, useEffect } from 'react';
import i1 from './images/s-1.png';
import I1 from './images/s-img-1.jpg';
import i2 from './images/s-2.png';
import I2 from './images/s-img-2.jpg';
import i3 from './images/s-3.png';
import I3 from './images/s-img-3.jpg';
import i4 from './images/s-4.png';
import I4 from './images/s-img-4.jpg';
import i5 from './images/s-5.png';
import I5 from './images/s-img-5.jpg';
import i6 from './images/s-6.png';
import I6 from './images/s-img-6.jpg';

const Speciality = () => {
    const [ foods, setfoods] = useState(null);
    useEffect( () => {
        fetch('http://localhost:8000/foods')
        .then( res => {
            return res.json();
        })
        .then( data => {
            setfoods(data);
        });
    },[]);
    return(
        <section className="speciality" id="speciality">
            <h1 className="heading"> our <span>speciality</span></h1>
            <div className="box-container">
                { foods && foods.map( (food) => (
                    <div className="box" key={food.id}>
                        <img className="image" src={food.img} alt="" />                        
                        <div className="content">
                            <img src={food.img} alt="" />
                            <h3>{food.name}</h3>
                            <p>{food.description}</p>
                        </div>
                    </div>
                ))}
                <div className="box">
                    <img className="image" src={I1} alt="" />
                    <div className="content">
                        <img src={i1} alt="" />
                        <h3>Burger</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src={I1} alt="" />
                    <div className="content">
                        <img src={i1} alt="" />
                        <h3>Burger</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src={I2} alt="" />
                    <div className="content">
                        <img src={i2} alt="" />
                        <h3>Pizza</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src={I3} alt="" />
                    <div className="content">
                        <img src={i3} alt="" />
                        <h3>Ice-cream</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src={I4} alt="" />
                    <div className="content">
                        <img src={i4} alt="" />
                        <h3>Drinks</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src={I5} alt="" />
                    <div className="content">
                        <img src={i5} alt="" />
                        <h3>Sweets</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src={I6} alt="" />
                    <div className="content">
                        <img src={i6} alt="" />
                        <h3>Breakfast</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Speciality;