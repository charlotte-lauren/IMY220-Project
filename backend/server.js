import express from "express";

const app = express();
const PORT = 5500;

app.use(express.static("frontend/public"));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
