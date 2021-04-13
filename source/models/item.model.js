import connect from '../connect'




const ItemModel = connect.Schema({
    label: {
        type: String,
        required: true
    },
    qte:{
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description:{
        type:String,
        required:false
    },
    picture:{
        type: String,
        required: true
    },
});


export default connect.model('items',ItemModel);