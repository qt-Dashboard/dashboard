const {Router} = require('express');
const router = Router();

const {
    createCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category.controller');

router.post('/create', createCategory);

router.get('/', getAllCategories);

router.get('/update/:id', getOneCategory);
router.patch('/update/:id', updateCategory);

router.delete('/delete/:id', deleteCategory);

module.exports = router;