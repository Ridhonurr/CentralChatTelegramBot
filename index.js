import express from "express";
import router from "./src/core/routes.js";


const app = express();
app.use(express.json());
app.use("/api",router);

const port = 3000;
app.listen(port, ()=> {
    console.log(`Server running port ${port}`)
});
