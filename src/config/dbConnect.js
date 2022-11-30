import mongoose from "mongoose";

mongoose.connect('mongodb+srv://ioshi:rafael04@alura.s4cx5eq.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;