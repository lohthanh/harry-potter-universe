const { QuizResults } = require('../models/quizresults.model');

// create
module.exports.CreateQuizResults = ( req, res ) => {
    QuizResults.create( req.body )
        .then( quizresult => res.json( quizresult ) )
        .catch( err => res.status(400).json( err ) );
}

// read
module.exports.allQuizResults = ( req, res ) => {
    QuizResults.find({})
        .then( quizresults => res.json( quizresults ) )
        .catch( err => res.status(400).json( err ) );
}