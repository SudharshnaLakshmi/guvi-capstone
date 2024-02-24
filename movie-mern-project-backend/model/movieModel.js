const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    movieName:{
        type : String,
        required : true,
        unique : true,
        index:true
    },
    movieYear : {
        type : String,
        required : true
    },
    movieGenre1 : {
        type : String,
        enum: ['Action', 'Comedy','Drama','SciFi','Horror','Thriller','Romance','Fantasy','Animation','Adventure','Crime', 'Biography'],
        required : true
    },
    movieGenre2 : {
        type : String,
        enum: ['Action', 'Comedy','Drama','SciFi','Horror','Thriller','Romance','Fantasy','Animation','Adventure','Crime', 'Biography'],
        required : true
    },
    movieGenre3 : {
        type : String,
        enum: ['Action', 'Comedy','Drama','SciFi','Horror','Thriller','Romance','Fantasy','Animation','Adventure','Crime', 'Biography'],
        required : true
    },
    movieGenre4 : {
        type : String,
        enum: ['Action', 'Comedy','Drama','SciFi','Horror','Thriller','Romance','Fantasy','Animation','Adventure','Crime', 'Biography'],
        required : true
    },
    imdbRating :{
        type : Number,
        required : true,
        min:0,
        max:10
    }
},{
    collection : 'movie'
})

module.exports = mongoose.model('movie', movieSchema);
