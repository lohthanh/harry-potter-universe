const UsersController = require('../controllers/users.controller');
const { authenticate } = require('../config/middleware.config');
// authenticate middleware would be used for any route we want to ensure the user is logged in for

module.exports = (app) => {
    app.get('/api/users/:id', UsersController.getOneUser);
    app.get('/api/users', UsersController.allUsers);
    app.put('/api/users/:id', UsersController.updateUser);
    app.post('/api/users', UsersController.CreateUser);
    app.post('/api/auth', UsersController.CreateUser);
    app.delete('/api/auth', UsersController.deleteUser);
    app.delete('/api/users/:id', UsersController.deleteUser);
}