const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req,res) => {
    res.send("Ciao Carlo")
});

app.listen(port, () => {
    console.log(`app in ascolto sulla porta `+ port)
});