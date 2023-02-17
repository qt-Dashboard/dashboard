const fs = require('fs');

const userController = {};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User.model');

userController.register = async (req, res) => {
    try {
        const searchUser = await User.findOne({email: req.body.email})
        if (searchUser) {
            return res.status(400).json({message: `L'utilisateur ${searchUser.email} existe déjà !`});
        } else {
            const {firstName, lastName, password, role} = req.body;
            const email = req.body.email.toLowerCase();
            const avatar = req?.file?.filename;
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                avatar: avatar,
                role: role,
            });
            await newUser.save();
            return res.status(201).json({message: `L'utilisateur ${newUser.email} a été créé !`}) 
        }
    }
    catch (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(500).json({
                message: `Le fichier doit être inférieur à 5MB`
            }); 
        }
        return res.status(500).json({message: err.message});
    }
}

userController.getAllUsers = async (req, res) => {
    const users = await User.find().sort('email');
    try {
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

userController.getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).json({message: `L'utilisateur n'existe pas !`});
        } else {
            res.status(200).json(user);
        }
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

userController.updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).json({message: `L'utilisateur n'existe pas !`});
        } else {
            // Delete the previous user's avatar
            const directoryPath = '../frontend/src/assets/images/users/'; // Repertory of the avatar
            const avatarName = user.avatar;
            if (user.avatar != 'default.jpg') {
                fs.unlink(directoryPath + avatarName, (err) => {
                    if (err) {
                        console.log(err)
                    }
                });
            }
            const {firstName, lastName} = req.body;
            const email = req.body.email.toLowerCase();
            if (!req.file) {
                await user.updateOne({
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                })
            } else {
                const avatar = req.file.filename;
                await user.updateOne({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    avatar: avatar,
                });
            }
            res.status(200).json({message: `L'utilisateur a bien été mis à jour !`})
        }
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

userController.updateUserPassword = async (req, res) => {
    try {
        const {actual_password, password, confirm_password} = req.body;
        const user = await User.findById(req.params.id);
        const isMatch = await bcrypt.compare(actual_password, user.password);
        const isMatchNewPassword = await bcrypt.compare(password, user.password);
        if (!user) {
            return res.status(400).json({message: `L'utilisateur n'existe pas !`});
        } else if (!isMatch) {
            return res.status(400).json({message: `Le mot de passe actuel ne correspond pas !`});
        } else if (isMatchNewPassword) {
            return res.status(400).json({message: `Le nouveau mot de passe doit être différent de l'ancien !`});
        } else if (password !== confirm_password) {
            return res.status(400).json({message: `Les mots de passe ne correspondent pas !`});
        } else {
            let newPassword = await bcrypt.hash(password, 10);
            await user.updateOne({password: newPassword});
            res.status(200).json({message: `Le mot de passe a bien été mis à jour !`})
        }
    }catch (err) {
        return res.status(500).json({message: err.message});
    }
}

userController.getReset = async (req, res) => {
    try {
        const user = await User.findOne({uniqueString: req.params.uniqueString});
        if (!user) {
            return res.status(400).json({message: `L'utilisateur n'existe pas !`});
        } else {
            res.status(200).json(user);
        }
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

userController.resetUserPassword = async (req, res) => {
    try {
        const {password, confirm_password} = req.body;
        const user = await User.findOne({uniqueString: req.params.uniqueString});
        const isMatchNewPassword = await bcrypt.compare(password, user.password);
        if (!user) {
            return res.status(400).json({message: `L'utilisateur n'existe pas !`});
        } else if (isMatchNewPassword) {
            return res.status(400).json({message: `Le mot de passe doit être différent de l'ancien !`});
        } else if (password !== confirm_password) {
            return res.status(400).json({message: `Les mots de passe ne correspondent pas !`});
        } else {
            let newPassword = await bcrypt.hash(password, 10);
            let uniqueString = '';
            await User.findByIdAndUpdate(user._id, {password: newPassword, uniqueString: uniqueString});
            res.status(200).json({message: `Le mot de passe bien été mis à jour !`})
        }
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

userController.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email: email});
        if (!user) {
            res.status(400).json({message: `L'utilisateur n'existe pas !`});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({message: `Mot de passe incorrect !`});
        };

        const payload = {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            avatar: user.avatar
        };

        const token = jwt.sign(payload, process.env.TOKEN, {expiresIn: '2hours'});
        return res.status(200).json({
            message: {
                token: token,
                userId: user._id,
                lastName: user.lastName,
                firstName: user.firstName,
                role: user.role,
                avatar: user.avatar
            }
        });
    }
    catch (err) {
        return res.status(500);        
    }
}

userController.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).jsons({message: `L'utilisateur n'existe pas !`});
        } else {
            const directoryPath = '../frontend/src/assets/images/users/'; // Repertory of the avatar
            const avatarName = user.avatar;
            if (user.avatar != 'default.jpg') {
                fs.unlink(directoryPath + avatarName, (err) => {
                    if (err) {
                        console.log(err)
                    }
                });
            }
            await user.remove();
            res.status(200).json({message: `L'utilisateur' a bien été supprimé !`})
        }

    }catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = userController;