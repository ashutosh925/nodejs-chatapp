import http from 'http';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';


//routes
import indexRouter from "./routes/user.js";
import chatRoomRouter from "./routes/chatRoom.js";
import deleteRouter from "./routes/delete.js";
// // middlewares
// import { decode } from './middlewares/jwt.js'


const app = express();
const port = process.env.PORT || '6000'
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/users", indexRouter);
// app.use("/room", decode, chatRoomRouter);
app.use("/delete", deleteRouter);

// Catch 404 errors 
app.use('*', (req, res) => {
    return res.status(404).json({
        sucess: false,
        message: 'API Endpoint does not exist'
    })
})


// Create HTTP Server
const server = http.createServer(app);

//listen to provided port 
server.listen(port);

//Event listener for HTTP sever listning 
server.on("listening", ()=>{
    console.log(`listening on port:: http://localhost:${port}`)
})

