const multer = require('multer');
const path = require('path');

const maxSize = 5 * 1024 * 1024

// Setting storage engine for markers' icons
const storageEngine = multer.diskStorage({
    destination: '../frontend/src/assets/images/icons', // Repertory where the file will be upload
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${(file.originalname.split(' ')).join('_')}`);
    }
});

// Setting storage engine for markers' icons
const storageEngineAvatar = multer.diskStorage({
    destination: '../frontend/src/assets/images/users', // Repertory where the file will be upload
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${(file.originalname.split(' ')).join('_')}`);
    }
});

// Initializing multer for markers' icons
const upload = multer({
    storage: storageEngine,
    limits: {
        fileSize: maxSize
    },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
});

// Initializing multer for users' avatar
const uploadAvatar = multer({
    storage: storageEngineAvatar,
    limits: {
        fileSize: maxSize
    },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
});

const checkFileType = function async(file, cb) {
    // Allowed file extensions
    const fileTypes = /jpeg|jpg|png/;
    // Check extension names
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
        return cb(null, true)
    } else {
        cb('format de fichier non supporté !');
    }
};

module.exports = {upload, uploadAvatar};