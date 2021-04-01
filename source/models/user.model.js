import connect from '../connect'

const UserModel = connect.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});


export default connect.model('users',UserModel);