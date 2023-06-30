const QuizResultController = require('../controllers/quizresults.controller');

module.exports = ( app ) => {
    app.get('/api/results/:id', QuizResultController.getOneQuizResult);
    app.get('/api/results', QuizResultController.allQuizResults);
    app.post('/api/results', QuizResultController.CreateQuizResults);
    app.put('/api/results/edit/:id', QuizResultController.updateQuizResults);
    app.delete('/api/results/:id', QuizResultController.deleteQuizResult);
}