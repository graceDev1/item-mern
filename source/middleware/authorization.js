import config from 'config';
import jwt from 'jsonwebtoken';

function authorization(req,res,next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(502).json({msg:'no token access denied'});

    try{
        const decoded = jwt.verify(token, config.get('secret_key'));
        req.user = decoded;
        next();
    }
    catch(e){
        next(e);
    }
}

export default authorization;