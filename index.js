import express from "express";
import notFound from "./src/middleware/not-found.js";

const app = express();



app.get("/", (req, res) => {
    res.send("Bienvenidos");
});

app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
