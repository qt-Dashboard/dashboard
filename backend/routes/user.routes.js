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

const {uploadAvatar} = require('../middlewares/multer.middleware');

router.post('/register', uploadAvatar.single('avatar'), register);

router.get('/', getAllUsers);

router.get('/update/:id', getOneUser);
router.patch('/update/:id', uploadAvatar.single('avatar'), updateUser);

router.patch('/update-password/:id', updateUserPassword); // Not use in front for the moment

router.get('/reset-password/:uniqueString', getReset); // Not use in front for the moment
router.patch('/reset-password/:uniqueString', resetUserPassword); // Not use in front for the moment

router.post('/login', login);

router.delete('/delete/:id', deleteUser);

module.exports = router;