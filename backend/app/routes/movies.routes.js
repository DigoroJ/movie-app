
const movies = require("../controllers/movies.controller");

var router = require("express").Router();

router.post('/add_movie', movies.create);

router.get("/movie/:id", movies.findOne);

router.get("/", movies.findAll);

router.get("/search/",movies.search);

router.put("/movie/update/:id", movies.update);

router.delete("/movie/delete/:id", movies.delete);

router.delete("/delete", movies.deleteAll)


module.exports=router;