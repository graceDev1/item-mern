import connect from '../connect'

// picture:{
//     type: String,
//     required: true
// },


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
    }
});


export default connect.model('items',ItemModel);