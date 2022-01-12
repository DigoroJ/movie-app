const { response } = require("express");
const db = require("../models");

const Movie = db.movies;


exports.create = (req, res ) => {

    console.log("Inside create")
    if(!req.body.title){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    //Create a tutorial
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        rate: req.body.rate,
        year: req.body.year,
        length: req.body.length
    })

    //save tutorial in the database
    Movie
    .create(movie)
    .then(data => res.send(data))
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while cate the movie."
        })
    })
}
exports.search = (req, res) => {
    const queries = req.query;
    if(!queries) return res.status(404).send({message:"add a queary"})
    let condition={};
    condition = queries.title ? { title: { $regex: new RegExp(queries.title), $options: "i"}} : {};
    condition = queries.genre ? { genre: { $regex: new RegExp(queries.genre), $options: "i"}} : condition;
    condition = queries.year ? { year: { $regex: new RegExp(queries.year), $options: "i"}} : condition;
    if(condition&& Object.keys(condition).length === 0 && Object.getPrototypeOf(condition) === Object.prototype) return res.status(404).send({message:"query not found"});
    Movie.find(condition)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occured while retrieving movies."
        })
    })
}
exports.findAll = (req, res) => {
    Movie.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occured while retrieving movies."
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    Movie.findById(id)
    .then(data => {
        if(!data)
           res.status(404).send({message: `Not found Movies with id ` + id })
        else
            res.send(data)
    })
    .catch( err => {
        res.status(500)
        .send({message: "Error retrieveing movies with id " + id})
    })
}

exports.update = (req, res) => {

    if(!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty"
        })
    }

    const id = req.params.id;
    Movie.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(400).send({
                message: `Cannot update Tutorial with ${id}, Maybe Movies was found!`
            })
        }else{
            res.send({
                message: "Movies was update seccessfully"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Movies with id " + id
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Movie.findByIdAndRemove(id, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `Cannot delete movie with id=${id}. Maybe movie was not found!`
            })
        }else{
            res.send({
                message: "movie was deleted successfully!"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete movie with id " + id
        })
    })

}

exports.deleteAll = (req, res) => {

    Movie.deleteMany({})
    .then(data => {
        res.send({
            message: `movie were deleted successfully.`
        })
    })
    .catch(err =>{
        res.send({
            message: "Some error occurred while removing all movie."
        })
    })
}
