import mongoose from 'mongoose';
import config from 'config';

mongoose.connect(config.get('uri-connect'), {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
 },
 ()=> console.log('connected')
    )

export default mongoose;