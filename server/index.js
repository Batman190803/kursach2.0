const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 1488
const newsRouter = require('./routers/newsRouter')

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', newsRouter)

app.listen(port, () => {
    console.log("Server started");
});
