import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect('mongodb+srv://hari:SSps4ApcjOkSOJln@cluster0.sybrma4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
//SSps4ApcjOkSOJln