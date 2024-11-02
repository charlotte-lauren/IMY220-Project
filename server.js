import express from "express";

const app = express();

app.use(express.static("public"));

const PORT = 5500;
app.listen(PORT, () => {
    //5
    console.log(`Listening on port ${PORT}`);
})
