const fs = require('fs');

const categoryController = {};

const Category = require('../models/Category.model');
const Marker = require('../models/Marker.model');

categoryController.createCategory = async (req, res) => {
    try {
        const searchCategory = await Category.findOne({name: req.body.name});
        if (searchCategory) {
            return res.status(400).json({message: `La catégorie ${searchCategory.name} existe déjà !`});
        } 
        else {
            const {name} = req.body;
            const icon = req?.file?.filename;
            const newCategory = new Category({
                name: name,
                icon: icon,
            });
            await newCategory.save();
            return res.status(201).json({message: `La catégorie ${newCategory.name} a été créée !`}) 
        }
    }
    catch (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(500).json({
                message: `Le marqueur doit être inférieur à 5MB`
            }); 
        }
        return res.status(500).json({message: err.message});
    }
}

categoryController.getAllCategories = async (req, res) => {
    const categories = await Category.find().sort('name');
    try {
        res.status(200).json(categories);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

categoryController.getOneCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(400).json({message: `La catégorie n'existe pas !`});
        } else {
            res.status(200).json(category);
        }
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

categoryController.updateCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(400).json({message: `La catégorie n'existe pas !`});
        } else {
            // Delete the previous icon marker
            const directoryPath = '../frontend/src/assets/icons/'; // Repertory of the icons markers
            const iconMarker = category.icon;
            if (category.icon != 'marker-icon.png') {
                fs.unlink(directoryPath + iconMarker, (err) => {
                    if (err) {
                        console.log(err)
                    }
                });
            }
            const {name} = req.body;
            if (!req.file) {
                await category.updateOne({
                    name: name
                }); 
            } else {
                const icon = req.file.filename;
                await category.updateOne({
                    name: name,
                    icon: icon,
                });
            }
            res.status(200).json({message: `La catégorie a bien été mise à jour !`})
        }
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

categoryController.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(400).jsons({message: `La catégorie n'existe pas !`});
        } else {
            const directoryPath = '../frontend/src/assets/images/icons/'; // Repertory of the icons markers
            const iconMarker = category.icon;
            if (category.icon != 'marker-icon.png') {
                fs.unlink(directoryPath + iconMarker, (err) => {
                    if (err) {
                        console.log(err)
                    }
                });
            }
            await Marker.deleteMany({categoryId: req.params.id});
            await category.remove();
            res.status(200).json({message: `La catégorie a bien été supprimée !`})
        }
    }
    catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = categoryController;