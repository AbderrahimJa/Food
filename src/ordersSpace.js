import { useState, useEffect } from "react";

const OrderSpace = () => {
    const [ orders, setorders ] = useState();
    const funOfFetch = () => {
        fetch('http://localhost:8000/orders')
        .then( (res) => res.json() )
        .then( (data) =>
            // for (let i = 0; i < data.length; i++) {
            //     const element = data[i];
            //     setorders( (prev) => {
            //         return [ { id:element.id, ide:i, name:element.name, price:element.price, ingredients:element.ingredients, img:element.img, description:element.description }, ...prev]
            //     });
            //     setcpt(i);
            // }
            setorders(data)
        )
        .catch( (error) => console.error(error));
    }
    useEffect( () => {
        funOfFetch();
    },[]);
    const change = (e,i) => {
        var a = e.target.value;
        var b = {} ;
        for (let j = 0; j < orders.length; j++) {
            const element = orders[j];
            if (element.id==i) {
                b = element;
                b.status=a;
                break;
            }
        }
        fetch('http://localhost:8000/orders/'+i , {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(b)
        })
        .then( () => funOfFetch() );
    }
    return(
        <section className="AdSp1">
            <div className="row">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Orders</th>
                            <th scope="col">Quantite</th>
                            <th scope="col">Price</th>
                            <th scope="col">Commentaire</th>
                            <th scope="col" className="slct">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { orders && orders.map( (ord) => 
                            <tr>
                                <th scope="row">{ord.id}</th>
                                <td>
                                    { ord.what && ord.what.map( (wh) => 
                                        <p>{wh.name}</p>
                                    )}
                                </td>
                                <td>
                                    { ord.what && ord.what.map( (wh) => 
                                        <p>{wh.quantite}</p>
                                    )}
                                </td>
                                <td><p>{ord.prixTotale}</p></td>
                                <td><p>{ord.Commentaire}</p></td>
                                <td className="slct">
                                    { ord.status=="Recive" && 
                                        <select class="form-select form-select-lg" aria-label=".form-select-lg example" onChange={ (e) => change(e,ord.id) } >
                                            <option value="Recive" selected >Recive</option>
                                            <option value="In progress">In progress</option>
                                            <option value="Ready">Ready</option>
                                        </select>
                                    }
                                    { ord.status=="In progress" && 
                                        <select class="form-select form-select-lg" aria-label=".form-select-lg example" onChange={ (e) => change(e,ord.id) } >
                                            <option value="Recive">Recive</option>
                                            <option value="In progress" selected >In progress</option>
                                            <option value="Ready">Ready</option>
                                        </select>
                                    }
                                    { ord.status=="Ready" && 
                                        <select class="form-select form-select-lg" aria-label=".form-select-lg example" onChange={ (e) => change(e,ord.id) } >
                                            <option value="Recive">Recive</option>
                                            <option value="In progress">In progress</option>
                                            <option value="Ready" selected >Ready</option>
                                        </select>
                                    }
                                    {/* <p>status</p> */}
                                    {/* <button><i className='bi bi-trash mr-4 fa-lg'></i></button>
                                    <button><i className='bi bi-pencil ml-4 fa-lg'></i></button> */}
                                    {/* <i onClick={ () => Delete(food.id) } className='bi bi-trash mr-4 fa-lg'></i>
                                    <i onClick={ () => open2(food.name,food.img,food.description,food.price,food.id) } className='bi bi-pencil ml-4 fa-lg'></i> */}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default OrderSpace ;