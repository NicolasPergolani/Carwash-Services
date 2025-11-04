const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { authenticateJWT, authorizeAdmin } = require('../middlewares/auth.middleware');

router.get('/', serviceController.getServices);
router.post('/', authenticateJWT, authorizeAdmin, serviceController.createService);
router.put('/:id', authenticateJWT, authorizeAdmin, serviceController.updateService);
router.delete('/:id', authenticateJWT, authorizeAdmin, serviceController.deleteService);

module.exports = router;
