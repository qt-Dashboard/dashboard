const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lon: {
        type: Number,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
}, {
    timestamps: true,
});

const Marker = mongoose.model('Marker', markerSchema);

module.exports = Marker;
