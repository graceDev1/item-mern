import userModel from '../models/user.model';
import config from 'config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const register = (req,res) => {
    let { name, email, password} = req.body;
    if(!name | !email | !password) return res.json({msg: 'please fill all fields'});

    userModel.findOne({email})
    .then(user => {
        if(user) return res.status(502).json({msg:'user already exists'});
        const newUSer = new userModel({name,email,password});
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(password,salt, (err, hash)=>{
                if(err) throw err;
                newUSer.password = hash;
                newUSer.save()
                .then(user => {
                    jwt.sign(
                        {id: user.id},
                        config.get('secret_key'),
                        {expiresIn: 3600},
                        (err, token) =>{
                            if(err) throw err;
                            res.json({
                                user: {
                                    token,
                                    id: user.id,
                                    name: user.name,
                                    email: user.email

                                }
                            })
                        }
                    )
                })
                .catch(err => console.log(err));
            })
        })
    })
}


const login = (req,res) => {
    let { email , password} = req.body;
    if(!email | !password) return res.json({msg: 'Please provide the email and password !!!'});
    userModel.findOne({email})
    .then(user => {
        if(!user) return res.status(502).json({msg:'User does not exist'});
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({msg:'Incorrect Password!!'});
            jwt.sign(
                {id: user.id},
                config.get('secret_key'),
                {expiresIn: 3600},
                (err, token) =>{
                    if(err) throw err;
                    res.json({
                        user: {
                            token,
                            id: user.id,
                            name: user.name,
                            email: user.email

                        }
                    })
                }
            )

        })
    })
}


const getUser = (req,res) =>{
    userModel.findById(req.users.id)
    .select('-password')
    .then(user => res.json(user))
    .catch(err => console.log(err));
}

export {
    register,
    login,
    getUser
}