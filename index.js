//---Importing Modules---//
import express from 'express';
import dotenv from 'dotenv';
import { connectDB, getDB } from './db/conn.js';
import postsRouter from './routes/posts.js';
import commentsRouter from './routes/comments.js';

//---Loading Enviroment Variables---//
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

//---JSON Parser---//
app.use(express.json());

//---Route Connections---//
connectDB().then(() => {
    app.use('/users', usersRouter);
    app.use('/posts', postsRouter);
    app.use('/comments', commentsRouter);
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});