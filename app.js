import { randomMessage } from "./function.js";
import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render("main.ejs")
});

app.post("/", (req, res) => {
    const message = randomMessage();
    res.render("main.ejs", {
        bandName: message
    })
});








app.listen(port, function() {
    console.log("Server started on port 3000");
  });
  