const markerController = {};

const Marker = require('../models/Marker.model');

markerController.createMarker = async (req, res) => {
    try {
        const searchMarker = await Marker.findOne({name: req.body.name});
        if (searchMarker) {
            return res.status(400).json({message: `Le marqueur ${searchMarker.name} existe déjà !`});
        } 
        const searchLon = await Marker.findOne({lon: req.body.lon});
        const searchLat = await Marker.findOne({lat: req.body.lat});
        if (searchLon && searchLat) {
            return res.status(400).json({message: `Les coordonnées '${searchCoordonates.lon}, ${searchCoordonates.lat}' existent déjà !`});
        } 
        else {
            const {name, lat, lon, categoryId} = req.body;
            const newMarker = new Marker({
                name: name,
                lon: lon,
                lat: lat,
                categoryId: categoryId,
            });
            await newMarker.save();
            return res.status(201).json({message: `Le marqueur ${newMarker.name} a été créé !`}) 
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

markerController.getAllMarkers = async (req, res) => {
    const markers = await Marker.find().sort('name').populate('categoryId');
    try {
        res.status(200).json(markers);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

markerController.getOneMarker = async (req, res) => {
    try {
        const marker = await Marker.findById(req.params.id);
        if (!marker) {
            return res.status(400).json({message: `Le marqueur n'existe pas !`});
        } else {
            res.status(200).json(marker);
        }
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

markerController.updateMarker = async (req, res) => {
    try {
        const marker = await Marker.findById(req.params.id);
        if (!marker) {
            return res.status(400).json({message: `Le marqueur n'existe pas !`});
        } else {
            const {name, lat, lon, categoryId} = req.body;
            await marker.updateOne({
                name: name,
                lon: lon,
                lat: lat,
                categoryId: categoryId,
            });
            res.status(200).json({message: `Le marqueur a bien été mis à jour !`})
        }
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

markerController.deleteMarker = async (req, res) => {
    try {
        const marker = await Marker.findById(req.params.id);
        if (!marker) {
            return res.status(400).jsons({message: `Le marqueur n'existe pas !`});
        } else {
            marker.remove();
            res.status(200).json({message: `Le marqueur a bien été supprimé !`})
        }

    }catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = markerController;