import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Head2 = () => {
    const colorFun2 = () => {
        document.querySelector('.lnk1').classList.add('clr1');
        document.querySelector('.lnk2').classList.add('clr2');
        document.querySelector('.lnk2').classList.remove('clr1');
        document.querySelector('.lnk1').classList.remove('clr2');
    }
    const colorFun1 = () => {
        document.querySelector('.lnk2').classList.add('clr1');
        document.querySelector('.lnk1').classList.remove('clr1');
        document.querySelector('.lnk1').classList.add('clr2');
        document.querySelector('.lnk2').classList.remove('clr2');
    }
    return(
        <section className="AdSp2">
            <div className="headC2">
                <Link to="/Space/Menu/" className="lnk1 clr2" onClick={ () => colorFun1() }><a><h1>Menu</h1></a></Link>
                <Link to="/Space/Orders/" className="lnk2 clr1" onClick={ () => colorFun2() }><a><h1>Orders</h1></a></Link>
            </div>
            <hr/>
        </section>
    );
}

export default Head2;