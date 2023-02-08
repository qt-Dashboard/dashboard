const categoryController = {};

const Category = require('../models/Category.model');

categoryController.createCategory = async (req, res) => {
    try {
        const searchCategory = await Category.findOne({name: req.body.name});
        if (searchCategory) {
            return res.status(400).json({message: `La catégorie ${searchCategory.name} existe déjà !`});
        } 
        const searchVariable = await Category.findOne({variable: req.body.variable});
        if (searchVariable) {
            return res.status(400).json({message: `La variable ${searchVariable.variable} existe déjà !`});
        } 
        else {
            const {name, variable} = req.body;
            const icon = req?.file?.filename;
            const newCategory = new Category({
                name: name,
                variable: variable,
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
            const {name, variable} = req.body;
            const icon = req?.file?.filename;
            await category.updateOne({
                name: name,
                variable: variable,
                icon: icon,
            });
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
            category.remove();
            res.status(200).json({message: `La catégorie a bien été supprimée !`})
        }

    }catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = categoryController;