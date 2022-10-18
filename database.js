import mongoose, { mongo } from "mongoose";

const url = "mongodb+srv://facudiezojeda:Patito36@proyectofinal.ptgu6vy.mongodb.net/test";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("bd conectado")
});
