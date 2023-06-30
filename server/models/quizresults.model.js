const mongoose = require('mongoose');

const QuizResultSchema = new mongoose.Schema({
    answer: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
}, { timestamps: true } );

module.exports.QuizResults = mongoose.model('QuizResults', QuizResultSchema);