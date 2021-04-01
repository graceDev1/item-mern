import ItemModel from '../models/item.model';

function getItem(req, res){
    ItemModel.find()
    .then(data=> res.json(data))
    .catch(err => console.log(err));
}


function addItem(req, res) {
    const { label, qte, price } = req.body;
    if(!label | !qte, ! price) return res.json({msg: 'please fill all fields!!!'});

    const item = new ItemModel({label, qte, price});
    if(item.qte !== 0){
        item.save()
        .then(data => res.json(data))
        .catch(err => console.log(err));
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