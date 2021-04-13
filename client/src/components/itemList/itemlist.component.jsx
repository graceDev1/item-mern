import React, {useContext, useEffect} from 'react'
import './item.component.css'
import {item} from './itemListData'
import { ContextProvider } from '../context/GlobalContext';

function ItemList() {
    const { items, getItem, deleteItem } = useContext(ContextProvider); 
    useEffect(()=>{
        getItem()
    },[])
  
    return (
        <section>
            {items.map((itemData,index)=>(
            <div key={index} class="card mb-3 shadow" style={{maxWidth: '70%', marginTop: '5%', marginLeft: '15%'}}>
                <div class="row g-0 " >
                    <div class="col-md-4">
                        <img src={itemData.picture} alt="..." style={{maxWidth: '60%', justifyContent:'center'}}/>
                    </div>
                    <div class="col-md-6" style={{maxWidth: '100%'}}>
                        <div class="card-body">
                            <h5 class="card-title">{itemData.label}</h5>
                            <p class="card-text">{itemData.description}</p>
                            <p class="card-text"><small class="text-muted">Prix-Unitaire: {itemData.price} * Quantity: {itemData.qte} = {itemData.price * itemData.qte}</small></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-outline-danger form-control mr-2" onClick={()=> deleteItem(itemData._id)} style={{marginTop: '46%', marginRight: '2%', maxWidth: '80%'}}>Delete</button>
                    </div>
                </div>
            </div>            
        ))}
        </section>
        
    )
}

export default ItemList
