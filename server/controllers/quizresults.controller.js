const { QuizResults } = require('../models/quizresults.model');
// import { response } from 'express';

// create
module.exports.CreateQuizResults = ( req, res ) => {
    QuizResults.create( req.body )
        .then( quizresult => res.json( quizresult ) )
        .catch( err => res.status(400).json( err ) );
}

// read
module.exports.allQuizResults = ( req, res ) => {
    QuizResults.find()
        .then( quizresults => res.json( quizresults ) )
        .catch( err => res.status(400).json( err ) );
}

// update
module.exports.updateQuizResults = ( req, res ) => {
    QuizResults.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true, runValidators: true } )
}

// delete
module.exports.deleteQuizResult = ( req, res ) => {
    QuizResults.deleteOne( { _id: req.params.id } )
        .then( deleteConfirmation => res.json( deleteConfirmation ) );
}

// findOne
module.exports.getOneQuizResult = ( req, res ) => {
    QuizResults.findOne( { _id: req.params.id } )
        .then( quizresult => res.json( quizresult ))
        .catch( err => res.status(400).json( err ) );
}