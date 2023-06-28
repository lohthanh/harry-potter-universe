const { Users } = require('../models/users.model');

// create
module.exports.CreateUser = (req, res) => {
    Users.create( req.body)
        .then(user => res.json(user) )
        .catch(err => res.status(400).json(err));
}

// read
module.exports.allUsers = ( req, res ) => {
    Users.find({})
        .then( users => res.json(users))
        .catch(err => res.status(400).json(err));
}

// update
module.exports.updateUser = ( req, res ) => {
    Users.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateUser => res.json(updateUser))
        .catch(err => res.status(400).json(err));
}

// delete
module.exports.deleteUser = ( req, res ) => {
    Users.deleteOne( { _id: req.params.id } )
        .then(deleteConfirmation => res.json(deleteConfirmation));
}

// findOne
module.exports.getOneUser = ( req, res ) => {
    Users.findOne( { _id: req.params.id } )
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
}