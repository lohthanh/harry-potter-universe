const { Users } = require('../models/users.model');

// create/login controller
module.exports.CreateUser = {
    create: async (req, res) => {
        try { 
            req.session.user = await Users.create( req.body)
            await req.session.save();
            return res.json( req.session.user );
        } catch ( error ){
        return res.status(400).json(error);
        }
    },

    login: async ( req, res ) => {
        try {
            req.session.user = await Users.checklogin(req.body);
            await req.session.save();
            return res.json(req.session.user);
        } catch ( error ) {
            return res.status(401).json(error)
        }
    },

    logout: ( req, res ) => {
        req.session.destroy();
        return res.json({ message: 'success'});
    }
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