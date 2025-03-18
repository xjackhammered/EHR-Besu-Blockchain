const express = require('express');
const router = express.Router();
const ehrController = require('../controllers/ehrController');

// Route to get all hospitals
router.get('/', ehrController.getAllHospitals);

// Route to get a specific hospital by ID
router.get('/:id', ehrController.getHospitalById);

// Route to create a new hospital
router.post('/', ehrController.createHospital);

// Route to update a hospital's information
router.put('/:id', ehrController.updateHospital);

// Route to delete a hospital
router.delete('/:id', ehrController.deleteHospital);

module.exports = router;