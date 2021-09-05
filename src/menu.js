import { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
// import i1 from './images/p-1.jpg';
// import i2 from './images/p-2.jpg';
// import i3 from './images/p-3.jpg';
// import i4 from './images/p-4.jpg';
// import i5 from './images/p-5.jpg';
// import i6 from './images/p-6.jpg';

const Menu = () => {
    const [ foods1, setfoods1 ] = useState();
    const [ foods, setfoods ] = useState([]);
    const [ list1, setlist1 ] = useState([]);
    const [ cpt, setcpt ] = useState(0);
    const [ totale, settotale ] = useState(0);
    useEffect( () => {
        fetch('http://localhost:8000/foods')
        .then( (res) => res.json() )
        .then( (data) => {            
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                // console.warn(element);
                setfoods( (prev) => {
                    return [ { id:element.id, ide:i, name:element.name, price:element.price, ingredients:element.ingredients, img:element.img, description:element.description }, ...prev]
                });
                setcpt(i);
            }
            // setfoods(data);
        })
        .catch( (error) => console.error(error));
    },[]);
    const fun2 = ( a , x ) => {
        if( list1.length != 0 ){
            if( list1.some( s => s.nom === a ) ){
                const c = list1;
                setlist1([]);
                setnewWhat([]);
                var e = 0 ;
                for (let i = 0; i < c.length; i++) {
                    const element = c[i];
                    if ( element.nom == a ) {
                        setlist1( (prev) => {
                            return [ {nom:element.nom, q:x.target.value, p:element.p}, ...prev]
                        });
                        setnewWhat( (prev) => [ {name:element.nom, quantite:x.target.value}, ...prev] );
                        e += Number(Number(x.target.value)*Number(element.p));
                        settotale(e);
                        setnewPrixTotale(e);
                    }else{
                        setlist1( (prev) => {
                            return [ {nom:element.nom, q:element.q, p:element.p}, ...prev]
                        });
                        setnewWhat( (prev) => [ {name:element.nom, quantite:element.q}, ...prev] );
                        e += Number(Number(element.q)*Number(element.p));
                        settotale(e);
                        setnewPrixTotale(e);
                    }
                }
            }
        }
    }
    const fun = ( a , x , y ) => {
        var t = document.getElementsByClassName('quan');
        if( list1.length != 0 ){
            if( !list1.some( s => s.nom === a.target.value)){
                setlist1( (prev) => {
                    return [ {nom:a.target.value, q:t[cpt-x].value, p:y}, ...prev]
                });
                setnewWhat( (prev) => [ {name:a.target.value, quantite:t[cpt-x].value}, ...prev] );
                settotale(totale+Number(t[cpt-x].value)*Number(y));
                setnewPrixTotale(totale+Number(t[cpt-x].value)*Number(y));
            }else{
                const c = list1;
                setlist1([]);
                setnewWhat([]);
                var e = totale;
                for (let i = 0; i < c.length; i++) {
                    const element = c[i];
                    if (element.nom!=a.target.value) {
                        setlist1( (prev) => {
                            return [ {nom:element.nom, q:element.q, p:element.p}, ...prev]
                        });
                        setnewWhat( (prev) => [ {name:element.nom, quantite:element.q}, ...prev] );
                    }else{
                        e -= Number(element.q)*Number(y);
                        settotale(e);
                        setnewPrixTotale(e);
                    }
                }
            }
        }else{
            const v = t[cpt-x].value;
            setlist1([{nom:a.target.value, q:v, p:y}]);
            setnewWhat([{name:a.target.value, quantite:v}]);
            settotale(totale+Number(t[cpt-x].value)*Number(y));
            setnewPrixTotale(totale+Number(t[cpt-x].value)*Number(y));
        }
    }
    const [ newWhat, setnewWhat ] = useState([]);
    const [ newPrixTotale, setnewPrixTotale ] = useState("");
    const [ newCommentaire, setnewCommentaire ] = useState("");
    const Ajouter = () => {
        const a = { what:newWhat, prixTotale:newPrixTotale, Commentaire:newCommentaire, status: "Recive" };
        fetch('http://localhost:8000/orders/',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(a)
        })
        .then( console.warn(a) )
        .then( () => {
            setnewWhat("");
            setnewPrixTotale("");
            setnewCommentaire("");
        });
        // .then( window.location.reload() );
    }
    return(
        <section className="popular" id="popular">
            <h1 className="heading1"> most <span> popular </span> foods </h1>
            <div className="popular1">
            <div className="box-container left takoo">
                { foods && foods.map( (food) => (
                    <div className="box">
                        <span className="price"> ${food.price} </span>
                        {/* <span className="check"><input type="checkbox" id="option" /></span> */}
                        <img src={food.img} alt="" />
                        <h3>{food.name}</h3>
                        <span className="quantite">
                            <input type="number" defaultValue="1" className="quan" onChange={(e) => fun2(food.name,e)} min="1" max="8" />
                        </span>
                        {/* <a href="#" className="btn">order now</a> */}
                        <span className="check">
                            {/* <input type="checkbox" name={food.name} onChange={fun(food.name)}/> */}
                            <Checkbox color="primary" value={food.name} onChange={(e) => { fun(e,food.ide,food.price); }} />
                        </span>
                        {/* <h2>{cpt}</h2> */}
                        {/* { () => setcpt(cpt+1)} */}
                    </div>
                ))}
            </div>
            { list1.length!=0 && <div className="right">
                <h1> Factora : </h1>
                <table>
                    <tbody>
                        { list1.map( (m) => (
                            <tr>
                                <td><h1>{ m.q+" "+m.nom }</h1></td>
                                <td className="w"><h1>x ${ m.p }</h1></td>
                                <td className="w"><h1>${ Number(Number(m.q)*Number(m.p)) }</h1></td>
                            </tr>
                        ))}
                        <br />
                        { list1 && totale!=0 && (
                            <tr>
                                <td><h1 className="tot">totale</h1></td>
                                <td></td>
                                <td className="w"><h1 className="tot">${totale}</h1></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br />
                <br />
                <br />
                {/* <form> */}
                <div className="form-group com">
                    <h1>Commentaire : </h1>
                    {/* <textarea className="form-control form-control-lg" id="" rows="3"></textarea> */}
                    <textarea placeholder="" className="rr" id="" cols="30" rows="10" value={newCommentaire} onChange={ (e) => setnewCommentaire(e.target.value) }></textarea>
                    <div className="col-12 btns">
                        <button onClick={ () => Ajouter() } className="btn">Order</button>
                    </div>
                </div>
                {/* </form> */}
            </div> }
            </div>
        </section>
    );
}

export default Menu;