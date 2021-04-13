import ItemModel from '../models/item.model';

function getItem(req, res){
    ItemModel.find()
    .then(data=> res.json(data))
    .catch(err => console.log(err));
}


function addItem(req, res) {
    const { label, qte, price, description, picture } = req.body;
    if(!label | !qte | !price | !picture) return res.json({msg: 'please fill all fields!!!'});

    const item = new ItemModel({label, qte, price, description, picture});
    if(item.qte !== 0){
 
        ItemModel.findOne({label})
        .then(data => {
            if(data){
                ItemModel.findByIdAndUpdate(data.id, {qte: data.qte + qte},
                     {new: true},
                     (err, ite)=>{
                         if(err) throw err;
                         res.json(ite)
                     })
            }
             else {
            item.save()
            .then(data => res.json(data))
            .catch(err => console.log(err));
        }
        }
        )
    
       
       
    }
    
}


function deleteItem(req, res){
    const id = req.params.id;
    ItemModel.findByIdAndDelete(id, (err, item)=>{
        if(err) throw err;
        res.json(item);
    })
}




export {
    getItem,
    deleteItem,
    addItem
}