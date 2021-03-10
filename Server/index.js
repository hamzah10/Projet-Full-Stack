import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';



const app = express();
app.use('/posts',postRoutes);

app.use(bodyParser.json({limit : "30mb",extend:true}));
app.use(bodyParser.urlencoded({limit : "30mb",extend:true}));
app.use(cors());

const Connection_Url = "mongodb+srv://hamzaos:Ouldsaidia123@cluster0.x9lp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT  || 5000;

mongoose.connect(Connection_Url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))).catch((error) => console.log("error message"));

mongoose.set('useFindAndModify',false); 
