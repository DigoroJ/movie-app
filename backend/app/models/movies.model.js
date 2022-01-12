
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        genre: String,
        rate: Number,
        year: String,
        length: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Movie = mongoose.model("Movie", schema);
    return Movie;
  };