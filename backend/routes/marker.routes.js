const {Router} = require('express');
const router = Router();

const {
    createMarker,
    getAllMarkers,
    getOneMarker,
    updateMarker,
    deleteMarker
} = require('../controllers/marker.controller');

router.post('/create', createMarker);

router.get('/', getAllMarkers);

router.get('/update/:id', getOneMarker);
router.patch('/update/:id', updateMarker);

router.delete('/delete/:id', deleteMarker);

module.exports = router;