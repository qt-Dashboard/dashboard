const {Router} = require('express');
const router = Router();

const {
    register,
    getAllUsers,
    getOneUser,
    updateUser,
    updateUserPassword,
    resetUserPassword,
    getReset,
    deleteUser,
    login
} = require('../controllers/user.controller');

router.post('/register', register);

router.get('/', getAllUsers);

router.get('/update/:id', getOneUser);
router.patch('/update/:id', updateUser);

router.patch('/update-password/:id', updateUserPassword);

router.get('/reset-password/:uniqueString', getReset);
router.patch('/reset-password/:uniqueString', resetUserPassword);

router.post('/login', login);

router.delete('/delete/:id', deleteUser);

module.exports = router;