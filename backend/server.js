const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const moviesRoutes=require("./app/routes/movies.routes");
const morgan = require('morgan');
const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
}
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

db.mongoose
.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("connected to the database!")
})
.catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
})

app.use("/api/v1/movies/",moviesRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});