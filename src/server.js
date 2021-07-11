const express = require("express");
const path = require("path");
const fs = require("fs")

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "../dist")))

app.use("/mybutton", (req, res) => {
    const htmlPath = path.resolve(__dirname, "../dist/my-button.html");
    const stringifiedHtmlFileContent = fs.readFileSync(htmlPath, "utf-8")
    res.send(stringifiedHtmlFileContent);
})

app.use("/pokemon", (req, res) => {
    const htmlPath = path.resolve(__dirname, "../dist/pokemon-image.html");
    const stringifiedHtmlFileContent = fs.readFileSync(htmlPath, "utf-8")
    res.send(stringifiedHtmlFileContent);
})

app.listen(3000, () => {
    console.log(">>>> The app is running on http://localhost:3000/")
})