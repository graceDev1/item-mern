import express from 'express';
import itemRoute from './routes/item.route';
import userRoute from './routes/user.route';

import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/item', itemRoute);
app.use('/api/user', userRoute)

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server run on port ${port}...`))