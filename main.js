import config from './config/config.js';
import express from 'express';
const app = express();
const{port}=config();

app.get("/", (req, res) => {
    res.send("hello word");
    console.log(req.method);
    console.log(req.url)
})

app.post("/about", (req, res) => {
    res.send("hello about  meee!!!");
})
app.listen(port, () => {
    console.log("server runnig.........", port)
})