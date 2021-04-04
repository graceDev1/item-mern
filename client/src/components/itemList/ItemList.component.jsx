import React from 'react'
import './item.component.css'
import {items} from './itemListData'
function ItemList() {
    return (
        items.map((itemData,index)=>(
            <div class="card mb-3 shadow" style={{maxWidth: '70%', marginTop: '5%', marginLeft: '15%'}}>
                <div class="row g-0 " >
                    <div class="col-md-4">
                        <img src={itemData.imageUrl} alt="..." style={{maxWidth: '60%', justifyContent:'center'}}/>
                    </div>
                    <div class="col-md-6" style={{maxWidth: '100%'}}>
                        <div class="card-body">
                            <h5 class="card-title">{itemData.nom}</h5>
                            <p class="card-text">{itemData.description}</p>
                            <p class="card-text"><small class="text-muted">Prix-Unitaire: {itemData.prix} * Quantity: {itemData.quantity} = {itemData.prix * itemData.quantity}</small></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-outline-danger form-control mr-2" style={{marginTop: '46%', marginRight: '2%', maxWidth: '80%'}}>Delete</button>
                    </div>
                </div>
            </div>            
        ))
    )
}

export default ItemList
