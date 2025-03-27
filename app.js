const express = require("express");
const app = express();
const port = 4000;

// importo posts.js
const posts= require("./posts.js");

// importo post router
const postsRouter = require("./routers/posts.js")

// cartella per i file pubblici
app.use(express.static("public"));


app.get("/", (req,res) => {
    res.send("Server dei post")
});


//rotta post router
app.use('/posts', postsRouter);

//definizione rotta /bacheca
app.get("/bacheca" , (req,res) => {
    res.json(posts);
});



app.listen(port, () => {
    console.log(`app in ascolto sulla porta `+ port)
});