import { useState, useEffect } from "react";
import './adminSpace.css';
import Modal from 'react-modal';

const AdminSpace = () => {
    const [ mod1, setmod1 ] = useState(false);
    const [ mod2, setmod2 ] = useState(false);
    const [ foods, setfoods ] = useState([]);
    const [ newName, setnewName ] = useState("");
    const [ newDescription, setnewDescription ] = useState("");
    const [ newPrice, setnewPrice ] = useState("");
    const [ newPic, setnewPic ] = useState("");
    const [ currentName, setcurrentName ] = useState("");
    const [ currentDescription, setcurrentDescription ] = useState("");
    const [ currentPrice, setcurrentPrice ] = useState("");
    const [ currentPic, setcurrentPic ] = useState("");
    const [ currentId, setcurrentId ] = useState("");
    const funOfFetch = () => {
        fetch('http://localhost:8000/foods')
        .then( (res) => res.json() )
        .then( (data) => setfoods(data) )
        .catch( (error) => console.error(error));
    }
    useEffect( () => {
        funOfFetch();
    },[]);
    const Ajouter = () => {
        const a = { name:newName, description:newDescription, price:newPrice, ingredients:[], img:Number(newPic) };
        fetch('http://localhost:8000/foods/',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(a)
        })
        .then( () => funOfFetch() )
        .then( () => {
            setnewPrice("");
            setnewPic("");
            setnewName("");
            setnewDescription("");
        })
        .then( () => setmod1(false) );
    }
    const open2 = (a,b,c,d,e) => {
        setcurrentId(e);
        setcurrentName(a);
        setcurrentPic(b);
        setcurrentPrice(d);
        setcurrentDescription(c);
        setmod2(true);
    }
    const Delete = (item) => {
        fetch('http://localhost:8000/foods/'+item ,{ method: 'DELETE' } )
        .then(response => response.json())
        .then( () => funOfFetch() );
    }
    const Edit = () => {
        const a = { name:currentName, description:currentDescription, price:currentPrice, ingredients:[], img:currentPic };
        fetch('http://localhost:8000/foods/'+currentId , {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(a)
        })
        .then( () => funOfFetch() )
        .then( () => setmod2(false) );
    }
    return(
        <section className="AdSp">
            <div className="headC1">
                {/* <div className="col-md-10"><h1>Menu</h1></div> */}
                {/* <div><h1>Menu</h1></div> */}
                {/* <div className="col-md-2"><button className="btn" data-bs-toggle="modal" data-bs-target="#modl">Ajouter</button></div> */}
                {/* <div className="col-md-2"><button type="button" className="btn" onClick={ () => setmod(true) }>Ajouter</button></div> */}
                <div><button type="button" className="btn" onClick={ () => { setmod1(true); setnewPrice(""); setnewPic(""); setnewName(""); setnewDescription(""); }}>Ajouter</button></div>
            </div>
            {/* <hr/> */}
            <div className="row">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        { foods && foods.map( (food) => 
                            <tr>
                                <th scope="row">{food.id}</th>
                                <td><img src={food.img}/></td>
                                <td>{food.name}</td>
                                <td>{food.price}</td>
                                <td>
                                    <i onClick={ () => Delete(food.id) } className='bi bi-trash mr-4 fa-lg'></i>
                                    <i onClick={ () => open2(food.name,food.img,food.description,food.price,food.id) } className='bi bi-pencil ml-4 fa-lg'></i>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Modal
                    isOpen={mod1}
                    onRequestClose={ () => setmod1(false) }
                    className="Modal"
                >
                    {/* <form className="row g-3"> */}
                    <div className="row g-3">
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label m-2">Name</label>
                            <input type="text" className="form-control form-control-lg" id="inputEmail4" required defaultValue={newName} onChange={ (e) => setnewName(e.target.value) } />
                        </div>
                        <div className="col-12">
                            <label for="inputDescription" className="form-label m-2">Description</label>
                            <input type="text" className="form-control form-control-lg" id="inputDescription" required defaultValue={newDescription} onChange={ (e) => setnewDescription(e.target.value) } />
                        </div>
                        <div className="col-12">
                            <label for="inputIngredients" className="form-label m-2">Ingredients</label>
                            <textarea placeholder="" name="" id="inputIngredients" rows="4" className="txtarea form-control"></textarea>
                        </div>
                        <div className="col-12">
                            <label for="inputPrice" className="form-label m-2">Price</label>
                            <input type="number" className="form-control form-control-lg" id="inputPrice" min="0.5" step="0.5" required defaultValue={newPrice} onChange={ (e) => setnewPrice(e.target.value) } />
                        </div>
                        <div className="col-12">
                            <label for="inputImg" className="form-label m-2">Picture</label>
                            <input type="file" className="form-control form-control-lg" id="inputImg" accept="image/png, image/gif, image/jpeg" lang="fr" defaultValue={newPic} onChange={ (e) => setnewPic(e.target.value) } required />
                        </div>
                        <div className="col-12 btns">
                            <button onClick={ () => setmod1(false) } className="btn">Close</button>
                            <button onClick={ () => Ajouter() } className="btn">Save</button>
                        </div>
                    </div>
                    {/* </form> */}
                </Modal>
                <Modal
                    isOpen={mod2}
                    onRequestClose={ () => setmod2(false) }
                    className="Modal"
                >
                    {/* <form className="row g-3"> */}
                    <div className="row g-3">
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label m-2">Name</label>
                            <input type="text" className="form-control form-control-lg" id="inputEmail4" required defaultValue={currentName} onChange={ (e) => setcurrentName(e.target.value) } />
                        </div>
                        <div className="col-12">
                            <label for="inputDescription" className="form-label m-2">Description</label>
                            <input type="text" className="form-control form-control-lg" id="inputDescription" required defaultValue={currentDescription} onChange={ (e) => setcurrentDescription(e.target.value) } />
                        </div>
                        <div className="col-12">
                            <label for="inputIngredients" className="form-label m-2">Ingredients</label>
                            {/* <h1>Ingredients</h1> */}
                            {/* <input type="text" className="form-control form-control-lg" id="inputAddress" placeholder="1234 Main St" /> */}
                            <textarea placeholder="" name="" id="inputIngredients" rows="4" className="txtarea form-control"></textarea>
                        </div>
                        <div className="col-12">
                            <label for="inputPrice" className="form-label m-2">Price</label>
                            <input type="number" className="form-control form-control-lg" id="inputPrice" min="0.5" step="0.5" required defaultValue={currentPrice} onChange={ (e) => setcurrentPrice(e.target.value) } />
                        </div>
                        <div className="col-12">
                            <label for="inputImg" className="form-label m-2">Picture</label>
                            <input type="file" className="form-control form-control-lg" id="inputImg" accept="image/png, image/gif, image/jpeg" lang="fr" defaultValue={newPic} onChange={ (e) => setcurrentPic(e.target.value) } required />
                        </div>
                        <div className="col-12 btns">
                            {/* <button type="submit" className="btn">Close</button> */}
                            <button onClick={ () => setmod2(false) } className="btn">Close</button>
                            <button onClick={ () => Edit() } className="btn">Save</button>
                        </div>
                    </div>
                    {/* </form> */}
                </Modal>
            </div>
        </section>
    );
}

export default AdminSpace ;