const UsersController = require('../controllers/users.controller');

module.exports = (app) => {
    app.get('/api/users/:id', UsersController.getOneUser);
    app.get('/api/users', UsersController.allUsers);
    app.post('/api/users', UsersController.CreateUser);
    app.put('/api/users/:id', UsersController.updateUser);
    app.delete('/api/users/:id', UsersController.deleteUser);
}