import express from 'express';
import mongoose from 'mongoose';                 {/*npm i mongoose in the root*/}
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

mongoose.connect("mongodb+srv://thisal:thisal@cluster0.zcafugr.mongodb.net/?retryWrites=true&w=majority").then ( () => {
    console.log('Connected to MongoDB!');
})
.catch( (err) => {console.log(err)});

const app = express();

app.use(express.json());      {/*change this shit*/}

app.listen (3000, () => {
   console.log('Server is running on port 3000');
}
);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter); 
