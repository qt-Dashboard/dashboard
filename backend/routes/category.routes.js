const {Router} = require('express');
const router = Router();

const {upload} = require('../middlewares/multer.middleware');

const {
    createCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category.controller');

router.post('/create', upload.single('icon'), createCategory);

router.get('/', getAllCategories);

router.get('/update/:id', getOneCategory);
router.patch('/update/:id', upload.single('icon'), updateCategory);

router.delete('/delete/:id', deleteCategory);

module.exports = router;