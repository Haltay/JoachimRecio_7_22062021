const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');

const authCtrl = require('../controllers/auth');
const auth = require('../middlewares/auth');

// Limitation du nombre d'essai max 
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 3,
    message: 'Veuillez réessayer de vous connecter plus tard',    
});

router.post('/signup', limiter, authCtrl.signup);
router.post('/login', limiter, authCtrl.login);
router.get('/user', auth, authCtrl.getCurrentUser);

module.exports = router;
